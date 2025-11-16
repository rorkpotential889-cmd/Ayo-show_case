# Contact Form Setup Guide

The contact form is ready to use with multiple integration options:

## Option 1: Formspree (Recommended - Free Tier Available)

1. Go to https://formspree.io and sign up
2. Create a new form
3. Copy your form ID (looks like: `xvgkqjpn`)
4. Update `src/app/contact/page.tsx`:
   - Replace `YOUR_FORMSPREE_ID` with your actual form ID
   - Line 28: `'https://formspree.io/f/YOUR_FORMSPREE_ID'`

## Option 2: Next.js API Route (Already Created)

The API route is at `src/app/api/contact/route.ts`. You can:

1. **Use Resend** (Email service):

   ```bash
   pnpm add resend
   ```

   - Get API key from https://resend.com
   - Add to `.env.local`: `RESEND_API_KEY=your_key`
   - Uncomment the Resend code in the route file

2. **Use SendGrid**:

   ```bash
   pnpm add @sendgrid/mail
   ```

   - Get API key from SendGrid
   - Add to `.env.local`: `SENDGRID_API_KEY=your_key`

3. **Use Webhook** (Zapier, Make.com):
   - Update the route to POST to your webhook URL
   - No additional packages needed

## Option 3: Update Contact Form to Use API Route

If you want to use the Next.js API route instead of Formspree:

In `src/app/contact/page.tsx`, change line 28 from:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
```

To:

```typescript
const response = await fetch('/api/contact', {
```

## Current Status

- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Form reset on success
- ⚠️ Needs Formspree ID or API route configuration
