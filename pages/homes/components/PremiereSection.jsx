'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Img1 from '@/public/img/familleSection1.jpg';
import Img2 from '@/public/img/famille1Section1.webp';
import Img3 from '@/public/img/famille2Section1.webp';

export default function PremiereSection() {
   const images = [Img1, Img2, Img3];

   return (
      <section className="relative h-[300px] overflow-hidden">
         <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="absolute inset-0 w-full h-full z-0"
         >
            {images.map((img, index) => (
               <SwiperSlide key={index}>
                  <div
                     className="w-full h-full bg-cover bg-center"
                     style={{ backgroundImage: `url(${img.src})` }}
                  >
                     <div className="w-full h-full bg-black opacity-50"></div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>

         <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-white text-center px-6 max-w-3xl">
               <h3 className="text-5xl font-semibold mb-4">Pour vous aider à mieux respirer</h3>
               <p className="text-lg text-yellow-400">
                  Découvrez nos solutions en climatisation, chauffage et ventilation adaptées à vos besoins.
               </p>
            </div>
         </div>
      </section>
   );
}
