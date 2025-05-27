'use client';

import Link from 'next/link';
import Logo from '@/public/img/logo1.jpg';
import Image from 'next/image';

export default function NavBars() {
   return (
      <nav className="bg-white-900 text-black h-40 flex items-center px-6">
         <div className="ml-12">
            <Link href="/">
               <Image
                  src={Logo}
                  alt="Logo ClimaPro"
                  width={80}
                  height={80}
                  className="rounded-full cursor-pointer"
               />
            </Link>
         </div>
         <ul className="flex gap-10 text-xl font-semibold ml-auto mr-12 ">
            <li>
               <Link
                  href="/"
                  className="hover:text-yellow-500 transition duration-300 inline-block w-fit"
               >
                  Accueil
               </Link>
            </li>
            <li>
               <Link
                  href="/produits"
                  className="hover:text-yellow-500 transition duration-300 inline-block w-fit"
               >
                  Produits
               </Link>
            </li>
            <li>
               <Link
                  href="/services"
                  className="hover:text-yellow-500 transition duration-300 inline-block w-fit"
               >
                  Services
               </Link>
            </li>
            <li>
               <Link
                  href="/realisations"
                  className="hover:text-yellow-500 transition duration-300 inline-block w-fit"
               >
                  Realisations
               </Link>
            </li>
            <li>
               <Link
                  href="/contact"
                  className="hover:text-yellow-500 transition duration-300 inline-block w-fit"
               >
                  Contact
               </Link>
            </li>
         </ul>
      </nav>
   );
}
