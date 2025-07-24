const pool = require('../config/db');

exports.getAllPosts = async (req, res) => {
  try {
    // Join with users table to get the username
    const [posts] = await pool.query(
      'SELECT posts.id, posts.content, posts.created_at, users.username, posts.user_id FROM posts JOIN users ON posts.user_id = users.id ORDER BY posts.created_at DESC'
    );
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.createPost = async (req, res) => {
  const { content } = req.body;
  const userId = req.user.id;

  if (!content) {
    return res.status(400).json({ message: 'Content cannot be empty' });
  }

  try {
    const [result] = await pool.query('INSERT INTO posts (content, user_id) VALUES (?, ?)', [content, userId]);
    res.status(201).json({ id: result.insertId, content, user_id: userId, username: req.user.username });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updatePost = async (req, res) => {
  const { content } = req.body;
  const postId = req.params.id;
  const userId = req.user.id;

  try {
    const [posts] = await pool.query('SELECT * FROM posts WHERE id = ?', [postId]);
    if (posts.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }
    if (posts[0].user_id !== userId) {
      return res.status(403).json({ message: 'User not authorized to update this post' });
    }

    await pool.query('UPDATE posts SET content = ? WHERE id = ?', [content, postId]);
    res.json({ message: 'Post updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id;

  try {
    const [posts] = await pool.query('SELECT * FROM posts WHERE id = ?', [postId]);
    if (posts.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }
    if (posts[0].user_id !== userId) {
      return res.status(403).json({ message: 'User not authorized to delete this post' });
    }

    await pool.query('DELETE FROM posts WHERE id = ?', [postId]);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
