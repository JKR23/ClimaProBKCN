import Presentation from '@/pages/realisations/Presentation';
import Commercial from '@/pages/realisations/Commercial';
import Locatif from '@/pages/realisations/Locatif';
import Residentiel from '@/pages/realisations/Residentiel';

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
