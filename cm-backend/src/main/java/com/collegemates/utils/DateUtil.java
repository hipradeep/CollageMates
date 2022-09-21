package com.collegemates.utils;

import java.text.ParseException;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Locale;

public class DateUtil {

    public static Date formatDate(String  date_s) throws ParseException {
        String string = "January 2, 2010";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy", Locale.ENGLISH);
        LocalDate date = LocalDate.parse(date_s, formatter);
        System.out.println(date); // 2010-01-02
       // Date date1 = Date.from(Instant.from(date));
       // SimpleDateFormat dt = new SimpleDateFormat("dd-MM-yyyy");
        //return dt.parse(date_s);
        return asDate(date);
    }
    private static Date asDate(LocalDate localDate) {
        return Date.from(localDate.atStartOfDay().atZone(ZoneId.systemDefault()).toInstant());
    }
}
