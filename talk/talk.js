//雑談bot
function doPost(e) {
    var slack_token = PropertiesService.getScriptProperties().getProperty("VERIFICATION_TOKEN");
    if (slack_token != e.parameter.token) {
        throw new Error(e.parameter.token);
    }

    var message = e.parameter.text;
    var user_name = e.parameter.user_name;
    try {
        var url = "https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk";
        var apikey = PropertiesService.getScriptProperties().getProperty("TALK_API_KEY");

        var payload = {
            apikey: apikey,
            query: message,
        };

        var options = {
            method: "post",
            payload: payload,
        };

        var response = UrlFetchApp.fetch(url, options);
        var json = JSON.parse(response.getContentText());
        var result = json["results"][0]["reply"];
        Logger.log("成功");
    } catch (e) {
        Logger.log(e);
        var result = user_name + "さん！" + message + "と言いましたね";
    }
    var data = { text: result };
    postSlack(data);
    return ContentService.createTextOutput();
}

function postSlack(data) {
    var options = {
        method: "post",
        contentType: "application/json",
        muteHttpExceptions: true,
        payload: JSON.stringify(data),
    };

    var url = PropertiesService.getScriptProperties().getProperty("BOT_URL");
    UrlFetchApp.fetch(url, options);
}
