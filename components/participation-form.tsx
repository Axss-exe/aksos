'use client'

import { submitParticipationRequest } from '@/app/participate/actions'
import { useActionState } from 'react'

const INTERESTS = ['Institutional partnership', 'Data contribution', 'Research collaboration', 'Other']

export function ParticipationForm() {
  const [state, formAction, pending] = useActionState(submitParticipationRequest, null)

  if (state?.ok) {
    return (
      <div className="border border-border/60 p-10">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
          Received
        </p>
        <h3 className="mt-4 font-serif text-2xl font-medium text-foreground">
          Thank you — we'll be in touch.
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
          Your message has been routed to connect@aksos.net. A response typically follows within
          a few business days.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Field label="Organization" name="organization" autoComplete="organization" />
        <div className="flex flex-col gap-2">
          <label
            htmlFor="interest"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
          >
            Interest
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            className="border-b border-border bg-transparent py-2 text-[15px] text-foreground outline-none transition-colors focus:border-foreground"
          >
            <option value="" disabled>
              Select one
            </option>
            {INTERESTS.map((item) => (
              <option key={item} value={item} className="bg-background">
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={4000}
          placeholder="What are you trying to solve?"
          className="resize-none border-b border-border bg-transparent py-2 text-[15px] leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
        />
      </div>

      {state?.ok === false && (
        <p role="alert" className="text-[14px] leading-relaxed text-destructive">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-fit border border-foreground px-6 py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
      >
        {label}
        {required ? ' *' : ''}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="border-b border-border bg-transparent py-2 text-[15px] text-foreground outline-none transition-colors focus:border-foreground"
      />
    </div>
  )
}
