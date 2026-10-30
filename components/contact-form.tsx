'use client'
import { useActionState } from 'react'
import { sendContact } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function ContactForm(){ const [state,action,pending]=useActionState(sendContact, null); return <form action={action} className="grid gap-6 rounded-2xl border bg-card p-6 shadow-sm md:p-8"><div className="grid gap-6 sm:grid-cols-2"><div className="grid gap-2"><Label htmlFor="firstName">First name *</Label><Input id="firstName" name="firstName" required /></div><div className="grid gap-2"><Label htmlFor="lastName">Last name</Label><Input id="lastName" name="lastName" /></div></div><div className="grid gap-2"><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" required /></div><div className="grid gap-2"><Label htmlFor="message">Comment or message *</Label><Textarea id="message" name="message" required rows={6} /></div>{state?.error&&<p role="alert" className="text-sm text-destructive">{state.error}</p>}{state?.success&&<p role="status" className="text-sm text-cyan-700">{state.success}</p>}<Button type="submit" disabled={pending} className="w-fit rounded-full px-7">{pending?'Sending…':'Send message'}</Button></form> }
