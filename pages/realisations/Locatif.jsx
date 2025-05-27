import ProjectGrid from '@/pages/realisations/components/ProjectGrid';
import LOCA1 from '@/public/img/locatifs/loca1.jpg';
import LOCA2 from '@/public/img/locatifs/loca2.jpg';
import LOCA3 from '@/public/img/locatifs/loca3.jpg';

const projetsLocatifs = [
   {
      image: LOCA1,
      titre: 'Appartement locatif, Hull',
      description: 'Système de chauffage et climatisation central',
   },
   {
      image: LOCA2,
      titre: 'Complexe résidentiel, Aylmer',
      description: 'Ventilation complète pour logements multiples',
   },
   {
      image: LOCA3,
      titre: 'Logement urbain, Ottawa',
      description: 'Pompe à chaleur et VRC installés',
   },
];

export default function Locatif() {
   return <ProjectGrid projets={projetsLocatifs} />;
}
