//src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import Header from '../components/Header';
import Post from '../components/Post';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await api.getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(p => p.id !== postId));
  };

  if (loading) return <div>Loading posts...</div>;

  return (
    <>
      <Header />
      <div className="mb-8">
        <Link to="/posts/new">
          <button className="bg-indigo-600 hover:bg-indigo-500">Create New Post</button>
        </Link>
      </div>
      <div className="flex flex-col gap-4" >
        {posts.length > 0 ? (
          posts.map(post => <Post key={post.id} post={post} onDelete={handleDeletePost} />)
        ) : (
          <p>No posts yet. Be the first to create one!</p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
