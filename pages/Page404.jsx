import React from 'react';
import Link from 'next/link';
import Erreur404 from '@/public/assets/Erreur404.webp';
import Image from 'next/image';

export default function Page404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <Image src={Erreur404} alt="404" className="w-64 mb-6" />
      <h2 className="text-2xl font-semibold mb-2">Page non trouvée</h2>
      <p className="text-gray-600 mb-6">
        Oups... La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
