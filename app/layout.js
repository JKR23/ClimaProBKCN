import { Inter } from 'next/font/google';
import Header from '@/components/headers/Header';
import Footer from '@/components/footers/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
   title: 'air-conditioner-shop',
   description: 'Projet CLimaPro BKCNDynastie',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${inter.className} flex flex-col min-h-screen`}>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
         </body>
      </html>
   );
}
