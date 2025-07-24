//src/components/Post.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import * as api from '../services/api';

const Post = ({ post, onDelete }) => {
  const { user } = useAuth();
  
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await api.deletePost(post.id);
        onDelete(post.id); // Notify parent to remove from state
      } catch (error) {
        console.error('Failed to delete post:', error);
        alert('Failed to delete post.');
      }
    }
  };

  return (
    <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-4 text-left">
      <div className="mb-2 flex items-center justify-between text-sm text-neutral-400">
        <span>@{post.username}</span>
        <span>{new Date(post.created_at).toLocaleString()}</span>
      </div>
      <p className="mb-4 text-neutral-50">{post.content}</p>
      {user && user.id === post.user_id && (
        <div className="flex gap-2">
          <Link to={`/posts/edit/${post.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={handleDelete} className="bg-red-800 hover:bg-red-700 hover:border-red-600">Delete</button>
        </div>
      )}
    </div>
  );
};

export default Post;
