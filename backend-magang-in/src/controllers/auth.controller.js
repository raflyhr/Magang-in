import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../config/db.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Check if user exists
    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        provider: 'local',
      },
    });

    // Return token
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      profileImage: user.profileImage,
      token: generateToken(user.id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user
    const user = await prisma.user.findUnique({
      where: { email },
      include: { skills: { take: 1 } },
    });

    if (!user || user.provider !== 'local') {
      return res.status(404).json({ message: 'Invalid credentials or user registered via OAuth' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Return token
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      profileImage: user.profileImage,
      hasCompletedOnboarding: user.skills && user.skills.length > 0,
      token: generateToken(user.id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  // Karena kita menggunakan JWT (Stateless), logout cukup dengan meminta client
  // menghapus token di sisi mereka. Server hanya perlu mengirim respon sukses.
  res.json({ message: 'Logged out successfully. Please remove token from client.' });
};

// Get User Profile
export const getProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: { 
        id: true, name: true, email: true, role: true, 
        phone: true, address: true, education: true, institution: true,
        profileImage: true
      }
    });

    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update User Profile
export const updateProfile = async (req, res) => {
  try {
    const { name, email, password, phone, address, education, institution, profileImage } = req.body;
    const updateData = { name, email, phone, address, education, institution, profileImage };

    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    const updatedUser = await prisma.user.update({
      where: { id: req.userId },
      data: updateData,
      select: { 
        id: true, name: true, email: true, role: true,
        phone: true, address: true, education: true, institution: true,
        profileImage: true
      }
    });

    res.json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

