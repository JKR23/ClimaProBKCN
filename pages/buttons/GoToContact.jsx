'use client';
import { useRouter } from 'next/navigation';

export default function GoToContact() {
   const router = useRouter();

   const goToContact = () => {
      router.push('/contact');
   };

   return (
      <button
         className="bg-blue-900 text-white mb-6 text-lg border-2 mt-8 px-6 py-3 border-blue-900 cursor-pointer hover:text-yellow-500 hover:bg-blue-900 transition duration-300 inline-block w-fit
                    sm:bg-white sm:text-black sm:border-black"
         onClick={goToContact}
      >
         CONTACTEZ-NOUS
      </button>
   );
}
