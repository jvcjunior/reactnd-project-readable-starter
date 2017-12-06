import React from 'react';
import { shallow } from 'enzyme';
import Post from './Post';

describe('Post Component', () => {
    const post = shallow(<Post />);

    it('renders Post component correctly', () => {
        expect(post).toMatchSnapshot();
    });
});