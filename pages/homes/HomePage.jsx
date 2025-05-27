//@/pages/homes/HomePage
import PremiereSection from '@/pages/homes/PremiereSection';
import DeuxiemeSection from '@/pages/homes/DeuxiemeSection';
import TroisiemeSection from '@/pages/homes/TroisiemeSection';
import QuatriemeSection from '@/pages/homes/QuatriemeSection';

export default function HomePage() {
   return (
      <div>
         <PremiereSection />
         <DeuxiemeSection />
         <TroisiemeSection />
         <QuatriemeSection />
      </div>
   );
}
