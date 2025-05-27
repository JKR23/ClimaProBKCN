'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function FormContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nom: '',
      telephone: '',
      email: '',
      objet: '',
      commentaires: '',
    },
  });

  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (values) => {
    const serviceID = 'service_bexcgi5';
    const templateID = 'template_4o5bl0f';
    const publicKey = 'ocrVTh8KJ36IuszAK';

    const templateParams = {
      name: values.nom,
      phone: values.telephone,
      email: values.email,
      subject: values.objet,
      message: values.commentaires,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setSuccessMessage('Votre message a bien été envoyé ✅');
        reset();
        setTimeout(() => setSuccessMessage(''), 5000);
      })
      .catch((error) => {
        console.error('Erreur EmailJS:', error);
        setSuccessMessage("❌ Une erreur est survenue. Veuillez réessayer.");
        setTimeout(() => setSuccessMessage(''), 5000);
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-6">
      {successMessage && (
        <div className="mb-4 px-4 py-2 rounded bg-green-100 text-green-800 font-semibold flex items-center gap-2">
          <svg className="w-5 h-5 fill-green-600" viewBox="0 0 20 20">
            <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
          </svg>
          {successMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit(sendEmail)}
        className="space-y-4 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-md"
      >
        {/* Champ Nom */}
        <div>
          <input
            type="text"
            placeholder="Nom*"
            maxLength={20}
            {...register('nom', {
              required: 'Le nom est requis.',
              validate: value => value.trim() !== '' || 'Le nom ne peut pas être vide.',
              minLength: { value: 2, message: 'Min. 2 caractères.' },
              maxLength: { value: 20, message: 'Max. 20 caractères.' },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.nom && <p className="text-red-600 italic text-sm">{errors.nom.message}</p>}
        </div>

        {/* Champ Téléphone */}
        <div>
          <input
            type="text"
            placeholder="Téléphone*"
            maxLength={14}
            {...register('telephone', {
              required: 'Le téléphone est requis.',
              pattern: { value: /^\d+$/, message: 'Chiffres uniquement.' },
              maxLength: { value: 14, message: 'Max. 14 chiffres.' },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.telephone && (
            <p className="text-red-600 italic text-sm">{errors.telephone.message}</p>
          )}
        </div>

        {/* Champ Email */}
        <div>
          <input
            type="email"
            placeholder="Email*"
            {...register('email', {
              required: "L'email est requis.",
              validate: {
                hasAt: value => value.includes('@') || "Doit contenir '@'.",
                format: value =>
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Format email invalide.',
              },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-600 italic text-sm">{errors.email.message}</p>}
        </div>

        {/* Champ Objet */}
        <div>
          <input
            type="text"
            placeholder="Objet* - Exemple : Installation, Devis, Question..."
            maxLength={30}
            {...register('objet', {
              required: "L'objet est requis.",
              validate: value => value.trim() !== '' || "L'objet ne peut pas être vide.",
              minLength: { value: 5, message: 'Min. 5 caractères.' },
              maxLength: { value: 30, message: 'Max. 30 caractères.' },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.objet && <p className="text-red-600 italic text-sm">{errors.objet.message}</p>}
        </div>

        {/* Champ Commentaires */}
        <div>
          <textarea
            placeholder="Message*"
            rows="5"
            {...register('commentaires', {
              required: 'Le message est requis.',
              maxLength: { value: 500, message: 'Max. 500 caractères.' },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded resize-none"
          ></textarea>
          {errors.commentaires && (
            <p className="text-red-600 italic text-sm">{errors.commentaires.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-900 text-white px-6 py-2 rounded hover:text-yellow-400 hover:bg-blue-800 transition"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
