'use client'
import { useActionState, useEffect, useRef } from 'react'
import { sendContact } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { interests } from '@/lib/content'

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.success) formRef.current?.reset()
  }, [state])

  return (
    <form ref={formRef} action={action} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="firstName">First name *</Label>
          <Input id="firstName" name="firstName" autoComplete="given-name" required maxLength={80} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" name="lastName" autoComplete="family-name" maxLength={80} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required maxLength={254} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="interest">I am interested in</Label>
          <select
            id="interest"
            name="interest"
            defaultValue={interests[0]}
            className="flex h-11 w-full cursor-pointer rounded-lg border border-[#cfc3af] bg-[#f8f3e9] px-3 text-sm text-[#082c36] outline-none transition focus:border-[#0b5560] focus:ring-2 focus:ring-[#0b5560]/20"
          >
            {interests.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={2000}
          placeholder="Tell us about your idea, property, or goals."
        />
      </div>

      {state?.error && (
        <p role="alert" className="rounded-lg bg-coral-500/10 px-4 py-3 text-sm text-coral-700">
          {state.error}
        </p>
      )}
      {state?.success && (
        <p role="status" className="rounded-lg bg-sea-500/10 px-4 py-3 text-sm text-sea-700">
          {state.success}
        </p>
      )}

      <Button
        type="submit"
        disabled={pending}
        className="h-12 w-fit cursor-pointer rounded-full bg-ocean-900 px-8 text-sm text-sand-100 hover:bg-ocean-700"
      >
        {pending ? 'Sending...' : 'Send message'}
      </Button>
    </form>
  )
}
