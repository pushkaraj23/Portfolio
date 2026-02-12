import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Pushkaraj | Portfolio",
  description: "Professional portfolio — bold editorial design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
