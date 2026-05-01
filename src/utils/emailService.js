import emailjs from '@emailjs/browser'

/**
 * Send contact form via EmailJS.
 *
 * Setup: create a free account at https://emailjs.com
 * Fill in .env with your credentials:
 *   VITE_EMAILJS_SERVICE_ID
 *   VITE_EMAILJS_TEMPLATE_ID
 *   VITE_EMAILJS_PUBLIC_KEY
 *
 * @param {Object} formData - { prenom, nom, email, phone, service, message }
 * @returns {Promise}
 */
export async function sendContactEmail(formData) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    // Dev mode: simulate success
    console.warn('[emailService] EmailJS not configured — simulating send.')
    await new Promise((r) => setTimeout(r, 1200))
    return { status: 200, text: 'OK (simulated)' }
  }

  const templateParams = {
    from_prenom: formData.prenom,
    from_nom: formData.nom,
    from_email: formData.email,
    from_phone: formData.phone,
    service_type: formData.service,
    message: formData.message,
    to_email: 'chris-services@outlook.fr',
  }

  return emailjs.send(serviceId, templateId, templateParams, publicKey)
}
