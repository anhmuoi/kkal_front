"use client";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import AppFooter from "@/components/app.footer";
import Container from "react-bootstrap/Container";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Common/Footer";
import { usePathname } from "next/navigation";
import { RoutesString } from "@/components/Modules/routesString";
import { pretendardVariable } from "./styles/fonts";
import AppHeader from "@/components/Common/Header/Header";

import dynamic from "next/dynamic";

const HeaderDynamic = dynamic(() => import('../components/Common/Header/Header'), {
  ssr: false,
});
function isRouteNotFound(currentRoute: any) {
  return !Object.values(RoutesString).includes(currentRoute);
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <html lang="en" className={pretendardVariable.className}>
      {isRouteNotFound(pathname) && !pathname.includes("/artist/") &&  !pathname.includes("/news/")? (
        <body>
        {children}
        </body>
      
      ): (
          <body>
            
          <HeaderDynamic />
          {children}
          <Footer />
        </body>
      )}
    </html>
  );
}
