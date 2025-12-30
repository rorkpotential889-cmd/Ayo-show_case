# Deployment Guide

## Quick Start - Deploy to Vercel

Your portfolio is ready to deploy! Follow these steps:

### Step 1: Push to GitHub (if not already done)

```bash
git add .
git commit -m "Upgrade portfolio: backend integration, remove non-professional content"
git push origin main
```

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub
2. **Click "Add New Project"**
3. **Import your repository**: `Princelallazy/portfolio-website`
4. **Vercel will auto-detect Next.js** - no configuration needed!

### Step 3: Configure Environment Variables

In your Vercel project dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following variables:

```
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=your-email@example.com
RESEND_FROM_EMAIL=onboarding@resend.dev
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

**Important Notes:**

- Replace `re_xxxxxxxxxxxxx` with your actual Resend API key
- Replace `your-email@example.com` with your email address
- For production, use a verified domain email for `RESEND_FROM_EMAIL`
- Update `NEXT_PUBLIC_SITE_URL` after deployment with your actual Vercel URL

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at `https://your-project.vercel.app`

### Step 5: Test Your Deployment

- [ ] Visit your live site
- [ ] Test the contact form (check your email!)
- [ ] Verify all pages load correctly
- [ ] Test on mobile devices
- [ ] Check page load speeds

---

## Setting Up Resend (Email Service)

### 1. Create Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get API Key

1. Go to **API Keys** in the dashboard
2. Click **"Create API Key"**
3. Give it a name (e.g., "Portfolio Contact Form")
4. Copy the API key (starts with `re_`)
5. Paste it into Vercel environment variables

### 3. Verify Domain (For Production)

**For testing:** You can use `onboarding@resend.dev` (already configured)

**For production:**

1. Go to **Domains** in Resend dashboard
2. Add your domain (e.g., `yourdomain.com`)
3. Add the DNS records provided by Resend
4. Wait for verification (usually takes a few minutes)
5. Update `RESEND_FROM_EMAIL` to `contact@yourdomain.com`

---

## Custom Domain Setup (Optional)

### In Vercel:

1. Go to your project → **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (can take up to 48 hours)

### Update Environment Variables:

After your domain is live, update:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Troubleshooting

### Contact Form Not Sending Emails

1. **Check Resend API Key:**
   - Verify it's correct in Vercel environment variables
   - Check Resend dashboard for API key status

2. **Check Email Addresses:**
   - `CONTACT_EMAIL` should be your personal email
   - `RESEND_FROM_EMAIL` must be verified in Resend

3. **Check Vercel Logs:**
   - Go to your project → **Deployments** → Click on latest deployment → **Functions** tab
   - Look for any error messages

4. **Test in Development:**
   - In dev mode, emails won't send but will log to console
   - Check your terminal for "Contact form submission (dev mode)" messages

### Build Fails

1. **Check Environment Variables:**
   - All required variables must be set in Vercel
   - Even if not using Resend, set a placeholder value

2. **Check Node Version:**
   - Vercel uses Node 18+ by default (should work)
   - You can specify in `package.json` if needed

3. **Check Build Logs:**
   - In Vercel dashboard, check the build logs for specific errors

### Pages Not Loading

1. **Clear Cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

2. **Check Routes:**
   - Verify all pages exist in `src/app/`
   - Check for any 404 errors in Vercel logs

---

## Post-Deployment Checklist

- [ ] Site is accessible at your URL
- [ ] All pages load correctly (Home, About, Services, Projects, Contact)
- [ ] Contact form submits successfully
- [ ] You receive test email from contact form
- [ ] Mobile responsive design works
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Page load speed is acceptable (< 3 seconds)
- [ ] SEO metadata is correct (check page source)

---

## Monitoring & Analytics (Optional)

### Add Analytics

You can add Google Analytics or other services:

1. Create account with analytics provider
2. Get tracking code
3. Add to `src/app/layout.tsx` in the `<head>` section

### Monitor Performance

- Vercel provides built-in analytics
- Check **Analytics** tab in Vercel dashboard
- Monitor page views, performance metrics

---

## Updating Your Site

### Making Changes

1. Make changes locally
2. Test with `pnpm dev`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```
4. Vercel will automatically redeploy!

### Manual Redeploy

1. Go to Vercel dashboard
2. Click on your project
3. Go to **Deployments** tab
4. Click **"Redeploy"** on latest deployment

---

## Support

If you encounter issues:

1. Check Vercel documentation: https://vercel.com/docs
2. Check Resend documentation: https://resend.com/docs
3. Check Next.js documentation: https://nextjs.org/docs
4. Review error logs in Vercel dashboard

---

**Your portfolio is now ready for the world! 🚀**
