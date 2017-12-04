import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
    const app = shallow(<App />);

    it('renders App components correctly', () => {
        expect(app).toMatchSnapshot();
    });
});