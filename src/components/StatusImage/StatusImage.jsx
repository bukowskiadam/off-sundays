import React from 'react';
import PropTypes from 'prop-types';

import imageClosed from './icon-closed.svg';
import imageOpened from './icon-opened.svg';

const StatusImage = ({ isClosed }) => {
    const image = isClosed ? imageClosed : imageOpened;
    const altText = isClosed ? 'zamknięte' : 'otwarte';

    return <img src={image} alt={altText} />;
};

StatusImage.propTypes = {
    isClosed: PropTypes.bool.isRequired,
};

export default StatusImage;
