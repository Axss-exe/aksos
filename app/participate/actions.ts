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

  const notifyTo = 'connect@aksos.net'

  try {
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      const { error } = await resend.emails.send({
        from: 'AKSOS <onboarding@resend.dev>',
        to: notifyTo,
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
      })

      if (error) {
        console.log('[v0] Resend send error:', error)
        return { ok: false, error: 'Could not send your message. Please try again.' }
      }
    } else {
      // Resend is not connected yet — log so the submission is not silently lost
      // during development, without blocking the user-facing flow.
      console.log('[v0] Participation request received (Resend not configured):', {
        name,
        email,
        organization,
        interest,
        message,
      })
    }

    return { ok: true }
  } catch (err) {
    console.log('[v0] Participation submission failed:', err)
    return { ok: false, error: 'Something went wrong. Please try again.' }
  }
}
