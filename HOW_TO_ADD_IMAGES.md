# How to Add Your Images to the Website

## 🎯 Quick Guide

Your website is ready to display images! Just add them to the correct folders and they'll appear automatically.

## 📁 Where to Add Images

### 1. Hero Section Image (Developer Photo)

**Location:** `public/hero/developer.jpg`

- Take your developer photo (the one you showed me)
- Save it as `developer.jpg`
- Place it in: `public/hero/` folder
- **Supported formats:** JPG, PNG, WebP
- **Recommended size:** 1200x900 or larger

### 2. Project Images (Your Completed Work)

**Location:** `public/projects/`

Add these images with these exact filenames:

- `podpro-podcast-app.jpg` - PodPro Podcast Discovery Platform
- `skillset-dashboard.jpg` - Skillset Learning Management Dashboard
- `social-media-platform.jpg` - Social Media Content Platform
- `navarin-restaurant.jpg` - Navarin Arayes Fusion Restaurant
- `nhbc-construction.jpg` - NHBC Construction Website
- `home-improvement.jpg` - Home Improvement & Artisanal Guide
- `urban-anomaly-app.jpg` - Urban Anomaly Reporting Mobile App

**Supported formats:** JPG, PNG, WebP
**Recommended size:** 1920x1080 or larger

### 3. ComfyUI Workflow Images

**Location:** `public/workflows/`

- `comfyui-portrait-workflow.jpg` - Photorealistic Portrait Generation
- `comfyui-anime-inpaint.jpg` - Anime Character Inpainting
- `comfyui-animatediff.jpg` - AnimateDiff Video Generation

**Supported formats:** JPG, PNG, WebP
**Recommended size:** 1920x1080 or larger

## ✅ Current Status

- ✅ **Services Page:** Shows default mockups (working correctly)
- ✅ **Projects Page:** Shows default mockups until you add real images
- ⚠️ **Hero Section:** Shows placeholder until you add developer.jpg
- ⚠️ **Project Images:** Ready to display once you add them
- ⚠️ **Workflow Images:** Ready to display once you add them

## 🚀 How to Add Images

### Option 1: Using File Explorer (Windows)

1. Navigate to your project folder: `C:\Users\DELL\Desktop\protfolio`
2. Open the `public` folder
3. Open the subfolder (`hero`, `projects`, or `workflows`)
4. Copy and paste your image files into the correct folder
5. Make sure filenames match exactly (case-sensitive)

### Option 2: Using Git

1. Add your images to the correct folders
2. Run: `git add public/hero/developer.jpg` (or other images)
3. Run: `git commit -m "Add project images"`
4. Run: `git push origin main`

## 📝 Important Notes

- **Filenames must match exactly** - The code looks for specific filenames
- **Case-sensitive** - `developer.jpg` is different from `Developer.jpg`
- **File formats** - JPG, PNG, or WebP work best
- **File size** - Keep images under 2MB for fast loading
- **After adding images** - Refresh your browser or redeploy on Vercel

## 🔍 What Happens After Adding Images

1. **Local Development:** Images appear immediately after refresh
2. **Vercel Deployment:**
   - Push images to GitHub
   - Vercel automatically redeploys
   - Images appear on your live site

## 💡 Tips

- Take screenshots of your projects at 1920x1080 resolution
- Use JPG for photos, PNG for screenshots with text
- Compress large images before adding (use tools like TinyPNG)
- Test locally first before pushing to GitHub

---

**Need Help?** The code is already set up - just add your images to the folders above and they'll appear automatically!
