import Img1 from '@/public/img/imageSection2.webp';
import ImageSlider from '@/components/ImageSlider';
import GoToService from '@/pages/buttons/GoToService';

export default function DeuxiemeSection() {
  const images = [Img1];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
        <h3 className="text-2xl font-semibold mb-4">Nos services</h3>
        <p className="text-lg mb-4">
          Nous offrons des services de qualité en installation, réparation et entretien de systèmes de chauffage, climatisation et ventilation.
          <br />
          N’hésitez pas à communiquer avec nous.
        </p>
        <GoToService />
      </div>
      <div className="w-full md:w-1/2">
        <ImageSlider images={images} />
      </div>
    </section>
  );
}
