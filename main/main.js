function doPost(e) {
  // ペイロード部分の取り出し
  var payload = JSON.parse(e["parameter"]["payload"]);
  var name = payload["actions"][0]["name"];
  var value = payload["actions"][0]["value"];
  var action_id = payload["actions"][0]["action_id"];
  var data = null;

  switch (value) {
    case "calendar":
      data = calendarJson();
      break;

    case "weather":
      data = weatherJson();
      break;

    case "today":
      data = fetchWeatherInfo(0);
      break;

    case "tomollow":
      data = fetchWeatherInfo(1);
      break;

    case "dayAfterTomollow":
      data = fetchWeatherInfo(2);
      break;

    case "theme":
      data = themeJson();
      break;
  }

  switch (name) {
    case "theme":
      data = themeInfoJson(value);
      break;
  }

  switch (action_id) {
    case "date":
      var date = payload["actions"][0]["selected_date"];
      var my_cal = listupEvent(PropertiesService.getScriptProperties().getProperty('MY_GMAIL'), date); //自分
      var work_cal = listupEvent(PropertiesService.getScriptProperties().getProperty('RECRUIT_GMAIL'), date); //バイト
      var school_cal = listupEvent(PropertiesService.getScriptProperties().getProperty('SCHOOL_GMAIL'), date); //学校
      var timetable_cal = listupEvent(PropertiesService.getScriptProperties().getProperty('TIMETABLE_GMAIL'), date); //時間割

      data = calendarInfoJson(my_cal, work_cal, school_cal, timetable_cal, date);
      break;

    case "select":
      var select_value = payload["actions"][0]["selected_option"]["value"];
      data = themeListJson(select_value);
      break;
  }
  postSlack(data, "today");
  return ContentService.createTextOutput();
}

function postSlack(data, channel_name) {
  var options = {
    'method': 'post',
    'payload': JSON.stringify(data),
    "muteHttpExceptions": true
  };

  if (channel_name == "diary") {
    var url = PropertiesService.getScriptProperties().getProperty('URL_DIARY');
  } else if (channel_name == "today") {
    var url = PropertiesService.getScriptProperties().getProperty('URL_TODAY');
  }
  UrlFetchApp.fetch(url, options);
}
