// This acts as a dummy gateway until the actual Python AI service is connected
// For now, it returns mock data formatted as if it came from AI.

export const scanCV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a PDF or Image CV' });
    }

    // Usually we would send `req.file.buffer` or path to FastAPI here via axios.
    // DUMMY IMPLEMENTATION: Wait for 2 seconds then return mock skills.
    
    setTimeout(() => {
      res.json({
        message: 'CV Successfully scanned by Mock AI',
        extractedSkills: ['React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
        confidence: 0.92
      });
    }, 2000);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const matchInternship = async (req, res) => {
  try {
    const { userSkills } = req.body;
    
    if (!userSkills || !Array.isArray(userSkills)) {
      return res.status(400).json({ message: 'Provide an array of userSkills' });
    }

    // DUMMY IMPLEMENTATION: Returns simulated AI compatibility score
    const mockedMatches = [
      {
        internshipId: "dummy-id-1",
        title: "Frontend React Developer Intern",
        company: "DBS Hub",
        matchScore: 88.5,
        missingSkills: ["TypeScript"]
      },
      {
        internshipId: "dummy-id-2",
        title: "Fullstack Node.js Intern",
        company: "Tech Corp",
        matchScore: 75.0,
        missingSkills: ["Prisma", "Redis"]
      }
    ];

    res.json({
      message: 'AI Matching completed successfully',
      matches: mockedMatches
    });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
