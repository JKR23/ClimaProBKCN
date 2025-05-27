import NavBars from '@/components/headers/NavBar';
import Link from 'next/link';

export default function Headers() {
   return (
      <header>
         <div className="bg-blue-900 text-yellow-500 py-2 px-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-end gap-y-1 sm:gap-x-6 text-sm text-center sm:text-left">
               <span>Tél : 00243-979-512-238</span>
               <Link href="/contact" className="cursor-pointer">
                  Email : Lakersben1@gmail.com
               </Link>
            </div>
         </div>
         <NavBars />
      </header>
   );
}
