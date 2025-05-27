// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
   try {
      const body = await req.json();
      const { nom, telephone, email, commentaires } = body;

      const transporter = nodemailer.createTransport({
         service: 'gmail', // ou autre service SMTP
         auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
         },
      });

      // Email vers l’admin (toi)
      await transporter.sendMail({
         from: process.env.SMTP_USER,
         to: process.env.SMTP_USER,
         subject: 'Nouveau message de contact',
         text: `
Nom : ${nom}
Téléphone : ${telephone}
Email : ${email}
Message :
${commentaires}
         `,
      });

      // Email automatique vers l’utilisateur
      await transporter.sendMail({
         from: process.env.SMTP_USER,
         to: email,
         subject: 'Confirmation de réception de votre message',
         text: `
Bonjour ${nom},

Nous avons bien reçu votre message. Un membre de notre équipe vous recontactera rapidement.

Merci pour votre confiance !

— L'équipe
         `,
      });

      return new Response(JSON.stringify({ message: 'Message envoyé avec succès' }), {
         status: 200,
         headers: { 'Content-Type': 'application/json' },
      });
   } catch (err) {
      console.error('Erreur API contact :', err);
      return new Response(JSON.stringify({ message: 'Erreur serveur' }), {
         status: 500,
         headers: { 'Content-Type': 'application/json' },
      });
   }
}
