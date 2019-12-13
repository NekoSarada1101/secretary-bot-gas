function count() {
    var sheet_url = SpreadsheetApp.openByUrl(PropertiesService.getScriptProperties().getProperty('SPREADSHEET_URL'));
    var sheet_name = sheet_url.getSheetByName("カウント");

    var max_row = sheet_name.getDataRange().getLastRow();
    var count_text = "";

    for (var i = 2; i <= max_row; i++) {
        var title = sheet_name.getRange(i, 1).getValue();
        var sheet_date = sheet_name.getRange(i, 2).getValue().split("/");
        var up_or_down = sheet_name.getRange(i, 3).getValue();

        var date = new Date(sheet_date[0], sheet_date[1] - 1, sheet_date[2]);
        var today = new Date();
        var count_date;

        if (up_or_down.match("アップ")) {
            count_date = today.getTime() - date.getTime();
        } else if (up_or_down.match("ダウン")) {
            count_date = date.getTime() - today.getTime();
        }
        var count = Math.floor(count_date / 1000 / 60 / 60 / 24);

        count_text += "`" + title + "` " + count + "日\n";
    }
    var count_json = {
        "response_type": "ephemeral",
        "attachments": [
            {
                "color": "FFFFFF",
                "text": count_text,
            }
        ]
    };

    postSlack(count_json, "today");
    return ContentService.createTextOutput();
}
