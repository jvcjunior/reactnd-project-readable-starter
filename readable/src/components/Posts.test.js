import React from 'react';
import { shallow } from 'enzyme';
import Posts from './Posts';

describe('Posts Component', () => {
    const posts = shallow(<Posts />);

    it('renders Posts components correctly', () => {
        expect(posts).toMatchSnapshot();
    });
});