# Image Organization System

## 📁 Directory Structure

Your images are automatically organized by project category. When you add images, place them in the correct folder based on the project type:

```
public/
├── hero/
│   └── developer.jpg          ← Your professional photo
│
└── projects/
    ├── mobile-app/            ← All mobile app project images
    │   ├── urban-anomaly-app.jpg
    │   ├── urban-anomaly-1.jpg
    │   ├── urban-anomaly-2.jpg
    │   └── urban-anomaly-3.jpg
    │
    ├── web-app/                ← All web application images
    │   ├── podpro-podcast-app.jpg
    │   ├── podpro-1.jpg
    │   ├── skillset-dashboard.jpg
    │   └── social-media-platform.jpg
    │
    ├── website/                ← All website project images
    │   ├── navarin-restaurant.jpg
    │   ├── nhbc-construction.jpg
    │   └── home-improvement.jpg
    │
    ├── automation/             ← Automation project images
    │   └── zoho-1.jpg
    │
    ├── ai/                     ← AI project images
    │   ├── ai-chat-1.jpg
    │   └── comfyui-1.jpg
    │
    └── bot/                    ← Bot project images
        └── (add your bot images here)
```

## 🎯 How It Works

### Automatic Organization

When you add images to these folders, they automatically appear in the correct project pages:

1. **Mobile App Images** → Go to `public/projects/mobile-app/`
2. **Web App Images** → Go to `public/projects/web-app/`
3. **Website Images** → Go to `public/projects/website/`
4. **Automation Images** → Go to `public/projects/automation/`
5. **AI Images** → Go to `public/projects/ai/`
6. **Bot Images** → Go to `public/projects/bot/`

### Image Naming Convention

For each project, use this naming pattern:

- **Main image**: `project-name.jpg` (used as thumbnail)
- **Gallery images**: `project-name-1.jpg`, `project-name-2.jpg`, etc.

Example for "Urban Anomaly App":

- `urban-anomaly-app.jpg` (main/thumbnail)
- `urban-anomaly-1.jpg` (gallery image 1)
- `urban-anomaly-2.jpg` (gallery image 2)
- `urban-anomaly-3.jpg` (gallery image 3)

## 📝 Adding Images

### Step 1: Identify Project Category

- Mobile App → `mobile-app/` folder
- Web Application → `web-app/` folder
- Website → `website/` folder
- Automation → `automation/` folder
- AI Project → `ai/` folder
- Bot → `bot/` folder

### Step 2: Name Your Images

- Use lowercase
- Use hyphens instead of spaces
- Keep names descriptive but short

### Step 3: Place in Correct Folder

- Copy images to the appropriate category folder
- Main image should match the project name
- Gallery images should be numbered

### Step 4: Update Project Data (if needed)

The project data in `src/content/projects.ts` is already configured to look for images in these folders. Just add your images and they'll appear!

## ✅ Current Project Image Paths

### Mobile Apps

- Urban Anomaly: `public/projects/mobile-app/urban-anomaly-app.jpg`

### Web Apps

- PodPro: `public/projects/web-app/podpro-podcast-app.jpg`
- Skillset: `public/projects/web-app/skillset-dashboard.jpg`
- Social Media: `public/projects/web-app/social-media-platform.jpg`

### Websites

- Navarin: `public/projects/website/navarin-restaurant.jpg`
- NHBC: `public/projects/website/nhbc-construction.jpg`
- Home Improvement: `public/projects/website/home-improvement.jpg`

## 🚀 Quick Start

1. Take screenshots of your projects
2. Name them according to the convention above
3. Place them in the correct category folder
4. Push to GitHub
5. Images will automatically appear on your website!

## 💡 Tips

- **Format**: Use JPG for photos, PNG for screenshots with text
- **Size**: Keep images under 2MB for fast loading
- **Resolution**: 1920x1080 or larger for best quality
- **Aspect Ratio**: 16:9 works best for most projects

---

**Note**: The system automatically organizes images by category. Just place them in the right folder and they'll appear in the correct project pages!
