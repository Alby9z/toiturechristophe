/**
 * Shared form validation rules for react-hook-form
 */

export const validators = {
  prenom: {
    required: 'Le prénom est requis',
    minLength: { value: 2, message: 'Minimum 2 caractères' },
  },
  nom: {
    required: 'Le nom est requis',
    minLength: { value: 2, message: 'Minimum 2 caractères' },
  },
  email: {
    required: "L'email est requis",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Adresse email invalide',
    },
  },
  phone: {
    required: 'Le téléphone est requis',
    pattern: {
      value: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      message: 'Numéro de téléphone invalide',
    },
  },
  service: {
    required: 'Veuillez choisir un service',
  },
  message: {
    required: 'Le message est requis',
    minLength: { value: 20, message: 'Minimum 20 caractères' },
  },
  rgpd: {
    required: 'Vous devez accepter la politique de confidentialité',
  },
}
