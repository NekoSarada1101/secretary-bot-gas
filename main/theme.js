function themeJson() {
    var data = {
        response_type: "ephemeral",
        attachments: [
            {
                color: "FFFFFF",
                blocks: [
                    {
                        type: "section",
                        text: {
                            type: "plain_text",
                            text: "カラーテーマのメインの色を選択してください",
                        },
                        accessory: {
                            type: "static_select",
                            action_id: "select",
                            placeholder: {
                                type: "plain_text",
                                text: "Select a color",
                                emoji: true,
                            },
                            options: [
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "Red",
                                        emoji: true,
                                    },
                                    value: "red",
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "Orange",
                                        emoji: true,
                                    },
                                    value: "orange",
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "Yellow",
                                        emoji: true,
                                    },
                                    value: "yellow",
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "Green",
                                        emoji: true,
                                    },
                                    value: "green",
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "Blue",
                                        emoji: true,
                                    },
                                    value: "blue",
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "Black",
                                        emoji: true,
                                    },
                                    value: "black",
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "White",
                                        emoji: true,
                                    },
                                    value: "white",
                                },
                            ],
                        },
                    },
                ],
            },
        ],
    };
    return data;
}

function themeListJson(select_value) {
    var fallbaack;
    var color;
    var textAndValue1;
    var textAndValue2;
    var textAndValue3;
    var textAndValue4;
    var textAndValue5;
    switch (select_value) {
        case "red":
            fallbaack = "赤";
            color = "FF0000";
            textAndValue1 = "Arizona State University";
            textAndValue2 = "Big Red";
            textAndValue3 = "Kansas City Chiefs";
            textAndValue4 = "Laravel";
            textAndValue5 = "Polygon";
            break;

        case "orange":
            fallbaack = "橙";
            color = "EF810F";
            textAndValue1 = "FOLIO orange";
            textAndValue2 = "Halloween";
            textAndValue3 = "Kimbie";
            textAndValue4 = "osTicket";
            textAndValue5 = "University Of Texas";
            break;

        case "yellow":
            fallbaack = "黄";
            color = "FFFF00";
            textAndValue1 = "Gruvbox Light Medium";
            textAndValue2 = "JavaScript";
            textAndValue3 = "ill Bill";
            textAndValue4 = "KKTOWN";
            textAndValue5 = "Put.io";
            break;

        case "green":
            fallbaack = "緑";
            color = "00FF00";
            textAndValue1 = "Autumn";
            textAndValue2 = "Christmas";
            textAndValue3 = "Drupal Twig";
            textAndValue4 = "Forest";
            textAndValue5 = "Starbucks";
            break;

        case "blue":
            fallbaack = "青";
            color = "3300ff";
            textAndValue1 = "Dropbox";
            textAndValue2 = "PlayStation";
            textAndValue3 = "Python";
            textAndValue4 = "Trello";
            textAndValue5 = "Twitter";
            break;

        case "black":
            fallbaack = "黒";
            color = "000000";
            textAndValue1 = "Film Noir";
            textAndValue2 = "GitKraken";
            textAndValue3 = "Ingress Enlightened";
            textAndValue4 = "Solarized Dark";
            textAndValue5 = "Terminal";
            break;

        case "white":
            fallbaack = "白";
            color = "ffffff";
            textAndValue1 = "Github";
            textAndValue2 = "macOs";
            textAndValue3 = "Skype";
            textAndValue4 = "Solarized";
            textAndValue5 = "Youtube";
            break;
    }

    var data = {
        response_type: "ephemeral",
        attachments: [
            {
                callback_id: "button",
                text: "適用するカラーテーマを選択してください",
                fallback: fallbaack,
                color: color,
                attachment_type: "default",
                actions: [
                    {
                        name: "theme",
                        text: textAndValue1,
                        type: "button",
                        value: textAndValue1,
                    },
                    {
                        name: "theme",
                        text: textAndValue2,
                        type: "button",
                        value: textAndValue2,
                    },
                    {
                        name: "theme",
                        text: textAndValue3,
                        type: "button",
                        value: textAndValue3,
                    },
                    {
                        name: "theme",
                        text: textAndValue4,
                        type: "button",
                        value: textAndValue4,
                    },
                    {
                        name: "theme",
                        text: textAndValue5,
                        type: "button",
                        value: textAndValue5,
                    },
                ],
            },
        ],
    };
    return data;
}

function themeInfoJson(value) {
    var text;
    var title;
    var color;
    var image;
    switch (value) {
        case "Arizona State University":
            var text = "#8C1D40,#5C6670,#FFC627,#FFFFFF,#5C6670,#FFFFFF,#94E864,#00A3E0";
            var title = "Arizona State University";
            var color = "8C1D40";
            var image = "https://drive.google.com/uc?id=15wkbxe6Kk6V7xmt8nh1CDYQpctflR9j6";
            break;

        case "Big Red":
            var text = "#754242,#BD3737,#9C4444,#FFFFFF,#434745,#FFFFFF,#99D04A,#DB6668";
            var title = "Big Red";
            var color = "754242";
            var image = "https://drive.google.com/uc?id=1TdO1GApC_P7_POfd7mo_x7QIGVhn-uBc";
            break;

        case "Kansas City Chiefs":
            var text = "#B51815,#A51815,#FFFFFF,#B51815,#FF1815,#FFD21F,#FFE21F,#FF5555";
            var title = "Kansas City Chiefs";
            var color = "B51815";
            var image = "https://drive.google.com/uc?id=1zngOXScJo9LE0MK-i5O40FTSdqxR08b3";
            break;

        case "Laravel":
            var text = "#F56262,#F56262,#424242,#F5F5F5,#ed5151,#F5F5F5,#F5F5F5,#424242";
            var title = "Laravel";
            var color = "F56262";
            var image = "https://drive.google.com/uc?id=1mT9D9rjN2VVEttacVdZl_2ugiagtXPh2";
            break;

        case "Polygon":
            var text = "#C10048,#920A3D,#2E0002,#FFFFFF,#610A29,#FFFFFF,#FFFFFF,#610A29";
            var title = "Polygon";
            var color = "C10048";
            var image = "https://drive.google.com/uc?id=1xk5cZBJ0uzWhY7HCbKz3lKdWNLZcRjeA";
            break;

        case "FOLIO orange":
            var text = "#DA6A2D,#737272,#38307F,#FFFFFF,#737272,#FFFFFF,#38307F,#38307F";
            var title = "FOLIO orange";
            var color = "DA6A2D";
            var image = "https://drive.google.com/uc?id=18hHd8YkR37ni-cRugPLnMdd4OWQFkU3b";
            break;

        case "Halloween":
            var text = "#ff8800,#000000,#ffffff,#000000,#4a5664,#000000,#000000,#736e65";
            var title = "Halloween";
            var color = "ff8800";
            var image = "https://drive.google.com/uc?id=1yyfu6qOcEZG3K0oOANDYOk2YCglZ3rOa";
            break;

        case "Kimbie":
            var text = "#F3E3CD,#F3E3CD,#F3951D,#DA3D61,#F26328,#183E1C,#DA3D61,#F26328";
            var title = "Kimbie";
            var color = "F3E3CD";
            var image = "https://drive.google.com/uc?id=1vdYF6oyk3FNuoj0Y3LPOsjYkCGSBtoUt";
            break;

        case "osTicket":
            var text = "#F68D29,#F99A3F,#F99A3F,#FFFFFF,#ED8624,#FFFFFF,#FFFFFF,#F9A55A";
            var title = "osTicket";
            var color = "F68D29";
            var image = "https://drive.google.com/uc?id=12dQG42-oEO93pplNBbiVheD9R7eBrvC_";
            break;

        case "University Of Texas":
            var text = "#BF5700,#333F48,#FFFFFF,#333F48,#333F48,#FFFFFF,#94E864,#00A3E0";
            var title = "University Of Texas";
            var color = "BF5700";
            var image = "https://drive.google.com/uc?id=1BU5ytajAMzLAF9DaCMdgW_eH1u2-JNoj";
            break;

        case "Gruvbox Light Medium":
            var text = "#FBF1C7,#EBDBB2,#79740E,#ffffff,#D5C4A1,#3C3836,#8F3F71,#076678";
            var title = "FBF1C7";
            var color = "Gruvbox Light Medium";
            var image = "https://drive.google.com/uc?id=1Rk_Mtlz1gjOxoBRiYvFy3848tA4BldBh";
            break;

        case "JavaScript":
            var text = "#F0DB4F,#F0DB4F,#323330,#FFFFFF,#e6cd2c,#323330,#323330,#323330";
            var title = "JavaScript";
            var color = "F0DB4F";
            var image = "https://drive.google.com/uc?id=1zwwT3pGDF8YJjtzdxbsmPsheySrWkYR6";
            break;

        case "Kill Bill":
            var text = "#FDE13A,#FDE13A,#000000,#E72D25,#FFF09E,#000000,#E72D25,#E72D25";
            var title = "Kill Bill";
            var color = "FDE13A";
            var image = "https://drive.google.com/uc?id=1oM2D02e9gFfhDAb47xtuy1et8UHlEJNO";
            break;

        case "KKTOWN":
            var text = "#FFD552,#FFffff,#FFffff,#30322A,#ECEEF2,#30322A,#17B5DA,#17B5DA";
            var title = "KKTOWN";
            var color = "FFD552";
            var image = "https://drive.google.com/uc?id=1Md9G3j0uGcpk7UeBLzqLvjasMCWMKJC_";
            break;

        case "Put.io":
            var text = "#FFFFFF,#FDCE45,#FDCE45,#0F1216,#ECEEF2,#0F1216,#1FAE7D,#1FAE7D";
            var title = "Put.io";
            var color = "FFFFFF";
            var image = "https://drive.google.com/uc?id=1vXu5IiiULHuK1wPekmvJdnzMqBGS0LR1";
            break;

        case "Autumn":
            var text = "#194234,#9c2e33,#E7C12e,#194234,#9c2e33,#FFFFFF,#ee6030,#9C2E33";
            var title = "Autumn";
            var color = "194234";
            var image = "https://drive.google.com/uc?id=1GsiXEFdQeqQExYh9vq20IwWsts3LjQ3b";
            break;

        case "Christmas":
            var text = "#138724,#1B5E48,#db2e3f,#FFFFFF,#2D9A48,#FFFFFF,#1B5E48,#DB2E3F";
            var title = "Christmas";
            var color = "138724";
            var image = "https://drive.google.com/uc?id=1ddwRC4s2mMa4fPuBhwbGVBrKfi8cn9Fp";
            break;

        case "Drupal Twig":
            var text = "#6fa36f,#3E313C,#01690b,#ffff00,#3E313C,#ffffff,#faff78,#ed687e";
            var title = "Drupal Twig";
            var color = "6fa36f";
            var image = "https://drive.google.com/uc?id=1rTcvTpHZdw_P7Z5-y3VB3M2EmDQH5Lcf";
            break;

        case "Forest":
            var text = "#033313,#077a07,#02ad44,#FFFFFF,#076e27,#FFFFFF,#94E864,#78AF8F";
            var title = "Forest";
            var color = "033313";
            var image = "https://drive.google.com/uc?id=1GsVvxg2nAlgnfMQ3Mbzfhv-5XXEVR5gl";
            break;

        case "Dropbox":
            var text = "#007EE5,#007EE5,#47525D,#FFFFFF,#7B8994,#FFFFFF,#47525D,#47525D";
            var title = "Dropbox";
            var color = "007EE5";
            var image = "https://drive.google.com/uc?id=1DTscePwMDppd8WFOkZeJDHI9ndnwnpQi";
            break;

        case "PlayStation":
            var text = "#173f85,#0072CE,#0072ce,#FFFFFF,#0072CE,#FFFFFF,#FFDA00,#FFDA00";
            var title = "PlayStation";
            var color = "173f85";
            var image = "https://drive.google.com/uc?id=1ZzgKoHSXxU0Z0tC-qRph3_EV2xK51dJl";
            break;

        case "Python":
            var text = "#306998,#FFD43B,#FFD43B,#7F7F7F,#5A9FD4,#F4F4F4,#FFE873,#FFD43B";
            var title = "Python";
            var color = "306998";
            var image = "https://drive.google.com/uc?id=1gvOXI0NWfjFKzj75xR3X0m2thGUZ0v_Q";
            break;

        case "Trello":
            var text = "#0079BF,#026AA7,#5BA4CF,#FFFFFF,#026AA7,#FFFFFF,#61BD4F,#EB5A46";
            var title = "Trello";
            var color = "0079BF";
            var image = "https://drive.google.com/uc?id=1veKHgfLU8VsenWAzcZm6-8xrF9Jv7JjB";
            break;

        case "Twitter":
            var text = "#55ACEE,#55ACEE,#E1E8ED,#292F33,#ADDCFF,#F5F8FA,#E1E8ED,#E1E8ED";
            var title = "Twitter";
            var color = "55ACEE";
            var image = "https://drive.google.com/uc?id=1bo9zdpxee5wURK5OCrquapJx6373jid2";
            break;

        case "Film Noir":
            var text = "#101010,#101010,#D3D3CA,#BB313E,#424242,#F0F0E6,#BB313E,#BB313E";
            var title = "Film Noir";
            var color = "101010";
            var image = "https://drive.google.com/uc?id=1ZzQeOoCvcvL2dHhujLDWHgs84kVtHrrp";
            break;

        case "GitKraken":
            var text = "#141422,#259692,#259692,#FFFFFF,#4A5664,#ffffff,#ff8800,#FF8800";
            var title = "GitKraken";
            var color = "141422";
            var image = "https://drive.google.com/uc?id=1MlafeF0XrMduxrHQJ9iSf1jts-oZ1Fvb";
            break;

        case "Ingress Enlightened":
            var text = "#000E0F,#000E0F,#393218,#F1C248,#006D77,#34EAF5,#02BF02,#F1C248";
            var title = "Ingress Enlightened";
            var color = "000E0F";
            var image = "https://drive.google.com/uc?id=1t9of7jbV4Pkw69Jfc2MOSmbiyWzMpZFR";
            break;

        case "Solarized Dark":
            var text = "#073642,#002B36,#B58900,#FDF6E3,#CB4B16,#FDF6E3,#2AA198,#DC322F";
            var title = "Solarized Dark";
            var color = "073642";
            var image = "https://drive.google.com/uc?id=1PkM8HIP17MeXIj_-a7pKHJuz5dvgjFAW";
            break;

        case "Terminal":
            var text = "#101010,#000000,#FFFFFF,#000000,#A0A0A0,#FFFFFF,#00A400,#5858FE";
            var title = "Terminal";
            var color = "101010";
            var image = "https://drive.google.com/uc?id=1rp3XLGOEIqraCQ5jBVtZiNbfI0VfIu-z";
            break;

        case "Github":
            var text = "#ffffff,#24292e,#e9f0f7,#1d4880,#ffefc6,#666666,#28a745,#92979b";
            var title = "Github";
            var color = "ffffff";
            var image = "https://drive.google.com/uc?id=1-NOoauO3W6oQDpn0PRNpeyjBl47UVGR6";
            break;

        case "macOs":
            var text = "#F1F3F5,#DAD8DA,#D3DFE3,#303030,#C2E2ED,#303030,#1682FB,#34C749";
            var title = "macOs";
            var color = "F1F3F5";
            var image = "https://drive.google.com/uc?id=16hXZxqN0C0CVO90DSaJqSVA6Qv7thGZs";
            break;

        case "Skype":
            var text = "#F0F4F8,#39B1DF,#C7EDFC,#000000,#F0F4F8,#000000,#7FBA00,#FF8C00";
            var title = "Skype";
            var color = "F0F4F8";
            var image = "https://drive.google.com/uc?id=1eluaP79JqLcNn28fuGT2EAuZhMnHMFBL";
            break;

        case "Solarized":
            var text = "#FDF6E3,#EEE8D5,#93A1A1,#FDF6E3,#EEE8D5,#657B83,#2AA198,#DC322F";
            var title = "Solarized";
            var color = "FDF6E3";
            var image = "https://drive.google.com/uc?id=1mOKLMMB-yU8pXPHy688rW9uaXQdmP68T";
            break;

        case "Youtube":
            var text = "#FFFFFF,#CC181E,#CC181E,#FFFFFF,#444444,#0D0D0D,#CC181E,#E04A4D";
            var title = "Youtube";
            var color = "FFFFFF";
            var image = "https://drive.google.com/uc?id=1vz1YdRAbe85gd1Myk7tnxFIGEO5UBoqp";
            break;
    }

    var data = {
        text: text,
        response_type: "ephemeral",
        attachments: [
            {
                title: title,
                color: color,
                image_url: image,
            },
        ],
    };
    return data;
}
