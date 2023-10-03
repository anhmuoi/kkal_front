"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Common/Footer";
import { usePathname } from "next/navigation";
import { RoutesString } from "@/components/Modules/routesString";
import { pretendardVariable } from "./styles/fonts";
import BtnScrollTop from "@/components/Common/scrollToTop";

import dynamic from "next/dynamic";
import Header from "../components/Common/Header/Header";

const HeaderDynamic = dynamic(() => import("../components/Common/Header/Header"), {
  ssr: false,
});
function isRouteNotFound(currentRoute: any) {
  return !Object.values(RoutesString).includes(currentRoute);
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en" className={pretendardVariable.className}>
      {isRouteNotFound(pathname) && !pathname.includes("/artist/") && !pathname.includes("/news/") ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          {children}
          <BtnScrollTop />
          <Footer />
        </>
      )}
    </html>
  );
}
