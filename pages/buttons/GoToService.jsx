'use client';
import { useRouter } from 'next/navigation';

export default function GoToService() {
   const router = useRouter();

   const goToService = () => {
      router.push('/services');
   };

   return (
      <button
         className="text-black text-lg border-2 mt-8 px-6 py-3 border-black cursor-pointer hover:bg-blue-900 hover:text-yellow-500 transition duration-300 inline-block w-fit"
         onClick={goToService}
      >
         VOIR TOUS NOS SERVICES
      </button>
   );
}
