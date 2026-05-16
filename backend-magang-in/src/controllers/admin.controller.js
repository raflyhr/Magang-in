import bcrypt from 'bcryptjs';
import prisma from '../config/db.js';

// --- User Management ---
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true, email: true, name: true, role: true, provider: true, createdAt: true
      },
      orderBy: { createdAt: 'desc' }
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

    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (email !== undefined) updateData.email = email;
    if (role !== undefined) updateData.role = role;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    const user = await prisma.user.update({
      where: { id },
      data: updateData,
      select: { id: true, email: true, name: true, role: true, createdAt: true }
    });
    res.json({ message: 'User berhasil diperbarui.', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id } });
    res.json({ message: 'User berhasil dihapus.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- Mitra Verification ---
// Get semua user yang request jadi mitra (role masih pengguna tapi sudah request)
// Untuk sekarang: get semua user dengan role 'mitra'
export const getPendingMitra = async (req, res) => {
  try {
    const mitras = await prisma.user.findMany({
      where: { role: 'mitra' },
      select: {
        id: true, email: true, name: true, role: true, provider: true, createdAt: true,
        _count: { select: { internships: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(mitras);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin stats
export const getAdminStats = async (req, res) => {
  try {
    const [totalUsers, totalMitra, totalInternships, totalApplications, pendingApplications] = await Promise.all([
      prisma.user.count({ where: { role: 'pengguna' } }),
      prisma.user.count({ where: { role: 'mitra' } }),
      prisma.internship.count(),
      prisma.application.count(),
      prisma.application.count({ where: { status: 'pending' } }),
    ]);

    res.json({
      totalUsers,
      totalMitra,
      totalInternships,
      totalApplications,
      pendingApplications,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all internships (admin view — includes closed)
export const getAllInternshipsAdmin = async (req, res) => {
  try {
    const internships = await prisma.internship.findMany({
      include: {
        mitra: { select: { name: true, email: true } },
        _count: { select: { applications: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(internships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin close/open internship
export const toggleInternshipStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isClosed } = req.body;

    const internship = await prisma.internship.update({
      where: { id },
      data: { isClosed: isClosed !== undefined ? isClosed : true }
    });
    res.json({ message: `Lowongan ${isClosed ? 'ditutup' : 'dibuka'} oleh admin`, internship });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- Article Management ---
export const createArticle = async (req, res) => {
  try {
    const { title, content, thumbnailUrl } = req.body;
    const authorId = req.userId;

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
