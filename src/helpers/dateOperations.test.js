const { sunday, allSundays, nextWeek } = require('./dateOperations');

describe('date operations', () => {
    describe('sunday', () => {
        it('returns upcoming sunday for other day', () => {
            const friday = new Date('2018-03-16T12:00:00.000Z');
            const expected = new Date('2018-03-18T12:00:00.000Z');
            expect(sunday(friday)).toEqual(expected);
        });

        it('returns same day for sunday', () => {
            const expected = new Date('2018-03-18T12:00:00.000Z');
            expect(sunday(expected)).toEqual(expected);
        });
    });

    describe('nexWeek', () => {
        it('returns next week', () => {
            const someDay = new Date('2018-03-13T12:00:00.000Z');
            const expected = new Date('2018-03-20T12:00:00.000Z');
            expect(nextWeek(someDay)).toEqual(expected);
        })
    });

    describe('allSundays', () => {
        for (let year = 2018; year < 2030; year++) {
            it(`returns 52 or 53 days that are sundays for year ${year}`, () => {
                const sundays = allSundays(year);

                expect(sundays.length >= 52).toBe(true);
                expect(sundays.length <= 53).toBe(true);
                sundays.forEach(day => expect(day.getDay()).toBe(0));
            });
        }
    });
});
