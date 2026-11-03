'use server'
import nodemailer from 'nodemailer'
import { interests } from '@/lib/content'

export type ContactState = { error?: string; success?: string } | null

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function sendContact(_previous: ContactState, formData: FormData): Promise<ContactState> {
  const firstName = String(formData.get('firstName') || '').trim()
  const lastName = String(formData.get('lastName') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const interestInput = String(formData.get('interest') || '').trim()
  const message = String(formData.get('message') || '').trim()

  if (
    !firstName ||
    !email ||
    !message ||
    firstName.length > 80 ||
    lastName.length > 80 ||
    email.length > 254 ||
    message.length > 2000 ||
    !emailPattern.test(email)
  ) {
    return { error: 'Please complete the required fields with a valid email.' }
  }

  const interest = (interests as readonly string[]).includes(interestInput) ? interestInput : 'Something else'

  const supabaseUrl = process.env.SUPABASE_URL
  const anonKey = process.env.SUPABASE_ANON_KEY
  if (!supabaseUrl || !anonKey) {
    return { error: 'We could not send your message right now. Please try again later.' }
  }

  let response: Response
  try {
    response = await fetch(`${supabaseUrl}/rest/v1/inquiries`, {
      method: 'POST',
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        interest,
        message,
      }),
      cache: 'no-store',
    })
  } catch {
    return { error: 'We could not reach our server. Please check your connection and try again.' }
  }

  if (!response.ok) {
    return { error: 'We could not send your message right now. Please try again later.' }
  }

  await notifyByEmail({ firstName, lastName, email, interest, message })

  return { success: 'Thanks. Your message has been sent and our team will be in touch soon.' }
}

async function notifyByEmail(details: {
  firstName: string
  lastName: string
  email: string
  interest: string
  message: string
}) {
  const { SMTP_HOST, SMTP_USER, SMTP_PASSWORD, CONTACT_TO_EMAIL } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_TO_EMAIL) return

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  })

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || SMTP_USER,
      to: CONTACT_TO_EMAIL,
      replyTo: details.email,
      subject: `New SNH-INC inquiry from ${details.firstName} ${details.lastName}`,
      text: `Name: ${details.firstName} ${details.lastName}\nEmail: ${details.email}\nInterest: ${details.interest}\n\n${details.message}`,
    })
  } catch (error) {
    console.error('Contact notification email failed', error)
  }
}
