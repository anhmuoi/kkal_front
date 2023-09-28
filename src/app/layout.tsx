"use client";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "@/components/app.header";
import AppFooter from "@/components/app.footer";
import Container from "react-bootstrap/Container";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Common/Header/Header";
import Footer from "@/components/Common/Footer";
import { usePathname } from "next/navigation";
import { RoutesString } from "@/components/Modules/routesString";
import { pretendardVariable } from "./styles/fonts";
import BtnScrollTop from "@/components/Common/scrollToTop";

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
