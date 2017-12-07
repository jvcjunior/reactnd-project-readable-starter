import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home Component', () => {
    const home = shallow(<Home />);

    it('renders home component correctly', () => {
        expect(home).toMatchSnapshot();
    });
});