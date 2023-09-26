"use client";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "@/components/app.header";
import AppFooter from "@/components/app.footer";
import Container from "react-bootstrap/Container";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Common/Header/Header";
import Footer from "@/components/Common/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Header />
      {children}
      <Footer />
    </html>
  );
}
