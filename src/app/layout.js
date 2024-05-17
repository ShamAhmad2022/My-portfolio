import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "../../context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "../components/ThemeSwitch";
import ThemeContextProvider from "../../context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sham porfolio",
  description: "web developer portfolio in Jordan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth scrollbar-thin scrollbar-thumb-pink-800 scrollbar-track-white">
      <body className={`${inter.className} bg-pink-50 text-pink-950 relative dark:bg-pink-900 dark:text-pink-50 dark:text-opacity-90  selection:text-white selection:bg-pink-950/30 dark:selection:text-pink-800 dark:selection:bg-white/80`}>
        <div className="bg-yellow-100 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-orange-700"></div>
        <div className="bg-pink-200 absolute top-[-1rem] -z-10 left-[-5rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-pink-600"></div>
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
