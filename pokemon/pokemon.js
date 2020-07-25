function doPost(e) {
    var slack_token = PropertiesService.getScriptProperties().getProperty('SLACK_VERIFICATION_TOKEN');
    var ifttt_token = PropertiesService.getScriptProperties().getProperty('IFTTT_VERIFICATION_TOKEN');
    if (slack_token != e.parameter.token && ifttt_token != e.parameter.token) {
       throw new Error(e.parameter.token);
    }

    var poke = UrlFetchApp.fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 807));
    // 日本語情報をデータに入れ込む
    var poke_json = JSON.parse(poke.getContentText()); //json変換
    var species = UrlFetchApp.fetch(poke_json['species']['url']);
    var species_json = JSON.parse(species.getContentText());
    var ja_name;
    var ja_flavor_text;
    species_json['names'].forEach((e) => {
        if (e.language.name == 'ja') ja_name = e.name;
    });
    species_json['flavor_text_entries'].forEach((e) => {
        if (e.language.name == 'ja') ja_flavor_text = e.flavor_text;
    });

    Logger.log(ja_name);
    Logger.log(ja_flavor_text);

    var folder = DriveApp.getFolderById('1zwdmGfSx02ckcnwUlT9Tr5Hsq_MlBu5e'); //フォルダのIDは事前に調べておく
    var files = folder.getFiles(); // フォルダ内を検索，ファイルの一覧を取得
    var pictureURL;
    while (files.hasNext()) {
        // ファイルが一個でもあれば
        var file = files.next(); //ファイルを取得
        var fileName = file.getName(); //ファイル名をゲット
        if (fileName === species_json['id'] + '.png') {
            var fileId = file.getId();
            pictureURL = 'https://drive.google.com/uc?id=' + fileId;
            break;
        }
    }

    var type = poke_json['types']["0"]['type']['name'];
    var coloCode = getColorCode(type);

    var pokeUri = 'https://yakkun.com/swsh/zukan/n' + species_json['id'];
    var data = {
        unfurl_links: true,
        response_type: 'ephemeral',
        attachments: [
            {
                color: coloCode,
                blocks: [
                    {
                        type: 'image',
                        image_url: pictureURL,
                        alt_text: 'pokemon',
                    },
                    {
                        type: 'image',
                        image_url: poke_json['sprites']['front_default'],
                        alt_text: 'pokemon',
                    },
                    {
                        type: 'context',
                        elements: [
                            {
                                type: 'plain_text',
                                text: 'No.' + species_json['id'] + ' ' + ja_name + ' ' + poke_json['name'],
                            },
                        ],
                    },
                    {
                        type: 'context',
                        elements: [
                            {
                                type: 'plain_text',
                                text: ja_flavor_text,
                            },
                        ],
                    },
                    {
                        type: 'actions',
                        elements: [
                            {
                                type: 'button',
                                text: {
                                    type: 'plain_text',
                                    text: '詳しく見る',
                                },
                                url: pokeUri,
                                value: 'click_me_123',
                            },
                        ],
                    },
                ],
            },
        ],
    };
    Logger.log(data);

    var options = {
        method: 'post',
        payload: JSON.stringify(data),
        muteHttpExceptions: true,
    };

    var url = PropertiesService.getScriptProperties().getProperty('POKEMON_URL');
    UrlFetchApp.fetch(url, options);
}

function getColorCode(type) {
    var colorCode;
    switch (type) {
        case 'normal':
            colorCode = '#979797';
            break;

        case 'fighting':
            colorCode = '#B01E1F';
            break;

        case 'flying':
            colorCode = '#7E80EC';
            break;

        case 'poison':
            colorCode = '#8C278E';
            break;

        case 'ground':
            colorCode = '#D7A955';
            break;

        case 'rock':
            colorCode = '#A9912C';
            break;

        case 'bug':
            colorCode = '#8BAD19';
            break;

        case 'ghost':
            colorCode = '#5C4286';
            break;

        case 'steel':
            colorCode = '#5B7C8A';
            break;

        case 'fire':
            colorCode = '#E96B25';
            break;

        case 'water':
            colorCode = '#5579EC';
            break;

        case 'grass':
            colorCode = '#24B820';
            break;

        case 'electric':
            colorCode = '#F6C826';
            break;

        case 'psychic':
            colorCode = '#F33D75';
            break;

        case 'ice':
            colorCode = '#89D0CF';
            break;

        case 'dragon':
            colorCode = '#5B0FF6';
            break;
        case 'dark':
            colorCode = '#3F3834';
            break;

        case 'fairy':
            colorCode = '#EA83D0';
            break;
    }
    return colorCode;
}
