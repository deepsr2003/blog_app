//src/pages/PostForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from '../services/api';
import Header from '../components/Header';

const PostForm = () => {
  const [content, setContent] = useState('');
  const { id } = useParams(); // For editing
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  useEffect(() => {
    if (isEditing) {
      // In a real app, you would fetch the specific post by ID here
      // to ensure you have the latest data.
      // For this minimal example, we find it from the dashboard's state,
      // but a dedicated fetch is better: `api.getPost(id)`.
      // We'll simulate by just showing a message.
      console.log("Edit mode for post ID:", id);
    }
  }, [id, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await api.updatePost(id, { content });
      } else {
        await api.createPost({ content });
      }
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to save post:', error);
      alert('Failed to save post.');
    }
  };

  return (
    <>
      <Header />
      <h2>{isEditing ? 'Edit Post' : 'Create Post'}</h2>
      <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-md flex-col gap-4">
        <textarea
          rows="5"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">{isEditing ? 'Save Changes' : 'Create Post'}</button>
      </form>
    </>
  );
};

export default PostForm;
