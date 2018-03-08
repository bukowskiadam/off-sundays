import React from 'react';

export default (Component, Placeholder = null) =>
    class extends React.Component {
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
    };
