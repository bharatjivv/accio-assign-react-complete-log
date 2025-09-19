import React, { useState, useEffect, useMemo } from 'react';
import "regenerator-runtime/runtime";


const PostFetcher = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = useMemo(() => {
    return async () => {
      setLoading(true);
      try {
        const url = userId
          ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
          : `https://jsonplaceholder.typicode.com/posts`;
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
  }, [userId]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className='container'>
      <h2 className='top-heading'>📰 Posts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='post-list'>
          {posts.map((post) => (
            <li key={post.id} className='list-item'>
              <h4>{post.title}</h4>
              <p className='main-body'>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default PostFetcher;