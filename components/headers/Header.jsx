import NavBars from '@/components/headers/NavBar';
import Link from 'next/link';

export default function Headers() {
   return (
      <header>
         {/* Barre supérieure avec coordonnées alignées à droite */}
         <div className="bg-blue-900 text-yellow-500 py-2 px-4">
            <div className="max-w-7xl mx-auto flex justify-end gap-x-6 text-sm">
               <span>Tél : 00243-979-512-238</span>
               <Link href="/contact" className="cursor-pointer">
                  <span>Email : Bkcndynastie@gmail.com</span>
               </Link>
            </div>
         </div>
         <NavBars />
      </header>
   );
}
