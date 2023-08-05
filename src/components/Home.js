import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/itemActions';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/item/${post.id}`}>
              <div className="post-card">
                <h3>{post.title}</h3>
                <p>{post.body.slice(0, 120)}{post.body.length > 120 ? '... Read More' : ''}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
