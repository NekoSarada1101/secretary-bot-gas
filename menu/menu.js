function doPost(e) {
  // 指定したチャンネルからの命令しか受け付けない
  var slack_token = PropertiesService.getScriptProperties().getProperty('VERIFICATION_TOKEN');
  if (slack_token != e.parameter.token) {
    throw new Error(e.parameter.token);
  }

  data = {
    "response_type": "ephemeral",
    "attachments": [
      {
        "color": "FFFFFF",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "plain_text",
              "text": "何かご用でしょうか？",
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "emoji": true,
                  "text": "予定を教えて"
                },
                "value": "calendar"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "emoji": true,
                  "text": "天気を教えて"
                },
                "value": "weather"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "emoji": true,
                  "text": "テーマを変えたい"
                },
                "value": "theme"
              }
            ]
          }
        ]
      }
    ]
  };

  var options = {
    'method': 'post',
    'payload': JSON.stringify(data)
  };
  var url = PropertiesService.getScriptProperties().getProperty("BOT_URL");
  UrlFetchApp.fetch(url, options);
  return ContentService.createTextOutput();
}
