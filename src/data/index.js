import closed from './closed';
import { formatDefault } from '../helpers/formatDate';

export const isClosed = date => {
    const formattedDate = date instanceof Date ? formatDefault(date) : date;

    return closed.indexOf(formattedDate) >= 0;
};
