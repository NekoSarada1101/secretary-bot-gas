function fetchConnpassEvent() {
    var info = UrlFetchApp.fetch("https://connpass.com/api/v1/event/");
    var json = JSON.parse(info.getContentText());
    var count = json["results_returned"];

    for (var i = 0; i < count; i++) {
        var address = json["events"][i]["address"];
        if (!address.match(/福岡/)) {
            continue;
        }else{
            return;
        }

        var title = json["events"][i]["title"];
        var event_url = json["events"][i]["event_url"];
        var start = json["events"][i]["started_at"];
        var spreadsheet = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('SPREADSHEET_URL'));
        var sheet = spreadsheet.getSheetByName('connpass');
        var data = sheet.getDataRange().getValues();

        for (var j = 0; j < data.length; j++) {
            if (data[j] === title) {
                break;
            } else if (j === data.length - 1) {
                createEventJson(title, event_url, start);
            }
        }
    }
}

function createEventJson(title, event_url, start) {
    var json = {
        "text": "*" + title + "* \n開始日時：" + start.substring(0,16).replace("T"," ") + "\n" + event_url
    };
    var options = {
        'method': 'post',
        'payload': JSON.stringify(json),
        "muteHttpExceptions": true
    };
    var url = PropertiesService.getScriptProperties().getProperty('CONNPASS_URL');
    UrlFetchApp.fetch(url, options);
}
