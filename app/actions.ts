'use server'
import nodemailer from 'nodemailer'

export async function sendContact(formData: FormData) {
  const firstName=String(formData.get('firstName')||'').trim(); const lastName=String(formData.get('lastName')||'').trim(); const email=String(formData.get('email')||'').trim(); const message=String(formData.get('message')||'').trim()
  if (!firstName || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return {error:'Please complete the required fields with a valid email.'}
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD || !process.env.CONTACT_TO_EMAIL) return {error:'Email service is not configured yet. Please contact us directly.'}
  const transporter=nodemailer.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT||587),secure:process.env.SMTP_SECURE==='true',auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASSWORD}})
  await transporter.sendMail({from:process.env.SMTP_FROM||process.env.SMTP_USER,to:process.env.CONTACT_TO_EMAIL,replyTo:email,subject:`New SNH-INC inquiry from ${firstName} ${lastName}`,text:`Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`})
  return {success:'Thanks — your message has been sent.'}
}
