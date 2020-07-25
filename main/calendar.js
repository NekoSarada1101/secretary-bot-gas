//予定をリストアップ///////////////////////////////////////////////////////////////////////////
function listupEvent(cal_id, date) {
    var today = date.split('-');
    var cal = CalendarApp.getCalendarById(cal_id);
    var dt = new Date();

    //指定された日付をセット
    dt.setFullYear(today[0]);
    dt.setMonth(today[1] - 1);
    dt.setDate(today[2]);

    var events = cal.getEventsForDay(dt);

    var list = '';

    for (var i = 0; i < events.length; i++) {
        if (events[i].isAllDayEvent()) {
            list += Utilities.formatDate(events[i].getStartTime(), 'GMT+0900', 'MM/dd  ');
        } else {
            list += Utilities.formatDate(events[i].getStartTime(), 'GMT+0900', 'MM/dd HH:mm');
            list += Utilities.formatDate(events[i].getEndTime(), 'GMT+0900', '-HH:mm  ');
        }
        Logger.log(list);
        list += '`' + events[i].getTitle() + '`' + '\n';
    }
    return list;
}

//１週間の予定をリストアップ//////////////////////////////////////////////////////////////////////
function listupEventWeek(cal_id) {
    var list = '';
    var cal = CalendarApp.getCalendarById(cal_id);
    var dt = new Date();

    for (var j = 0; j < 7; j++) {
        var events = cal.getEventsForDay(dt);
        for (var i = 0; i < events.length; i++) {
            if (events[i].isAllDayEvent()) {
                list += Utilities.formatDate(events[i].getStartTime(), 'GMT+0900', 'MM/dd  ');
            } else {
                list += Utilities.formatDate(events[i].getStartTime(), 'GMT+0900', 'MM/dd HH:mm');
                list += Utilities.formatDate(events[i].getEndTime(), 'GMT+0900', '-HH:mm  ');
            }
            list += '`' + events[i].getTitle() + '`\n';
        }
        dt.setDate(dt.getDate() + 1);
    }
    return list;
}

//予定を確認する日付を指定するjson////////////////////////////////////////////////////////////
function calendarJson() {
    var date = new Date();
    var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    var data = {
        response_type: 'ephemeral',
        attachments: [
            {
                color: '#FFFFFF',
                blocks: [
                    {
                        type: 'section',
                        text: {
                            type: 'plain_text',
                            text: '何日の予定を確認しますか？',
                            emoji: true,
                        },
                    },
                    {
                        type: 'section',
                        text: {
                            type: 'plain_text',
                            text: '予定を確認したい日付を選択してください',
                        },
                        accessory: {
                            type: 'datepicker',
                            initial_date: today,
                            action_id: 'date',
                            placeholder: {
                                type: 'plain_text',
                                text: 'Select a date',
                                emoji: true,
                            },
                        },
                    },
                ],
            },
        ],
    };
    return data;
}

//予定の情報を表示するjson//////////////////////////////////////////////////////////////
function calendarInfoJson(my_cal, work_cal, school_cal, timetable_cal, date) {
    var data = {
        unfurl_links: true,
        response_type: 'ephemeral',
        text: date + 'の予定をお知らせします。',
        attachments: [
            {
                fallback: 'my',
                color: '#FF0000',
                title: '自分の予定',
                text: my_cal,
            },
            {
                fallback: 'recruit',
                color: '#00BFFF',
                title: 'インターンの予定',
                text: work_cal,
            },
            {
                fallback: 'school',
                color: '#FFFF00',
                title: '学校の予定',
                text: school_cal,
            },
            {
                fallback: 'timetable',
                color: '#FFFFFF',
                title: '時間割の予定',
                text: timetable_cal,
            },
        ],
    };
    return data;
}
