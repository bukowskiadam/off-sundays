import { formatForHuman, formatDefault } from './formatDate';

describe('formatDate', () => {
    describe('formatForHuman', () => {
        it('returns object with correctly formatted dates', () => {
            const date = new Date('2018-02-01');

            expect(formatForHuman(date)).toEqual({
                day: 'Czwartek',
                date: '1 lutego 2018\xa0r.',
                dateWithoutYear: '1 lutego',
            });
        });
    });

    describe('formatDefault', () => {
        it('returns correctly formatted date', () => {
            const date = new Date(1517482800000);

            expect(formatDefault(date)).toEqual('2018-02-01');
        });
    });
});
