import React from 'react';
import { mount, render } from 'enzyme';

import forClientOnly from './forClientOnly';

describe('forClientOnly', () => {
    const ClientComponent = () => <div>Client Component</div>;
    const Placeholder = () => <div>Placeholder</div>;

    it('renders placeholder correctly for server side', () => {
        const Component = forClientOnly(ClientComponent, Placeholder);

        const wrapper = render(<Component />);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders nothing correctly for server side', () => {
        const Component = forClientOnly(ClientComponent);

        const wrapper = render(<Component />);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly for client side', () => {
        const Component = forClientOnly(ClientComponent, Placeholder);

        const wrapper = mount(<Component />);

        expect(wrapper).toMatchSnapshot();
    });
});
