#!/bin/bash

# Jacob's Lawn Care Doctors - Vercel Deployment Script
# This script will deploy your website to Vercel automatically

echo "🚀 Starting deployment to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Login to Vercel (if not already logged in)
echo "🔐 Checking Vercel login status..."
vercel whoami &> /dev/null || vercel login

# Deploy to Vercel
echo "📤 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo ""
echo "Your website will be live at:"
echo "https://jacobs-lawn-care-doctors.vercel.app"
echo ""
echo "To add a custom domain, run: vercel domains add yourdomain.com"
