#!/bin/bash

# Rahul Dhiman's Portfolio Startup Script
echo "🚀 Starting Rahul Dhiman's Portfolio..."

# Change to the app directory
cd /app

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    yarn install
fi

# Start the React development server
echo "🌐 Starting React development server..."
echo "Portfolio will be available at: http://localhost:3000"
echo "Press Ctrl+C to stop the server"

yarn start