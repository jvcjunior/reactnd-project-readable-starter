import React from 'react';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import { Card } from 'material-ui/Card';
import Posts from './Posts';

describe('Posts Component', () => {
    const posts = shallow(<Posts />);

    it('renders Posts components correctly', () => {
        expect(posts).toMatchSnapshot();
    });

    it('renders items correctly when posts has one item', () => {
        const props = { posts: [{ id: 1, title: 'foo' }]};
        const list = shallow(<Posts {...props} />);
        expect(list.find(Card).length).toBe(1);
    });

    it('renders items correctly when posts are empty', () => {
        const props = { posts: []};
        const list = shallow(<Posts {...props} />);
        expect(list.find(Card).length).toBe(0);
    });

    it('calls componentDidMount() lifecycle method once', () => {
        const postsDidMountSpy = spy(Posts.prototype, 'componentDidMount');
        const dispatch = jest.fn();
        const wrapper = mount(<Posts dispatch={dispatch} />);

        expect(Posts.prototype.componentDidMount.calledOnce).toBe(true);

        postsDidMountSpy.restore();
    });
});
