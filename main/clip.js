//evernoteのコマンド /clip yesterday を実行する
function clip() {
    var options = {
        method: "POST",
    };

    // 自分のSlackのドメイン名(hogehoge.slack.comのhogehogeの部分)
    var domain = PropertiesService.getScriptProperties().getProperty("DOMAIN");
    var token = PropertiesService.getScriptProperties().getProperty("LEGACY_TOKEN");
    var channelID = PropertiesService.getScriptProperties().getProperty("CHANNEL_ID");

    var url =
        "https://" +
        domain +
        ".slack.com/api/chat.command?token=" +
        token +
        "&channel=" +
        channelID +
        "&command=/clip&text=yesterday";
    var response = UrlFetchApp.fetch(url, options);
}
