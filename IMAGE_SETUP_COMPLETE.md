# Complete Image Setup Guide

## 🖼️ Required Images

### 1. Hero Section Image

**Location:** `public/hero/developer.jpg`

- **What:** Professional developer image (the one you showed with developer at desk)
- **Format:** JPG, PNG, or WebP
- **Size:** 1200x900 or larger
- **Current Status:** ⚠️ **MISSING** - Add your image here

### 2. Website Project Images

Place these in `public/projects/`:

#### Featured Projects (Priority)

1. **PodPro - Podcast Discovery Platform**
   - File: `public/projects/podpro-podcast-app.jpg`
   - The podcast app screenshot you showed

2. **Skillset - Learning Management Dashboard**
   - File: `public/projects/skillset-dashboard.jpg`
   - The dashboard screenshot you showed

3. **Social Media Content Platform**
   - File: `public/projects/social-media-platform.jpg`
   - The social media platform screenshot you showed

#### Additional Projects

4. **Navarin Arayes Fusion - Restaurant Website**
   - File: `public/projects/navarin-restaurant.jpg`

5. **NHBC Construction - Business Website**
   - File: `public/projects/nhbc-construction.jpg`

6. **Home Improvement & Artisanal Guide**
   - File: `public/projects/home-improvement.jpg`

7. **Urban Anomaly Reporting Mobile App**
   - File: `public/projects/urban-anomaly-app.jpg`

### 3. ComfyUI Workflow Images

Place these in `public/workflows/`:

1. **Photorealistic Portrait Generation**
   - File: `public/workflows/comfyui-portrait-workflow.jpg`
   - The ComfyUI workflow screenshot you showed

2. **Anime Character Inpainting**
   - File: `public/workflows/comfyui-anime-inpaint.jpg`
   - The anime inpainting workflow screenshot

3. **AnimateDiff Video Generation**
   - File: `public/workflows/comfyui-animatediff.jpg`
   - The AnimateDiff workflow screenshot

## 📁 Directory Structure

```
public/
├── hero/
│   └── developer.jpg          ← ADD YOUR HERO IMAGE HERE
├── projects/
│   ├── podpro-podcast-app.jpg          ← ADD HERE
│   ├── skillset-dashboard.jpg         ← ADD HERE
│   ├── social-media-platform.jpg       ← ADD HERE
│   ├── navarin-restaurant.jpg          ← ADD HERE
│   ├── nhbc-construction.jpg           ← ADD HERE
│   ├── home-improvement.jpg            ← ADD HERE
│   └── urban-anomaly-app.jpg           ← ADD HERE
└── workflows/
    ├── comfyui-portrait-workflow.jpg   ← ADD HERE
    ├── comfyui-anime-inpaint.jpg       ← ADD HERE
    └── comfyui-animatediff.jpg         ← ADD HERE
```

## ✅ How to Add Images

1. **Take screenshots** of your projects/workflows
2. **Save them** with the exact filenames listed above
3. **Place them** in the correct `public/` subdirectories
4. **Refresh** your browser - images will appear automatically!

## 🎯 Image Requirements

- **Format:** JPG, PNG, or WebP
- **Recommended Size:**
  - Hero: 1200x900 or larger
  - Projects: 1920x1080 or larger
  - Workflows: 1920x1080 or larger
- **File Size:** Keep under 2MB for fast loading
- **Aspect Ratio:**
  - Hero: 4:3 or 16:9
  - Projects: 16:9 works best
  - Workflows: 16:9 or 4:3

## 🚀 Current Status

✅ Code is ready to display images
✅ All image paths are configured
✅ Fallback placeholders are in place
⚠️ **Images need to be added to the directories above**

Once you add the images, they will automatically appear on:

- Homepage (hero section)
- Projects page (all project cards)
- ComfyUI workflows page (all workflow cards)

## 📝 Notes

- Images are referenced by their file paths
- The code will show placeholders until images are added
- All images will be automatically optimized by Next.js
- Make sure filenames match exactly (case-sensitive)
