// その日のトリガーを削除する関数(消さないと残る)///////////////////////////////////////////////////////////////////////
function deleteTrigger() {
  var triggers = ScriptApp.getProjectTriggers();
  for(var i=0; i < triggers.length; i++) {
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
  var date          = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
  var my_cal        = listupEvent("ryoyukikazu11@gmail.com", date); //自分
  var work_cal      = listupEvent("ryouta.harada11@gmail.com", date); //バイト
  var school_cal    = listupEvent("ryouta.harada.abcc@gmail.com", date); //学校
  var timetable_cal = listupEvent("d9n8j44vrl24668menvk4331u8@group.calendar.google.com", date); //時間割

  var calendar_data = calendarInfoJson(my_cal, work_cal, school_cal, timetable_cal, date);
  
  postSlack(weather_data, "diary");
  postSlack(calendar_data, "diary");
  postSlack(weather_data, "today");
  postSlack(calendar_data, "today");
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
  var date          = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
  var my_cal        = listupEventWeek("ryoyukikazu11@gmail.com"); //自分
  var work_cal      = listupEventWeek("ryouta.harada11@gmail.com"); //バイト
  var school_cal    = listupEventWeek("ryouta.harada.abcc@gmail.com"); //学校
  var timetable_cal = listupEventWeek("d9n8j44vrl24668menvk4331u8@group.calendar.google.com"); //時間割

  var calendar_data = calendarInfoJson(my_cal, work_cal, school_cal, timetable_cal, date);
  
  postSlack(calendar_data, "today");
  deleteTrigger();
}