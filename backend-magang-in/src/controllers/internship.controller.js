import prisma from '../config/db.js';

// Get list of all internships
export const getAllInternships = async (req, res) => {
  try {
    const internships = await prisma.internship.findMany({
      where: {
        isClosed: false,
      },
      include: {
        skills: {
          include: {
            skill: true,
          },
        },
      },
    });
    res.json(internships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get specific internship details including roadmap
export const getInternshipDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const internship = await prisma.internship.findUnique({
      where: { id },
      include: {
        skills: {
          include: { skill: true },
        },
        roadmaps: {
          orderBy: {
            orderIndex: 'asc',
          },
        },
      },
    });

    if (!internship) return res.status(404).json({ message: 'Internship not found' });
    res.json(internship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- DIBAWAH INI ADALAH FUNGSI KHUSUS MITRA ---

// Buat Lowongan Baru
export const createInternship = async (req, res) => {
  try {
    const { title, companyName, location, type, duration, level, major, requirements, skills, benefits, description } = req.body;
    const mitraId = req.userId; // Dari token

    const internship = await prisma.internship.create({
      data: { 
        title, company: companyName || req.body.company, location, description, 
        type, duration, level, major, requirements, skillsRequired: skills, benefits,
        mitraId 
      }
    });
    
    res.status(201).json(internship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Master Data Handlers
export const getMasterLocations = async (req, res) => {
  try {
    const data = await prisma.masterLocation.findMany();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMasterMajors = async (req, res) => {
  try {
    const data = await prisma.masterMajor.findMany();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Lihat Data Lowongan Spesifik Milik Mitra Ini
export const getMyInternships = async (req, res) => {
  try {
    const mitraId = req.userId;
    const internships = await prisma.internship.findMany({
      where: { mitraId }
    });
    res.json(internships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lihat Pelamar Pada Spesifik Lowongan
export const getInternshipApplicants = async (req, res) => {
  try {
    const { id } = req.params;
    const mitraId = req.userId;

    // Pastikan lowongan ini milik mitra yang sedang login
    const internship = await prisma.internship.findFirst({
      where: { id, mitraId },
      include: {
        applications: {
          include: { applicant: { select: { name: true, email: true, skills: { include: { skill: true } } } } }
        }
      }
    });

    if (!internship) return res.status(403).json({ message: 'Akses ditolak atau lowongan tidak ditemukan.' });

    res.json(internship.applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Terima / Tolak Pelamar
export const updateApplicationStatus = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const { status } = req.body; // 'accepted' atau 'rejected'

    const application = await prisma.application.update({
      where: { id: applicationId },
      data: { status }
    });

    res.json({ message: `Pelamar telah di ${status === 'accepted' ? 'Terima' : 'Tolak'}`, application });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
