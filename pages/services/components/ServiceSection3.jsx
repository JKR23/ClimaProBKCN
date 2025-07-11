import Img1 from '@/public/img/service4.webp';
import Img2 from '@/public/img/chaleur1.jpg';

import ImageSlider from '@/components/ImageSlider';
import GoToProduct from '@/pages/buttons/GoToProduct';

export default function ServiceSection3() {
  const images = [Img1, Img2];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
        <ImageSlider images={images} />
      </div>

      <div className="w-full md:w-1/2 pl-0 md:pl-8">
        <h3 className="text-2xl font-semibold mb-4">Fait-il chaud ?</h3>
        <p className="text-lg mb-6">
          Nous vendons les climatiseurs et, grâce à notre expertise, nous vous conseillons sur la meilleure solution selon votre habitation, vos préférences énergétiques et votre budget, tout en assurant une installation professionnelle et un service après-vente fiable.
          <br />
          N’hésitez pas à communiquer avec nous.
        </p>
        <GoToProduct />
      </div>
    </section>
  );
}
