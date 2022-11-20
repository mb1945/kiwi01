var AndroidCalendar = {

        create: function(title, options) {

        i = intent("android.intent.action.INSERT");

        i.data("content://com.android.calendar/events");

        i.extra("title", title);

       
        i.send();

    }

};
