import type { AppProps } from "next/app";
import React from "react";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { AuthProvider } from "../contexts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </AuthProvider>
  );
}
