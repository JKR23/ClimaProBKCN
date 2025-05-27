import ProjectGrid from '@/pages/realisations/components/ProjectGrid';
import LOCA1 from '@/public/img/commercials/imeubl.webp';
import LOCA2 from '@/public/img/locatifs/LOCA11.webp';
import LOCA3 from '@/public/img/locatifs/LOCA12.webp';

const projetsLocatifs = [
   {
      image: LOCA1,
      titre: 'Bureau DGI, Gombe',
      description: 'Système de chauffage et climatisation central',
   },
   {
      image: LOCA2,
      titre: 'Complexe résidentiel, Ndjili',
      description: 'Ventilation complète pour logements multiples',
   },
   {
      image: LOCA3,
      titre: 'Complexe résidentiel, Ngaliema',
      description: 'Installation et entretien preventif',
   },
];

export default function Locatif() {
   return <ProjectGrid projets={projetsLocatifs} />;
}
