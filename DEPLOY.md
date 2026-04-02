# 🚀 Deploy to Vercel - Automated

## Option 1: One-Click Deploy (Easiest)

Click this button to deploy instantly:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/jacobs-lawn-care-doctors)

**Note:** Replace `YOUR_USERNAME` with your GitHub username after pushing the code.

---

## Option 2: GitHub + Auto-Deploy (Recommended)

### Step 1: Push to GitHub

1. Create a new repository on GitHub named `jacobs-lawn-care-doctors`
2. Upload all files from this folder to GitHub
3. Or use these commands:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jacobs-lawn-care-doctors.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your `jacobs-lawn-care-doctors` repository
3. Vercel will auto-detect Vite + React settings
4. Click **Deploy**

### Step 3: Done! 🎉

Your site will be live at `https://jacobs-lawn-care-doctors.vercel.app`

**Every future push to GitHub will automatically redeploy your site!**

---

## Option 3: Command Line Deploy

### Prerequisites
- Node.js installed ([nodejs.org](https://nodejs.org))

### Deploy Script

Run this in your terminal:

```bash
# Navigate to project folder
cd jacobs-lawn-care-doctors

# Run the deploy script
bash deploy.sh
```

Or manually:

```bash
# Install Vercel CLI
npm install -g vercel

# Login (one time)
vercel login

# Deploy
vercel --prod
```

---

## 🔧 Environment Variables (Optional)

If you need to set environment variables:

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add any variables needed

---

## 🌐 Custom Domain

1. In Vercel project, go to **Settings** → **Domains**
2. Enter your domain (e.g., `jacobslawncare.com`)
3. Follow DNS configuration instructions
4. SSL certificate is automatic!

---

## 📁 Project Structure

```
jacobs-lawn-care-doctors/
├── .github/workflows/    # Auto-deployment config
├── dist/                 # Built files (auto-generated)
├── public/               # Static assets (images)
├── src/                  # Source code
│   ├── components/       # Navigation, Footer
│   ├── sections/         # All page sections
│   ├── App.tsx           # Main app
│   └── index.css         # Styles
├── index.html            # HTML entry
├── package.json          # Dependencies
├── vercel.json           # Vercel config
├── vite.config.ts        # Build config
└── DEPLOY.md             # This file
```

---

## 🆘 Troubleshooting

### Build fails?
- Check that `package.json` has the correct build script
- Make sure Node.js version is 18+

### Images not showing?
- Ensure all images are in the `public/` folder
- Check image paths start with `/` (e.g., `/hero_lawn_house.jpg`)

### Need help?
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- React Docs: [react.dev](https://react.dev)

---

## ✨ Features Preserved After Deploy

✅ All GSAP scroll animations  
✅ Responsive design (mobile/desktop)  
✅ Quote form functionality  
✅ All 12 images and assets  
✅ Custom fonts (Cormorant Garamond + Inter)  
✅ SEO optimization  
✅ Fast global CDN  
✅ Free SSL certificate  

---

**Your website is ready to go live! 🌿**
