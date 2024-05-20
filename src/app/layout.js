import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "../../context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "../components/ThemeSwitch";
import ThemeContextProvider from "../../context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sham's Portfolio",
  description: "Web developer with almost 2 years of experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth scrollbar-thin scrollbar-thumb-[#c79e55]/80 scrollbar-track-white">
      <body className={`${inter.className} bg-gray-50 text-stone-700 relative dark:bg-[#242426] dark:text-stone-50 dark:text-opacity-90  selection:text-white selection:bg-[#dac24a]/50`}>
        
        <div className="hidden sm:block bg-[#dac34c]/50 absolute -translate-x-[50%] -translate-y-[50%] top-[0] left-[0] -z-10 h-[15rem] w-[15rem] rounded-[50rem] dark:bg-[#242426]/100 dark:border-4 dark:border-[#c79e55]"></div>
        
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
