import React from 'react';
import { shallow } from 'enzyme';
import PostDetail from './PostDetail';

describe('Post Detail Component', () => {
    const detail = shallow(<PostDetail />);

    it('renders post detail component correctly', ()=>{
        expect(detail).toMatchSnapshot();
    })

});