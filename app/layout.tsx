
import Head from "next/head";
import Link from 'next/link';
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import InterestButton from "../src/components/InterestButton";
import "../src/styles/globals.css"; //ignore error, this is the global stylesheet for the entire app
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "UBC BIoT",
  description:
    "Known as “UBC’s beer-brewing design team”, Biological   Internet of Things (BIoT) has expanded to include a variety of projects in process control, R&D, and automation, including building a miniature chemical plant for the ChemE Cube competition, IoT process automation devices, and experimental research projects in food technology like making glow-in-the-dark beer.Our team aims to design and implement low-cost data monitoring and develop innovative techniques to brew novel, high-quality beers through various projects.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <Head>
        <meta charSet="UTF-8"/>
        <link rel="icon" href="/favicon.ico"/>
       </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}