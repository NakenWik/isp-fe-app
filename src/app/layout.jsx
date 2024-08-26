import { Inter } from "next/font/google";
// import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./globals.css";
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Insurance Sale Patform",
  description: "ระบบสนับสนุนช่องทางการขายประกัน",
};
import { PrimeReactProvider } from 'primereact/api';
import Navbar from "./components/Navbar";

import Tailwind from 'primereact/passthrough/tailwind';

import applicationForm from "@/data/application-submit-data";
import { InsureCartProvider } from "./context/InsureCartProvider";

const initState = {
    application: applicationForm,
    total: 0.00,
    amount: 0.00
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* ISP Provider */}
      <InsureCartProvider>
        {/* Prime React Provider */}
        <PrimeReactProvider value={{ unstyled: true , pt: Tailwind, ...initState}} >
          <head></head>
          <body className={inter.className}>
            <Navbar />
            <main>{children}</main>
            
          </body>
        </PrimeReactProvider>
      </InsureCartProvider>
    </html>
  );
}
