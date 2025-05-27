import ProjectGrid from '@/pages/realisations/components/ProjectGrid';
import RESI1 from '@/public/img/residentiels/resi1.jpg';
import RESI2 from '@/public/img/residentiels/resi2.jpg';
import RESI3 from '@/public/img/residentiels/resi3.jpg';

const projetsResidentiels = [
   {
      image: RESI1,
      titre: 'Maison neuve, Gatineau',
      description: 'Ventilation, chauffage, air climatisé, chauffe-eau',
   },
   {
      image: RESI2,
      titre: 'Maison rénovée, Gatineau',
      description: 'Installation complète de système de chauffage et de ventilation',
   },
   {
      image: RESI3,
      titre: 'Condo moderne, Gatineau',
      description: 'Climatisation et échangeur d’air',
   },
];

export default function Residentiel() {
   return <ProjectGrid projets={projetsResidentiels} />;
}
