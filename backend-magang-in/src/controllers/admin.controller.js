import bcrypt from 'bcryptjs';
import prisma from '../config/db.js';

// --- User Management ---
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true, email: true, name: true, role: true, provider: true, createdAt: true
      }
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role, password } = req.body;
    
    const updateData = { name, email, role };
    
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    await prisma.user.update({
      where: { id },
      data: updateData
    });
    res.json({ message: 'User berhasil diperbarui.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id } });
    res.json({ message: 'User berhasil dihapus/diblokir.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// --- Article Management ---
export const createArticle = async (req, res) => {
  try {
    const { title, content, thumbnailUrl } = req.body;
    const authorId = req.userId; // Guaranteed to be admin by middleware

    const article = await prisma.article.create({
      data: { title, content, thumbnailUrl, authorId }
    });
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.article.delete({ where: { id } });
    res.json({ message: 'Artikel berhasil dihapus.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
