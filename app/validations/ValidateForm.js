// app/validations/validateForm.js

export default function validateForm({ nom, telephone, email, commentaires }) {
   const errors = {};

   // Fonction utilitaire pour vérifier si une chaîne est vide ou uniquement composée d'espaces
   const isBlank = str => !str || /^\s*$/.test(str);

   // Nom
   if (isBlank(nom)) {
      errors.nom = 'Le nom est requis.';
   } else if (nom.trim().length < 2) {
      errors.nom = 'Le nom ne doit pas contenir moins de 2 caractères.';
   }

   // Téléphone
   const trimmedTelephone = telephone?.trim() || '';
   if (!trimmedTelephone) {
      errors.telephone = 'Le téléphone est requis.';
   } else if (!/^\d+$/.test(trimmedTelephone)) {
      errors.telephone = 'Le téléphone ne doit contenir que des chiffres.';
   } else if (trimmedTelephone.length > 14) {
      errors.telephone = 'Le téléphone ne doit pas dépasser 14 chiffres.';
   }

   // Email
   const trimmedEmail = email?.trim() || '';
   if (!trimmedEmail) {
      errors.email = "L'email est requis.";
   } else if (!trimmedEmail.includes('@')) {
      errors.email = 'Email invalide.';
   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errors.email = 'Email invalide.';
   }

   // Commentaires
   const trimmedCommentaires = commentaires?.trim() || '';
   if (!trimmedCommentaires) {
      errors.commentaires = 'Le message est requis.';
   } else if (trimmedCommentaires.length > 500) {
      errors.commentaires = 'Le message ne doit pas dépasser 500 caractères.';
   }

   return errors;
}
