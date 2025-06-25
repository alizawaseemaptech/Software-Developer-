require('dotenv').config();
console.log("✅ server.js loaded");

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Logging env variables for debug
console.log("🔍 MONGO_URI:", process.env.MONGO_URI);
console.log("🔍 PORT:", PORT);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
});
