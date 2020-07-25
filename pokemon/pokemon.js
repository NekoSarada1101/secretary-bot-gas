function doPost(e) {
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
    species_json["flavor_text_entries"].forEach((e) => {
        if (e.language.name == 'ja') ja_flavor_text = e.flavor_text;
    });

    Logger.log(ja_name);
    Logger.log(ja_flavor_text);

    var pokeUri = 'https://yakkun.com/swsh/zukan/n' + species_json['id'];
    var data = {
        unfurl_links: true,
        response_type: 'ephemeral',
        attachments: [
            {
                blocks: [
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
                                text: ja_name + ' ' + poke_json['name'],
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
