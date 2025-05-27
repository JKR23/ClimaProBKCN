'use client';
import { useRouter } from 'next/navigation';

export default function GoToContact() {
   const router = useRouter();

   const goToContact = () => {
      router.push('/contact');
   };

   return (
      <button
         className="text-black mb-6 text-lg border-2 mt-8 px-6 py-3 border-black cursor-pointer hover:bg-blue-900 hover:text-yellow-500 transition duration-300 inline-block w-fit"
         onClick={goToContact}
      >
         CONTACTEZ-NOUS
      </button>
   );
}
