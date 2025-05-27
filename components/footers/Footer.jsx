import React from 'react';
import Logo from '@/public/img/logo1.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function Footers() {
   return (
      <footer className="bg-blue-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {/* Slogan */}
               <div className="flex flex-col items-center sm:items-start">
                  <Image
                     src={Logo}
                     alt="Logo ClimaPro"
                     width={80}
                     height={80}
                     className="rounded-full cursor-pointer"
                  />
                  <div className="mt-4 text-center sm:text-left">
                     <h2 className="bg-yellow-500 text-white text-base sm:text-lg md:text-xl font-bold px-4 py-2 rounded leading-tight">
                        VOTRE CONFORT <br className="hidden sm:inline" /> EST NOTRE PRIORITÉ
                     </h2>
                  </div>
               </div>

               {/* Navigation */}
               <div>
                  <h3 className="text-lg font-semibold mb-4 text-yellow-500">Navigation</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link href="/" className="text-white/80 hover:text-yellow-400 transition duration-300">
                           Accueil
                        </Link>
                     </li>
                     <li>
                        <Link href="/produits" className="text-white/80 hover:text-yellow-400 transition duration-300">
                           Produits
                        </Link>
                     </li>
                     <li>
                        <Link href="/services" className="text-white/80 hover:text-yellow-400 transition duration-300">
                           Services
                        </Link>
                     </li>
                     <li>
                        <Link href="/realisations" className="text-white/80 hover:text-yellow-400 transition duration-300">
                           Réalisations
                        </Link>
                     </li>
                     <li>
                        <Link href="/contact" className="text-white/80 hover:text-yellow-400 transition duration-300">
                           Contact
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Approche */}
               <div>
                  <h3 className="text-lg font-semibold mb-4 text-yellow-500">Approche</h3>
                  <p className="text-sm text-white/80 text-justify">
                     Notre approche repose sur l’écoute de vos besoins et une intervention
                     personnalisée. Chaque espace a ses particularités, c’est pourquoi nous évaluons
                     chaque projet avec soin afin de recommander les solutions les plus efficaces et
                     économiques.
                  </p>
               </div>

               {/* Équipe */}
               <div>
                  <h3 className="text-lg font-semibold mb-4 text-yellow-500">Équipe</h3>
                  <p className="text-sm text-white/80 text-justify">
                     Nos techniciens sont à l’écoute de vos besoins et interviennent de manière
                     personnalisée. Chaque espace a ses spécificités : c’est pourquoi ils évaluent
                     chaque projet avec soin, afin de recommander les solutions les plus efficaces
                     et économiques. Quelle que soit la taille du chantier, nos techniciens
                     appliquent la même rigueur pour garantir une installation fiable, adaptée et
                     durable.
                  </p>
               </div>
            </div>

            <div className="border-t border-white/30 mt-12 pt-6 text-center text-white/60 text-sm">
               © 2025 ClimaPro - BKCNDynastie. Tous droits réservés.
            </div>
         </div>
      </footer>
   );
}
