function doPost(e){
  // ペイロード部分の取り出し
  var payload = JSON.parse(e["parameter"]["payload"]);
  var name =         payload["actions"][0]["name"];
  var value =        payload["actions"][0]["value"];
  var action_id =    payload["actions"][0]["action_id"];
  var data = null;
  
  switch(value){
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
  
  switch (name){
    case "theme":
      data = themeInfoJson(value);
      break;
  }
  
  switch (action_id){
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
    'method'      : 'post'              ,
    'payload'     : JSON.stringify(data),
    "muteHttpExceptions":true
  };
  
  if(channel_name == "diary"){
    var url = PropertiesService.getScriptProperties().getProperty('URL_DIARY');
  }else if(channel_name == "today"){
    var url = PropertiesService.getScriptProperties().getProperty('URL_TODAY');
  }
  UrlFetchApp.fetch(url, options);
}



//================================================================================================================================
//再起動をリマインド
function rebootRemind(){
  var message = "*再起動リマインド* \n週に１度はMacを再起動しましょう。";
  
  postSlack(message);
  
  var options = {
    "method" : "POST",
  }
  
  // 自分のSlackのドメイン名(hogehoge.slack.comのhogehogeの部分)
  var domain = "blogrss"; 
  var token = "xoxp-440552012112-441456470421-593957515780-0b9894104d03dd2c84de9f199b73104d";
  var channelID = "CEZ831U0Y"
  
  var url = "https://"+domain+".slack.com/api/chat.command?token="+token+"&channel="+channelID+"&command=/remind&text=Mac再起動";
  var response = UrlFetchApp.fetch(url, options);
}

//================================================================================================================================
//掃除をリマインド
function cleanRemind(){
  var obj = SpreadsheetApp.openById('1Nb5ckm6CJnSTfEHJitolWWPDqIV_T09IplnTzRqaZ9o');
  var sheet = obj.getSheetByName("掃除セリフ");
  
  var maxRow = sheet.getDataRange().getLastRow();
  var numRow = Math.floor(Math.random()*(maxRow) + 1);
  
  var message = "*掃除リマインド* \n" + sheet.getRange(numRow, 1).getValue();
  
  postSlack(message);
  
  var options = {
    "method" : "POST",
  }
  
  // 自分のSlackのドメイン名(hogehoge.slack.comのhogehogeの部分)
  var domain = "blogrss"; 
  var token = "xoxp-440552012112-441456470421-593957515780-0b9894104d03dd2c84de9f199b73104d";
  var channelID = "CEZ831U0Y"
  
  var url = "https://"+domain+".slack.com/api/chat.command?token="+token+"&channel="+channelID+"&command=/remind&text=掃除";
  var response = UrlFetchApp.fetch(url, options);
}

//================================================================================================================================
//名言
function quotation(){
  var obj = SpreadsheetApp.openById('1Nb5ckm6CJnSTfEHJitolWWPDqIV_T09IplnTzRqaZ9o');
  var sheet = obj.getSheetByName("名言");
  
  var maxRow = sheet.getDataRange().getLastRow();
  var numRow = Math.floor(Math.random()*(maxRow) + 1);
  
  var message = sheet.getRange(numRow, 1).getValue() + "\nby " + sheet.getRange(numRow, 2).getValue();
  
  postSlack(message);
  
  var options = {
    "method" : "POST",
  }
  
  // 自分のSlackのドメイン名(hogehoge.slack.comのhogehogeの部分)
  var domain = "blogrss"; 
  var token = "xoxp-440552012112-441456470421-593957515780-0b9894104d03dd2c84de9f199b73104d";
  var channelID = "CEZ831U0Y"
  
  var url = "https://"+domain+".slack.com/api/chat.command?token="+token+"&channel="+channelID;
  var response = UrlFetchApp.fetch(url, options);
}
