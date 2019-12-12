//指定した日の天気を取得///////////////////////////////////////////////////////////////////////////////////////////////////////
function fetchWeatherInfo(pos){
  var info      = UrlFetchApp.fetch("http://weather.livedoor.com/forecast/webservice/json/v1?city=400010");  //天気情報取得
  var json      =JSON.parse(info.getContentText());  //json変換
  var dateLabel = json["forecasts"][pos]["dateLabel"];  //ラベル取得
  var img       = getWeatherImg(json["forecasts"][pos]["telop"]);  //画像取得
  var telop     = json["forecasts"][pos]["telop"];  //天気取得
  var maxTemp   = "";
  var minTemp   = "";
  
  //最高気温取得
  if(json["forecasts"][pos]["temperature"]["max"] == null){
    maxTemp = "最高気温：--℃\n";
  }else{
    maxTemp = "最高気温：" + json["forecasts"][pos]["temperature"]["max"]["celsius"] + "℃";
  }
  
  //最低気温取得
  if(json["forecasts"][pos]["temperature"]["min"] == null){
    minTemp = "最低気温：--℃\n";
  }else{
    minTemp = "最低気温：" + json["forecasts"][pos]["temperature"]["min"]["celsius"] + "℃";
  }
  
  //リンク取得
  var link = "予報発表時間：" + json["publicTime"] + "\n" + json["link"];
  
  var weather_info = [dateLabel, img, telop, maxTemp, minTemp, link];
  var data = weatherInfoJson(weather_info);
  return data;
}

//天気アイコンを取得//////////////////////////////////////////////////////////////////////////////////////////
function getWeatherImg(telop){
  var img = "";
  
  switch(telop){
    case "晴時々曇":
      img = "https://drive.google.com/uc?id=1-a02Efoy-1jqfxKkphWk73EGG5Eb45lc";
      break;
    case "晴時々雨":
      img = "https://drive.google.com/uc?id=1Rja9jWimFrN5EYTvY1Vr7BoFGCgwI_Po";
      break;
    case "晴時々雪":
      img = "https://drive.google.com/uc?id=1p9WHfN1gvNOwPqfoRGwI2buI-kANDqVi";
      break;
    case "晴のち曇":
      img = "https://drive.google.com/uc?id=1-a02Efoy-1jqfxKkphWk73EGG5Eb45lc";
      break;
    case "晴のち雨":
      img = "https://drive.google.com/uc?id=1Rja9jWimFrN5EYTvY1Vr7BoFGCgwI_Po";
      break;
    case "晴のち雪":
      img = "https://drive.google.com/uc?id=1p9WHfN1gvNOwPqfoRGwI2buI-kANDqVi";
      break;
    case "晴れ":
      img = "https://drive.google.com/uc?id=18rGFQIwfmCDTAydvLEOZ2iC72NmiwVA_";
      break;
    case "曇時々晴":
      img = "https://drive.google.com/uc?id=1-a02Efoy-1jqfxKkphWk73EGG5Eb45lc";
      break;
    case "曇時々雨":
      img = "https://drive.google.com/uc?id=1G-5kb7Z9wHYGCnd2i030tQSM4WqoGpPy";
      break;
    case "曇時々雪":
      img = "https://drive.google.com/uc?id=1Rq0JrLSEu2_6dDAzESxeyJp_ASU13eTu";
      break;
    case "曇のち晴":
      img = "https://drive.google.com/uc?id=1LW6gvawAeLfk50wPhmZhn_0qKRDdLKDD";
      break;
    case "曇のち雨":
      img = "https://drive.google.com/uc?id=1G-5kb7Z9wHYGCnd2i030tQSM4WqoGpPy";
      break;
    case "曇のち雪":
      img = "https://drive.google.com/uc?id=1Rq0JrLSEu2_6dDAzESxeyJp_ASU13eTu";
      break;
    case "曇り":
      img = "https://drive.google.com/uc?id=1ehyDmCHE-zsYi03KtKlXteXj4McTXq_G";
      break;
    case "雨時々晴":
      img = "https://drive.google.com/uc?id=1Rja9jWimFrN5EYTvY1Vr7BoFGCgwI_Po";
      break;
    case "雨時々曇":
      img = "https://drive.google.com/uc?id=1G-5kb7Z9wHYGCnd2i030tQSM4WqoGpPy";
      break;
    case "雨時々雪":
      img = "https://drive.google.com/uc?id=1dXvAu_rM5Nq_Lw5wjxS-nqpGSt1bB28S";
      break;
    case "雨のち晴":
      img = "https://drive.google.com/uc?id=1Rja9jWimFrN5EYTvY1Vr7BoFGCgwI_Po";
      break;
    case "雨のち曇":
      img = "https://drive.google.com/uc?id=1G-5kb7Z9wHYGCnd2i030tQSM4WqoGpPy";
      break;
    case "雨のち雪":
      img = "https://drive.google.com/uc?id=1dXvAu_rM5Nq_Lw5wjxS-nqpGSt1bB28S";
      break;
    case "雨":
      img = "https://drive.google.com/uc?id=16B7pkGVZLtTX4oyU-rO9essin3RPYnG7";
      break;
    case "大雨":
      img = "https://drive.google.com/uc?id=1OwCb5ukU_YEbWGM1wto-qdPXKZcU88xq";
      break;
    case "雪時々晴":
      img = "https://drive.google.com/uc?id=1p9WHfN1gvNOwPqfoRGwI2buI-kANDqVi";
      break;
    case "雪時々曇":
      img = "https://drive.google.com/uc?id=1Rq0JrLSEu2_6dDAzESxeyJp_ASU13eTu";
      break;
    case "雪時々雨":
      img = "https://drive.google.com/uc?id=1dXvAu_rM5Nq_Lw5wjxS-nqpGSt1bB28S";
      break;
    case "雪のち晴":
      img = "https://drive.google.com/uc?id=1p9WHfN1gvNOwPqfoRGwI2buI-kANDqVi";
      break;
    case "雪のち曇":
      img = "https://drive.google.com/uc?id=1Rq0JrLSEu2_6dDAzESxeyJp_ASU13eTu";
      break;
    case "雪のち雨":
      img = "https://drive.google.com/uc?id=1dXvAu_rM5Nq_Lw5wjxS-nqpGSt1bB28S";
      break;
    case "雪":
      img = "https://drive.google.com/uc?id=1YEoM113b7M0l20fxk66rumBKnjSSsKV6";
      break;
    case "大雪":
      img = "https://drive.google.com/uc?id=15vLR-93IykVdz8eElWcKu9C2yi9V3ox-";
      break;
    default:
      img = "";
  }
  return(img);
}

//天気の日を指定するjson//////////////////////////////////////////////////////////////////////////
function weatherJson(){
  var data = {
    "response_type":"ephemeral",
    "attachments":[
      {
        "color":"FFFFFF",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "plain_text",
              "text":"いつの天気を確認しますか？",
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
                  "text": "今日"
                },
                "value": "today"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "emoji": true,
                  "text": "明日"
                },
                "value": "tomollow"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "emoji": true,
                  "text": "明後日"
                },
                "value": "dayAfterTomollow"
              }
            ]
          }
        ]
      }
    ]
  };
  return data;
}

//天気の情報を表示するjson////////////////////////////////////////////////////////////////
function weatherInfoJson(weather_info){
  var data = {
    "unfurl_links": true,
    "response_type":"ephemeral",
    "attachments":[
      {
        "text":weather_info[0] + "の天気：" + " *" + weather_info[2] + "* ",
        "color":"33ff66",
        "image_url":weather_info[1]
      },
      {
        "color": "FF0000",
        "text": weather_info[3]
      },
      {
        "color": "00BFFF",
        "text": weather_info[4]
      },
      {
        "color": "FFFFFF",
        "text": weather_info[5]
      }
    ]
  };
  return data;
}

