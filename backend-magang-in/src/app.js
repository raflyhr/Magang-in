import express from 'express';
import cors from 'cors';
import passportConfig from './config/passport.js'; // Ensure passport is configured
import authRoutes from './routes/auth.routes.js';
import skillRoutes from './routes/skill.routes.js';
import internshipRoutes from './routes/internship.routes.js';
import aiGatewayRoutes from './routes/ai-gateway.routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

import adminRoutes from './routes/admin.routes.js';
import applicationRoutes from './routes/application.routes.js';

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api/ai', aiGatewayRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/applications', applicationRoutes);

// Base route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Express REST API with JWT & OAuth' });
});

// Global error handler (basic)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app;
