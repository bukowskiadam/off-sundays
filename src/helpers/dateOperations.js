const addDays = (date, days) => {
    const nextDate = new Date(date.getTime());

    nextDate.setDate(date.getDate() + days);

    return nextDate;
};

export const sunday = (now = new Date()) => {
    const diff = (7 - now.getDay()) % 7;

    return addDays(now, diff);
};

export const nextWeek = date => addDays(date, 7);

export const allSundays = year => {
    const nextYear = new Date(`${year + 1}-01-01`);
    const sundays = [];
    let lastSunday = sunday(new Date(`${year}-01-01`));

    while (lastSunday < nextYear) {
        sundays.push(lastSunday);
        lastSunday = nextWeek(lastSunday);
    }

    return sundays;
};
