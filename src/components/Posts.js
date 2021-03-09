import React from 'react';
import {fetchPosts} from "../redux/actions/postActions";
import {useEffect} from "react";
import {connect} from 'react-redux';



function Posts(props) {

    useEffect(()=>{
        props.fetchPosts();
    },[])

    const postItems = props.posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ));

    return (
        <div>
            <h1>Posts</h1>
            {postItems}
        </div>
    );
}

const mapStateToProps = state => ({
    posts: state.posts.items,
});

export default connect(mapStateToProps, {fetchPosts})(Posts);
