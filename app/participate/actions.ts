'use server'

type SubmitResult = { ok: true } | { ok: false; error: string }

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function submitParticipationRequest(
  _prev: SubmitResult | null,
  formData: FormData,
): Promise<SubmitResult> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const organization = String(formData.get('organization') ?? '').trim()
  const interest = String(formData.get('interest') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { ok: false, error: 'Name, email, and message are required.' }
  }
  if (!isValidEmail(email)) {
    return { ok: false, error: 'Enter a valid email address.' }
  }
  if (message.length > 4000) {
    return { ok: false, error: 'Message is too long.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  const emailDomain = process.env.RESEND_EMAIL_DOMAIN

  if (!apiKey || !emailDomain) {
    return { ok: false, error: 'Messaging is temporarily unavailable. Please try again later.' }
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send(
      {
        from: `AKSOS <hello@${emailDomain}>`,
        to: 'connect@aksos.net',
        replyTo: email,
        subject: `Participation request — ${organization || name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Organization: ${organization || 'Not provided'}`,
          `Interest: ${interest || 'Not specified'}`,
          '',
          message,
        ].join('\n'),
      },
      { idempotencyKey: `participation-request/${crypto.randomUUID()}` },
    )

    if (error) {
      return { ok: false, error: 'Could not send your message. Please try again.' }
    }

    return { ok: true }
  } catch {
    return { ok: false, error: 'Something went wrong. Please try again.' }
  }
}
