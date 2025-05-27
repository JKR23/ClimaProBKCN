import React from 'react';

import Logo from '@/public/img/logo1.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function Footers() {
   return (
      <footer className="bg-blue-900 text-white">
         <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {/* Slogan */}
               <div className="ml-12">
                  <Image
                     src={Logo}
                     alt="Logo ClimaPro"
                     width={80}
                     height={80}
                     className="rounded-full cursor-pointer"
                  />
                  <div className="mb-8 md:mb-0 pr-4 flex justify-center">
                     <h2 className="bg-yellow-500 text-white text-lg md:text-xl font-bold px-6 py-3 rounded">
                        VOTRE CONFORT <br /> EST NOTRE PRIORITÉ
                     </h2>
                  </div>
               </div>

               {/* Navigation */}
               <div className="pr-4">
                  <h3 className="text-lg font-semibold mb-4 text-yellow-500">Navigation</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link
                           href="/"
                           className="text-white/80 hover:text-yellow-400 transition duration-300"
                        >
                           Accueil
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/produits"
                           className="text-white/80 hover:text-yellow-400 transition duration-300"
                        >
                           Produits
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/services"
                           className="text-white/80 hover:text-yellow-400 transition duration-300"
                        >
                           Service
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/realisations"
                           className="text-white/80 hover:text-yellow-400 transition duration-300"
                        >
                           Realisations
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/contact"
                           className="text-white/80 hover:text-yellow-400 transition duration-300"
                        >
                           Contact
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Bloc 1 */}
               <div className="pr-4">
                  <h3 className="text-lg font-semibold mb-4 text-yellow-500">Approche</h3>
                  <p className="text-sm text-white/80">
                     Notre approche repose sur l’écoute de vos besoins et une intervention
                     personnalisée. Chaque espace a ses particularités, c’est pourquoi nous évaluons
                     chaque projet avec soin afin de recommander les solutions les plus efficaces et
                     économiques.
                  </p>
               </div>

               {/* Bloc 2 */}
               <div className="pr-4">
                  <h3 className="text-lg font-semibold mb-4 text-yellow-500">Equipe</h3>
                  <p className="text-sm text-white/80">
                     Nos techniciens sont à l’écoute de vos besoins et interviennent de manière
                     personnalisée. Chaque espace a ses spécificités : c’est pourquoi ils évaluent
                     chaque projet avec soin, afin de recommander les solutions les plus efficaces
                     et économiques. Quelle que soit la taille du chantier, nos techniciens
                     appliquent la même rigueur pour garantir une installation fiable, adaptée et
                     durable.
                  </p>
               </div>
            </div>

            {/* Footer base */}
            <div className="border-t border-white-700 mt-12 pt-12 text-center text-white/60 text-sm">
               © 2025 ClimaPro - BKCNDynastie. Tous droits réservés.
            </div>
         </div>
      </footer>
   );
}
