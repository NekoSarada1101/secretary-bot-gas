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
      var my_cal = listupEvent("ryoyukikazu11@gmail.com", date); //自分
      var work_cal = listupEvent("ryouta.harada11@gmail.com", date); //バイト
      var school_cal = listupEvent("ryouta.harada.abcc@gmail.com", date); //学校
      var timetable_cal = listupEvent("d9n8j44vrl24668menvk4331u8@group.calendar.google.com", date); //時間割

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
