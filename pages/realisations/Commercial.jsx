import ProjectGrid from '@/pages/realisations/components/ProjectGrid';
import COMM1 from '@/public/img/commercials/com10.jpeg';
import COMM2 from '@/public/img/commercials/com11.jpeg';
import COMM3 from '@/public/img/commercials/comm13.jpg';

const projetsCommerciaux = [
   {
      image: COMM1,
      titre: 'Restaurant Eben Ezer',
      description: 'Projet réalisé a Lemba, Kinshasa',
   },
   {
      image: COMM2,
      titre: 'Bureau rénové, Gombe',
      description: 'Projet réalisé a Gombe, Kinshasa',
   },
   {
      image: COMM3,
      titre: 'Maison pour un client',
      description: 'Projet réalisé vers pigeon, Delvo',
   },
];

export default function Commercial() {
   return <ProjectGrid projets={projetsCommerciaux} />;
}
