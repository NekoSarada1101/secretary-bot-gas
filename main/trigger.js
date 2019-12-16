// その日のトリガーを削除する関数(消さないと残る)///////////////////////////////////////////////////////////////////////
function deleteTrigger() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() == "main") {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
}

//朝の通知////////////////////////////////////////////////////////////////////////////////////////////////////
function setTriggerMorning() {
  var triggerMorning = new Date();
  triggerMorning.setHours(5);
  triggerMorning.setMinutes(59);
  ScriptApp.newTrigger("morning").timeBased().at(triggerMorning).create();
}

function morning() {
  var weather_data = fetchWeatherInfo(0);

  var dt = new Date;
  var date = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
  var my_cal = listupEvent(PropertiesService.getScriptProperties().getProperty('MY_GMAIL'), date); //自分
  var work_cal = listupEvent(PropertiesService.getScriptProperties().getProperty('RECRUIT_GMAIL'), date); //バイト
  var school_cal = listupEvent(PropertiesService.getScriptProperties().getProperty('SCHOOL_GMAIL'), date); //学校
  var timetable_cal = listupEvent(PropertiesService.getScriptProperties().getProperty('TIMETABLE_GMAIL'), date); //時間割

  var calendar_data = calendarInfoJson(my_cal, work_cal, school_cal, timetable_cal, date);

  postSlack(weather_data, "diary");
  postSlack(calendar_data, "diary");
  postSlack(weather_data, "today");
  postSlack(calendar_data, "today");
  count();
  deleteTrigger();
}

//週一の通知////////////////////////////////////////////////////////////////////////////////////////////////
function setTriggerWeek() {
  var triggerWeek = new Date();
  triggerWeek.setHours(6);
  triggerWeek.setMinutes(0);
  ScriptApp.newTrigger("week").timeBased().at(triggerWeek).create();
}

function week() {
  var dt = new Date;
  var date = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
  var my_cal = listupEventWeek(PropertiesService.getScriptProperties().getProperty('MY_GMAIL')); //自分
  var work_cal = listupEventWeek(PropertiesService.getScriptProperties().getProperty('RECRUIT_GMAIL')); //バイト
  var school_cal = listupEventWeek(PropertiesService.getScriptProperties().getProperty('SCHOOL_GMAIL')); //学校
  var timetable_cal = listupEventWeek(PropertiesService.getScriptProperties().getProperty('TIMETABLE_GMAIL')); //時間割

  var calendar_data = calendarInfoJson(my_cal, work_cal, school_cal, timetable_cal, "1週間");

  postSlack(calendar_data, "today");
  deleteTrigger();
}
