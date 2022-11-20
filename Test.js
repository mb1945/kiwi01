var AndroidCalendar = {

        create: function(title, options) {

        i = intent("android.intent.action.INSERT");

        i.data("content://com.android.calendar/events");

        i.extra("title", title);

        if (options !== undefined) {

            if (options.desc !== undefined)

                i.extra("description", options.desc);

            if (options.begin !== undefined)

                i.extraLong("beginTime", options.begin.getTime());

            if (options.end !== undefined)

                i.extraLong("endTime", options.end.getTime());

            if (options.location !== undefined) 

              i.extra("eventLocation", options.location);

            if (options.allDay !== undefined) 

              i.extraBool("allDay", options.allDay);

            if (options.emails != undefined) 

              i.extra("android.intent.extra.EMAIL", options.emails.join());

        }

        i.send();

    }

};
