import React from 'react';

import './index.css';

const closed = {
    2018: [
        ['7. stycznia', false],
        ['14. stycznia', false],
        ['21. stycznia', false],
        ['28. stycznia', false],
        ['4. lutego', false],
        ['11. lutego', false],
        ['18. lutego', false],
        ['24. lutego', false],
        ['4. marca', false],
        ['11. marca', true],
        ['18. marca', true],
        ['25. marca', false],
        ['1. kwietnia', true],
        ['8. kwietnia', true],
        ['15. kwietnia', true],
        ['22. kwietnia', true],
        ['29. kwietnia', false],
        ['6. maja', false],
        ['13. maja', true],
        ['20. maja', true],
        ['27. maja', false],
        ['3. czerwca', false],
        ['10. czerwca', true],
        ['17. czerwca', true],
        ['24. czerwca', false],
        ['1. lipca', false],
        ['8. lipca', true],
        ['15. lipca', true],
        ['22. lipca', true],
        ['29. lipca', false],
        ['5. sierpnia', false],
        ['12. sierpnia', true],
        ['19. sierpnia', true],
        ['26. sierpnia', false],
        ['2. września', false],
        ['9. września', true],
        ['16. września', true],
        ['23. września', true],
        ['30. września', false],
        ['7. października', false],
        ['14. października', true],
        ['21. października', true],
        ['28. października', false],
        ['4. listopada', false],
        ['11. listopada', true],
        ['18. listopada', true],
        ['25. listopada', false],
        ['2. grudnia', false],
        ['9. grudnia', true],
        ['16. grudnia', false],
        ['23. grudnia', false],
        ['30. grudnia', false],
    ],
};

const AllSundays = ({ year = 2018 }) => (
    <div className="list">
        {closed[year].map(([date, isClosed]) => (
            <div key={date} className={`row ${isClosed ? 'closed' : 'opened'}`}>
                <div className="date">
                    {date} {year}
                </div>
                <div className="value">{isClosed ? 'zamknięte !' : 'otwarte'}</div>
            </div>
        ))}
    </div>
);

export default AllSundays;
