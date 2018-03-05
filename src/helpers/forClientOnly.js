import React from 'react';

export default Component =>
    class extends React.Component {
        state = {
            client: false,
        };

        componentDidMount() {
            this.setState({
                client: true,
            });
        }

        render() {
            return this.state.client ? <Component {...this.props} /> : null;
        }
    };
