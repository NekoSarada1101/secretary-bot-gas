function themeJson(){
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
              "text": "カラーテーマのメインの色を選択してください"
            },
            "accessory": {
              "type": "static_select",
              "action_id":"select",
              "placeholder": {
                "type": "plain_text",
                "text": "Select a color",
                "emoji": true
              },
              "options": [
                {
                  "text": {
                    "type": "plain_text",
                    "text": "Red",
                    "emoji": true
                  },
                  "value": "red"
                },
                {
                  "text": {
                    "type": "plain_text",
                    "text": "Orange",
                    "emoji": true
                  },
                  "value": "orange"
                },
                {
                  "text": {
                    "type": "plain_text",
                    "text": "Yellow",
                    "emoji": true
                  },
                  "value": "yellow"
                },
                {
                  "text": {
                    "type": "plain_text",
                    "text": "Green",
                    "emoji": true
                  },
                  "value": "green"
                },
                {
                  "text": {
                    "type": "plain_text",
                    "text": "Blue",
                    "emoji": true
                  },
                  "value": "blue"
                },
                {
                  "text": {
                    "type": "plain_text",
                    "text": "Black",
                    "emoji": true
                  },
                  "value": "black"
                },
                {
                  "text": {
                    "type": "plain_text",
                    "text": "White",
                    "emoji": true
                  },
                  "value": "white"
                }
              ]
            }
          }
        ]
      }
    ]
  };
  return data;
}

function themeListJson(select_value){
  var data;
  switch (select_value){
    case "red":
      data = {
        "response_type":"ephemeral",
        "attachments":[
          {
            "callback_id":"button",
            "text":"適用するカラーテーマを選択してください",
            "fallback":"赤",
            "color":"FF0000",
            "attachment_type":"default",
            "actions":[
              {
                "name":"theme",
                "text":"Arizona State University",
                "type":"button",
                "value":"Arizona State University"
              },
              {
                "name":"theme",
                "text":"Big Red",
                "type":"button",
                "value":"Big Red"
              },
              {
                "name":"theme",
                "text":"Kansas City Chiefs",
                "type":"button",
                "value":"Kansas City Chiefs"
              },
              {
                "name":"theme",
                "text":"Laravel",
                "type":"button",
                "value":"Laravel"
              },
              {
                "name":"theme",
                "text":"Polygon",
                "type":"button",
                "value":"Polygon"
              }
            ]
          }
        ]
      }
      break;
      
    case "orange":
      data = {
        "response_type":"ephemeral",
        "attachments":[
          {
            "callback_id":"button",
            "text":"適用するカラーテーマを選択してください",
            "fallback":"橙",
            "color":"EF810F",
            "attachment_type":"default",
            "actions":[
              {
                "name":"theme",
                "text":"FOLIO orange",
                "type":"button",
                "value":"FOLIO orange"
              },
              {
                "name":"theme",
                "text":"Halloween",
                "type":"button",
                "value":"Halloween"
              },
              {
                "name":"theme",
                "text":"Kimbie",
                "type":"button",
                "value":"Kimbie"
              },
              {
                "name":"theme",
                "text":"osTicket",
                "type":"button",
                "value":"osTicket"
              },
              {
                "name":"theme",
                "text":"University Of Texas",
                "type":"button",
                "value":"University Of Texas"
              }
            ]
          }
        ]
      }
      break;
      
    case "yellow":
      data = {
        "response_type":"ephemeral",
        "attachments":[
          {
            "callback_id":"button",
            "text":"適用するカラーテーマを選択してください",
            "fallback":"黄",
            "color":"FFFF00",
            "attachment_type":"default",
            "actions":[
              { 
                "name":"theme",
                "text":"Gruvbox Light Medium",
                "type":"button",
                "value":"Gruvbox Light Medium"
              },
              { 
                "name":"theme",
                "text":"JavaScript",
                "type":"button",
                "value":"JavaScript"
              },
              { 
                "name":"theme",
                "text":"Kill Bill",
                "type":"button",
                "value":"Kill Bill"
              },
              { 
                "name":"theme",
                "text":"KKTOWN",
                "type":"button",
                "value":"KKTOWN"
              },
              { 
                "name":"theme",
                "text":"Put.io",
                "type":"button",
                "value":"Put.io"
              }
            ]
          }
        ]
      }
      break;
      
    case "green":
      data = {
        "response_type":"ephemeral",
        "attachments":[
          {
            "callback_id":"button",
            "text":"適用するカラーテーマを選択してください",
            "fallback":"緑",
            "color":"00FF00",
            "attachment_type":"default",
            "actions":[
              { 
                "name":"theme",
                "text":"Autumn",
                "type":"button",
                "value":"Autumn"
              },
              { 
                "name":"theme",
                "text":"Christmas",
                "type":"button",
                "value":"Christmas"
              },
              { 
                "name":"theme",
                "text":"Drupal Twig",
                "type":"button",
                "value":"Drupal Twig"
              },
              { 
                "name":"theme",
                "text":"Forest",
                "type":"button",
                "value":"Forest"
              },
              { 
                "name":"theme",
                "text":"Starbucks",
                "type":"button",
                "value":"Starbucks"
              }
            ]
          }
        ]
      }
      break;
      
    case "blue":
      data = {
        "response_type":"ephemeral",
        "attachments":[
          {
            "callback_id":"button",
            "text":"適用するカラーテーマを選択してください",
            "fallback":"青",
            "color":"3300ff",
            "attachment_type":"default",
            "actions":[
              { 
                "name":"theme",
                "text":"Dropbox",
                "type":"button",
                "value":"Dropbox"
              },
              { 
                "name":"theme",
                "text":"PlayStation",
                "type":"button",
                "value":"PlayStation"
              },
              { 
                "name":"theme",
                "text":"Python",
                "type":"button",
                "value":"Python"
              },
              { 
                "name":"theme",
                "text":"Trello",
                "type":"button",
                "value":"Trello"
              },
              { 
                "name":"theme",
                "text":"Twitter",
                "type":"button",
                "value":"Twitter"
              }
            ]
          }
        ]
      }
      break;
      
    case "black":
      data = {
        "response_type":"ephemeral",
        "attachments":[
          {
            "callback_id":"button",
            "text":"適用するカラーテーマを選択してください",
            "fallback":"黒",
            "color":"000000",
            "attachment_type":"default",
            "actions":[
              { 
                "name":"theme",
                "text":"Film Noir",
                "type":"button",
                "value":"Film Noir"
              },
              { 
                "name":"theme",
                "text":"GitKraken",
                "type":"button",
                "value":"GitKraken"
              },
              { 
                "name":"theme",
                "text":"Ingress Enlightened",
                "type":"button",
                "value":"Ingress Enlightened"
              },
              { 
                "name":"theme",
                "text":"Solarized Dark",
                "type":"button",
                "value":"Solarized Dark"
              },
              { 
                "name":"theme",
                "text":"Terminal",
                "type":"button",
                "value":"Terminal"
              }
            ]
          }
        ]
      }
      break;
      
    case "white":
      data = {
        "response_type":"ephemeral",
        "attachments":[
          {
            "callback_id":"button",
            "text":"適用するカラーテーマを選択してください",
            "fallback":"黒",
            "color":"000000",
            "attachment_type":"default",
            "actions":[
              { 
                "name":"theme",
                "text":"Github",
                "type":"button",
                "value":"Github"
              },
              { 
                "name":"theme",
                "text":"macOs",
                "type":"button",
                "value":"macOs"
              },
              { 
                "name":"theme",
                "text":"Skype",
                "type":"button",
                "value":"Skype"
              },
              { 
                "name":"theme",
                "text":"Solarized",
                "type":"button",
                "value":"Solarized"
              },
              { 
                "name":"theme",
                "text":"Youtube",
                "type":"button",
                "value":"Youtube"
              }
            ]
          }
        ]
      }
      break; 
  }
  return data;
}

function themeInfoJson(value) {
  var data;
  switch (value){
    case "Arizona State University":
      data = {
        "text":"#8C1D40,#5C6670,#FFC627,#FFFFFF,#5C6670,#FFFFFF,#94E864,#00A3E0",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Arizona State University",
            "color":"8C1D40",
            "image_url":"https://drive.google.com/uc?id=15wkbxe6Kk6V7xmt8nh1CDYQpctflR9j6"
          }
        ]
      };
      break;
      
    case "Big Red":
      data = {
        "text":"#754242,#BD3737,#9C4444,#FFFFFF,#434745,#FFFFFF,#99D04A,#DB6668",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Big Red",
            "color":"754242",
            "image_url":"https://drive.google.com/uc?id=1TdO1GApC_P7_POfd7mo_x7QIGVhn-uBc"
          }
        ]
      };
      break;
      
    case "Kansas City Chiefs":
      data = {
        "text":"#B51815,#A51815,#FFFFFF,#B51815,#FF1815,#FFD21F,#FFE21F,#FF5555",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Kansas City Chiefs",
            "color":"B51815",
            "image_url":"https://drive.google.com/uc?id=1zngOXScJo9LE0MK-i5O40FTSdqxR08b3"
          }
        ]
      };
      break;
      
    case "Laravel":
      data = {
        "text":"#F56262,#F56262,#424242,#F5F5F5,#ed5151,#F5F5F5,#F5F5F5,#424242",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Laravel",
            "color":"F56262",
            "image_url":"https://drive.google.com/uc?id=1mT9D9rjN2VVEttacVdZl_2ugiagtXPh2"
          }
        ]
      };
      break;
      
    case "Polygon":
      data = {
        "text":"#C10048,#920A3D,#2E0002,#FFFFFF,#610A29,#FFFFFF,#FFFFFF,#610A29",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Polygon",
            "color":"C10048",
            "image_url":"https://drive.google.com/uc?id=1xk5cZBJ0uzWhY7HCbKz3lKdWNLZcRjeA"
          }
        ]
      };
      break;
      
    case "FOLIO orange":
      data = {
        "text":"#DA6A2D,#737272,#38307F,#FFFFFF,#737272,#FFFFFF,#38307F,#38307F",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"FOLIO orange",
            "color":"DA6A2D",
            "image_url":"https://drive.google.com/uc?id=18hHd8YkR37ni-cRugPLnMdd4OWQFkU3b"
          }
        ]
      };
      break;
      
    case "Halloween":
      data = {
        "text":"#ff8800,#000000,#ffffff,#000000,#4a5664,#000000,#000000,#736e65",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Halloween",
            "color":"ff8800",
            "image_url":"https://drive.google.com/uc?id=1yyfu6qOcEZG3K0oOANDYOk2YCglZ3rOa"
          }
        ]
      };
      break;
      
    case "Kimbie":
      data = {
        "text":"#F3E3CD,#F3E3CD,#F3951D,#DA3D61,#F26328,#183E1C,#DA3D61,#F26328",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Kimbie",
            "color":"F3E3CD",
            "image_url":"https://drive.google.com/uc?id=1vdYF6oyk3FNuoj0Y3LPOsjYkCGSBtoUt"
          }
        ]
      };
      break;
      
    case "osTicket":
      data = {
        "text":"#F68D29,#F99A3F,#F99A3F,#FFFFFF,#ED8624,#FFFFFF,#FFFFFF,#F9A55A",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"osTicket",
            "color":"F68D29",
            "image_url":"https://drive.google.com/uc?id=12dQG42-oEO93pplNBbiVheD9R7eBrvC_"
          }
        ]
      };
      break;
      
    case "University Of Texas":
      data = {
        "text":"#BF5700,#333F48,#FFFFFF,#333F48,#333F48,#FFFFFF,#94E864,#00A3E0",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"University Of Texas",
            "color":"BF5700",
            "image_url":"https://drive.google.com/uc?id=1BU5ytajAMzLAF9DaCMdgW_eH1u2-JNoj"
          }
        ]
      };
      break;
      
    case "Gruvbox Light Medium":
      data = {
        "text":"#FBF1C7,#EBDBB2,#79740E,#ffffff,#D5C4A1,#3C3836,#8F3F71,#076678",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Gruvbox Light Medium",
            "color":"FBF1C7",
            "image_url":"https://drive.google.com/uc?id=1Rk_Mtlz1gjOxoBRiYvFy3848tA4BldBh"
          }
        ]
      };
      break;
      
    case "JavaScript":
      data = {
        "text":"#F0DB4F,#F0DB4F,#323330,#FFFFFF,#e6cd2c,#323330,#323330,#323330",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"JavaScript",
            "color":"F0DB4F",
            "image_url":"https://drive.google.com/uc?id=1zwwT3pGDF8YJjtzdxbsmPsheySrWkYR6"
          }
        ]
      };
      break;
      
    case "Kill Bill":
      data = {
        "text":"#FDE13A,#FDE13A,#000000,#E72D25,#FFF09E,#000000,#E72D25,#E72D25",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Kill Bill",
            "color":"FDE13A",
            "image_url":"https://drive.google.com/uc?id=1oM2D02e9gFfhDAb47xtuy1et8UHlEJNO"
          }
        ]
      };
      break;
      
    case "KKTOWN":
      data = {
        "text":"#FFD552,#FFffff,#FFffff,#30322A,#ECEEF2,#30322A,#17B5DA,#17B5DA",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"KKTOWN",
            "color":"FFD552",
            "image_url":"https://drive.google.com/uc?id=1Md9G3j0uGcpk7UeBLzqLvjasMCWMKJC_"
          }
        ]
      };
      break;
      
    case "Put.io":
      data = {
        "text":"#FFFFFF,#FDCE45,#FDCE45,#0F1216,#ECEEF2,#0F1216,#1FAE7D,#1FAE7D",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Put.io",
            "color":"FFFFFF",
            "image_url":"https://drive.google.com/uc?id=1vXu5IiiULHuK1wPekmvJdnzMqBGS0LR1"
          }
        ]
      };
      break;
      
    case "Autumn":
      data = {
        "text":"#194234,#9c2e33,#E7C12e,#194234,#9c2e33,#FFFFFF,#ee6030,#9C2E33",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Autumn",
            "color":"194234",
            "image_url":"https://drive.google.com/uc?id=1GsiXEFdQeqQExYh9vq20IwWsts3LjQ3b"
          }
        ]
      };
      break;
      
    case "Christmas":
      data = {
        "text":"#138724,#1B5E48,#db2e3f,#FFFFFF,#2D9A48,#FFFFFF,#1B5E48,#DB2E3F",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Christmas",
            "color":"138724",
            "image_url":"https://drive.google.com/uc?id=1ddwRC4s2mMa4fPuBhwbGVBrKfi8cn9Fp"
          }
        ]
      };
      break;
      
    case "Drupal Twig":
      data = {
        "text":"#6fa36f,#3E313C,#01690b,#ffff00,#3E313C,#ffffff,#faff78,#ed687e",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Drupal Twig",
            "color":"6fa36f",
            "image_url":"https://drive.google.com/uc?id=1rTcvTpHZdw_P7Z5-y3VB3M2EmDQH5Lcf"
          }
        ]
      };
      break;
      
    case "Forest":
      data = {
        "text":"#033313,#077a07,#02ad44,#FFFFFF,#076e27,#FFFFFF,#94E864,#78AF8F",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Forest",
            "color":"033313",
            "image_url":"https://drive.google.com/uc?id=1GsVvxg2nAlgnfMQ3Mbzfhv-5XXEVR5gl"
          }
        ]
      };
      break;
      
    case "Dropbox":
      data = {
        "text":"#007EE5,#007EE5,#47525D,#FFFFFF,#7B8994,#FFFFFF,#47525D,#47525D",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Dropbox",
            "color":"007EE5",
            "image_url":"https://drive.google.com/uc?id=1DTscePwMDppd8WFOkZeJDHI9ndnwnpQi"
          }
        ]
      };
      break;
      
    case "PlayStation":
      data = {
        "text":"#173f85,#0072CE,#0072ce,#FFFFFF,#0072CE,#FFFFFF,#FFDA00,#FFDA00",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"PlayStation",
            "color":"173f85",
            "image_url":"https://drive.google.com/uc?id=1ZzgKoHSXxU0Z0tC-qRph3_EV2xK51dJl"
          }
        ]
      };
      break;
      
    case "Python":
      data = {
        "text":"#306998,#FFD43B,#FFD43B,#7F7F7F,#5A9FD4,#F4F4F4,#FFE873,#FFD43B",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Python",
            "color":"306998",
            "image_url":"https://drive.google.com/uc?id=1gvOXI0NWfjFKzj75xR3X0m2thGUZ0v_Q"
          }
        ]
      };
      break;
      
    case "Trello":
      data = {
        "text":"#0079BF,#026AA7,#5BA4CF,#FFFFFF,#026AA7,#FFFFFF,#61BD4F,#EB5A46",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Trello",
            "color":"0079BF",
            "image_url":"https://drive.google.com/uc?id=1veKHgfLU8VsenWAzcZm6-8xrF9Jv7JjB"
          }
        ]
      };
      break;
      
    case "Twitter":
      data = {
        "text":"#55ACEE,#55ACEE,#E1E8ED,#292F33,#ADDCFF,#F5F8FA,#E1E8ED,#E1E8ED",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Twitter",
            "color":"55ACEE",
            "image_url":"https://drive.google.com/uc?id=1bo9zdpxee5wURK5OCrquapJx6373jid2"
          }
        ]
      };
      break;
      
    case "Film Noir":
      data = {
        "text":"#101010,#101010,#D3D3CA,#BB313E,#424242,#F0F0E6,#BB313E,#BB313E",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Film Noir",
            "color":"101010",
            "image_url":"https://drive.google.com/uc?id=1ZzQeOoCvcvL2dHhujLDWHgs84kVtHrrp"
          }
        ]
      };
      break;
      
    case "GitKraken":
      data = {
        "text":"#141422,#259692,#259692,#FFFFFF,#4A5664,#ffffff,#ff8800,#FF8800",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"GitKraken",
            "color":"141422",
            "image_url":"https://drive.google.com/uc?id=1MlafeF0XrMduxrHQJ9iSf1jts-oZ1Fvb"
          }
        ]
      };
      break;
      
    case "Ingress Enlightened":
      data = {
        "text":"#000E0F,#000E0F,#393218,#F1C248,#006D77,#34EAF5,#02BF02,#F1C248",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Ingress Enlightened",
            "color":"000E0F",
            "image_url":"https://drive.google.com/uc?id=1t9of7jbV4Pkw69Jfc2MOSmbiyWzMpZFR"
          }
        ]
      };
      break;
      
    case "Solarized Dark":
      data = {
        "text":"#073642,#002B36,#B58900,#FDF6E3,#CB4B16,#FDF6E3,#2AA198,#DC322F",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Solarized Dark",
            "color":"073642",
            "image_url":"https://drive.google.com/uc?id=1PkM8HIP17MeXIj_-a7pKHJuz5dvgjFAW"
          }
        ]
      };
      break;
      
    case "Terminal":
      data = {
        "text":"#101010,#000000,#FFFFFF,#000000,#A0A0A0,#FFFFFF,#00A400,#5858FE",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Terminal",
            "color":"101010",
            "image_url":"https://drive.google.com/uc?id=1rp3XLGOEIqraCQ5jBVtZiNbfI0VfIu-z"
          }
        ]
      };
      break;
      
    case "Github":
      data = {
        "text":"#ffffff,#24292e,#e9f0f7,#1d4880,#ffefc6,#666666,#28a745,#92979b",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Github",
            "color":"ffffff",
            "image_url":"https://drive.google.com/uc?id=1-NOoauO3W6oQDpn0PRNpeyjBl47UVGR6"
          }
        ]
      };
      break;
      
    case "macOs":
      data = {
        "text":"#F1F3F5,#DAD8DA,#D3DFE3,#303030,#C2E2ED,#303030,#1682FB,#34C749",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"macOs",
            "color":"F1F3F5",
            "image_url":"https://drive.google.com/uc?id=16hXZxqN0C0CVO90DSaJqSVA6Qv7thGZs"
          }
        ]
      };
      break;
      
    case "Skype":
      data = {
        "text":"#F0F4F8,#39B1DF,#C7EDFC,#000000,#F0F4F8,#000000,#7FBA00,#FF8C00",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Skype",
            "color":"F0F4F8",
            "image_url":"https://drive.google.com/uc?id=1eluaP79JqLcNn28fuGT2EAuZhMnHMFBL"
          }
        ]
      };
      break;
      
    case "Solarized":
      data = {
        "text":"#FDF6E3,#EEE8D5,#93A1A1,#FDF6E3,#EEE8D5,#657B83,#2AA198,#DC322F",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Solarized",
            "color":"FDF6E3",
            "image_url":"https://drive.google.com/uc?id=1mOKLMMB-yU8pXPHy688rW9uaXQdmP68T"
          }
        ]
      };
      break;
      
    case "Youtube":
      data = {
        "text":"#FFFFFF,#CC181E,#CC181E,#FFFFFF,#444444,#0D0D0D,#CC181E,#E04A4D",
        "response_type":"ephemeral",
        "attachments":[
          {
            "title":"Youtube",
            "color":"FFFFFF",
            "image_url":"https://drive.google.com/uc?id=1vz1YdRAbe85gd1Myk7tnxFIGEO5UBoqp"
          }
        ]
      };
      break;
  }
  return data;
}
