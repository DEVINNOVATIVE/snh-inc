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
            className="flex h-12 w-full cursor-pointer rounded-xl border border-sand-400 bg-sand-100 px-4 text-sm text-ocean-900 outline-none transition focus:border-ocean-700 focus:ring-2 focus:ring-ocean-700/20"
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
