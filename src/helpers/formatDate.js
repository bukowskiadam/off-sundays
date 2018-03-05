const DAYS = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];

const MONTHS = [
    'stycznia',
    'lutego',
    'marca',
    'kwietnia',
    'maja',
    'czerwca',
    'lipca',
    'sierpnia',
    'września',
    'października',
    'listopada',
    'grudnia',
];

export const formatForHuman = date => {
    const dayName = DAYS[date.getDay()];
    const dayNumber = date.getDate();
    const month = MONTHS[date.getMonth()];
    const year = date.getFullYear();

    return {
        day: dayName,
        date: `${dayNumber} ${month} ${year}\xa0r.`,
        dateWithoutYear: `${dayNumber} ${month}`,
    };
};

const padZeros = number => ('0' + number).substr(-2);

export const formatDefault = date => {
    const year = date.getFullYear();
    const month = padZeros(date.getMonth() + 1);
    const day = padZeros(date.getDate());

    return `${year}-${month}-${day}`;
};
