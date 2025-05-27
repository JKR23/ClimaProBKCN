import LogoSection from '@/public/img/imagePatronSection4.jpg';
import GoToContact from '@/pages/buttons/GoToContact';

export default function QuatriemeSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src={LogoSection.src}
          alt="Entretien et maintenance"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-8 hover:shadow-lg rounded-lg transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">À propos</h3>
        <h2 className="text-2xl font-semibold mb-4">L’expérience à votre service.</h2>
        <p className="text-lg">
          Notre priorité est de bâtir une relation de confiance avec chaque client, en
          proposant un service sur mesure qui respecte délais et budget. Rénovation ou
          nouvelle construction, nous sommes là pour vous.
        </p>
        <GoToContact />
      </div>
    </section>
  );
}
