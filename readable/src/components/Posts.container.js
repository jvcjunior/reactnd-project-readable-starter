import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts;'

const mapStateToProps = state => ({
    posts: state.posts.data
});

export default connect(mapStateToProps)(Posts);