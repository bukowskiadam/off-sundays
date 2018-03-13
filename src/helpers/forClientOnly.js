import React from 'react';

import getDisplayName from './getDisplayName';

export default (Component, Placeholder = null) => {
    class ForClientOnly extends React.Component {
        state = {
            client: false,
        };

        componentDidMount() {
            this.setState({
                client: true,
            });
        }

        renderPlaceholder = () => (Placeholder ? <Placeholder /> : null);

        render() {
            return this.state.client ? <Component {...this.props} /> : this.renderPlaceholder();
        }
    }

    ForClientOnly.displayName = `ForClientOnly(${getDisplayName(Component)}, ${getDisplayName(Placeholder)}`;

    return ForClientOnly;
};
