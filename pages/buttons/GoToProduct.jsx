'use client';
import { useRouter } from 'next/navigation';

export default function GoToProduct() {
   const router = useRouter();

   const goToProduct = () => {
      router.push('/produits');
   };

   return (
      <button
         className="text-black text-lg border-2 mt-8 px-6 py-3 border-black cursor-pointer hover:bg-blue-900 hover:text-yellow-500 transition duration-300 inline-block w-fit"
         onClick={goToProduct}
      >
         VOIR NOS PRODUITS
      </button>
   );
}
