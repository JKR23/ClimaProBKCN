import Img1 from '@/public/img/service1.jpg';
import Img2 from '@/public/img/RepaImportant.jpg';
import Img3 from '@/public/img/Reparat1.jpg';

import ImageSlider from '@/components/ImageSlider';
import GoToContact from '@/pages/buttons/GoToContact';

export default function ServiceSection2() {
  const images = [Img1, Img2, Img3];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
        <h3 className="text-2xl font-semibold mb-4">
          Installation, Entretien unitaire ou contractuel, Devis & Réparation
        </h3>
        <p className="text-lg mb-6">
          Nous sommes en mesure d’installer, entretenir et réparer toutes les marques de climatisation, chauffage, ventilation et plus encore !
        </p>
        <GoToContact />
      </div>
      <div className="w-full md:w-1/2">
        <ImageSlider images={images} />
      </div>
    </section>
  );
}
