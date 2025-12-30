# Portfolio Website

A modern, professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Focused on showcasing **Website Development, Web Apps, Mobile Apps, and Bot Development** services.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Contact Form**: Integrated with Resend email service
- **Responsive Design**: Mobile-first, fully responsive layout
- **SEO Optimized**: Built-in sitemap and robots.txt
- **Performance**: Optimized for fast loading and great UX
- **Animations**: Smooth animations with Framer Motion

## 📋 Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Princelallazy/portfolio-website.git
cd portfolio-website
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=your-email@example.com
RESEND_FROM_EMAIL=onboarding@resend.dev
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Getting Resend API Key:**

1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy and paste it into `.env.local`

### 4. Run development server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## 📁 Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── api/          # API routes (contact form)
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   ├── projects/     # Projects page
│   │   └── services/     # Services page
│   ├── components/       # Reusable React components
│   ├── content/          # Content data (projects, etc.)
│   └── lib/              # Utility functions
├── public/               # Static assets
├── .env.example          # Environment variables template
└── package.json
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **Push your code to GitHub** (already connected)
2. **Import project in Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables:**
   - In Vercel project settings, go to "Environment Variables"
   - Add all variables from `.env.example`:
     - `RESEND_API_KEY`
     - `CONTACT_EMAIL`
     - `RESEND_FROM_EMAIL`
     - `NEXT_PUBLIC_SITE_URL` (use your production URL)

4. **Deploy:**
   - Click "Deploy"
   - Your site will be live in minutes!

### Other Deployment Options

- **Netlify**: Similar to Vercel, good Next.js support
- **Railway**: Full-stack deployment platform
- **AWS Amplify**: Enterprise option
- **DigitalOcean App Platform**: Simple deployment

### Production Checklist

Before deploying, make sure to:

- [ ] Set all required environment variables
- [ ] Update `NEXT_PUBLIC_SITE_URL` with your production URL
- [ ] Verify contact form works in production
- [ ] Test all pages and links
- [ ] Check mobile responsiveness
- [ ] Verify SEO metadata
- [ ] Test page load speeds

## 🔧 Configuration

### Contact Form

The contact form uses Resend for email delivery. Make sure to:

1. Set up a Resend account and get your API key
2. Verify your domain in Resend (for production)
3. Update `RESEND_FROM_EMAIL` with your verified domain email
4. Set `CONTACT_EMAIL` to your personal/professional email

### Customization

- **Projects**: Edit `src/content/projects.ts`
- **Services**: Edit `src/app/services/page.tsx`
- **About**: Edit `src/app/about/page.tsx`
- **Styling**: Edit `tailwind.config.ts` and `src/app/globals.css`

## 🐛 Troubleshooting

### Contact Form Not Working

- Check that `RESEND_API_KEY` is set correctly
- Verify the API key is valid in Resend dashboard
- Check browser console and server logs for errors
- In development, emails won't send but form will log to console

### Build Errors

- Run `pnpm install` to ensure all dependencies are installed
- Check Node.js version (requires 18+)
- Clear `.next` folder and rebuild: `rm -rf .next && pnpm build`

## 📝 License

This project is private and proprietary.

## 👤 Author

**Prince Lallazy**

- GitHub: [@Princelallazy](https://github.com/Princelallazy)
- Portfolio: [Your Portfolio URL]

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Resend for email service
- All open-source contributors
