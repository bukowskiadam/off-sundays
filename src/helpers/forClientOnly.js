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

    const ComponentName = getDisplayName(Component);
    const PlaceholderName = Placeholder ? getDisplayName(Placeholder) : 'null';
    ForClientOnly.displayName = `ForClientOnly(${ComponentName}, ${PlaceholderName}`;

    return ForClientOnly;
};
