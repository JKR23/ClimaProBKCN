import ProjectGrid from '@/pages/realisations/components/ProjectGrid';
import RESI1 from '@/public/img/residentiels/resi10.jpg';
import RESI2 from '@/public/img/residentiels/resi11.webp';
import RESI3 from '@/public/img/residentiels/resi12.jpg';

const projetsResidentiels = [
   {
      image: RESI1,
      titre: 'Maison neuve, Kitambo',
      description: 'Ventilation, chauffage, air climatisé, chauffe-eau',
   },
   {
      image: RESI2,
      titre: 'Maison rénovée, Mont fleurie',
      description: 'Installation complète de système de chauffage et de ventilation',
   },
   {
      image: RESI3,
      titre: 'Condo moderne, Gombe',
      description: 'Climatisation et échangeur d’air',
   },
];

export default function Residentiel() {
   return <ProjectGrid projets={projetsResidentiels} />;
}
