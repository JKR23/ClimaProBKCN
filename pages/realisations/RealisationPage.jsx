import Presentation from '@/pages/realisations/components/Presentation';
import Commercial from '@/pages/realisations/components/Commercial';
import Locatif from '@/pages/realisations/components/Locatif';
import Residentiel from '@/pages/realisations/components/Residentiel';

export default function RealisationPage() {
   return (
      <div>
         <Presentation />
         <Commercial />
         <Locatif />
         <Residentiel />
      </div>
   );
}
