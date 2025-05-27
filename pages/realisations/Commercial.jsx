import ProjectGrid from '@/pages/realisations/components/ProjectGrid';
import COMM1 from '@/public/img/commercials/comm1.jpg';
import COMM2 from '@/public/img/commercials/comm2.jpg';
import COMM3 from '@/public/img/commercials/comm3.jpg';

const projetsCommerciaux = [
   {
      image: COMM1,
      titre: 'Bâtiment commercial, Gatineau',
      description: 'Chauffage industriel et ventilation sur mesure',
   },
   {
      image: COMM2,
      titre: 'Centre commercial, Ottawa',
      description: 'Systèmes CVC centralisés et maintenance',
   },
   {
      image: COMM3,
      titre: 'Bureau rénové, Aylmer',
      description: 'Climatisation et système d’air neuf',
   },
];

export default function Commercial() {
   return <ProjectGrid projets={projetsCommerciaux} />;
}
