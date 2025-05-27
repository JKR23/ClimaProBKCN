//@/pages/homes/HomePage
import PremiereSection from '@/pages/homes/components/PremiereSection';
import DeuxiemeSection from '@/pages/homes/components/DeuxiemeSection';
import TroisiemeSection from '@/pages/homes/components/TroisiemeSection';
import QuatriemeSection from '@/pages/homes/components/QuatriemeSection';

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
