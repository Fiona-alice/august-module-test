import React from 'react';
import { useSelector } from 'react-redux';

const ItemDetail = ({ match }) => {
  const postId = parseInt(match.params.id);
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  return (
    <div>
      <h2>Item Detail</h2>
      {post && (
        <div className="post-detail">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>UserID: {post.userId}</p>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
