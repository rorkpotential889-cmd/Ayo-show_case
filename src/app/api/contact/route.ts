import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Option 1: Send email using a service (Resend, SendGrid, etc.)
    // Option 2: Save to database
    // Option 3: Use webhook (Zapier, Make.com, etc.)

    // For now, we'll just log it (replace with actual email service)
    console.log('Contact form submission:', { name, email, subject, message });

    // Example: Using Resend (you'll need to install: pnpm add resend)
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@voxxel.com',
    //   to: 'your-email@example.com',
    //   subject: `Contact Form: ${subject}`,
    //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    // });

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
