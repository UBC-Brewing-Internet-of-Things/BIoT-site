/*Layout given in Next.js */
import Head from "next/head";
import Link from 'next/link';
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import InterestButton from "../src/components/InterestButton";
import "../src/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UBC BIoT",
  description:
    "Known as “UBC’s beer-brewing design team”, Biological   Internet of Things (BIoT) has expanded to include a variety of projects in process control, R&D, and automation, including building a miniature chemical plant for the ChemE Cube competition, IoT process automation devices, and experimental research projects in food technology like making glow-in-the-dark beer.Our team aims to design and implement low-cost data monitoring and develop innovative techniques to brew novel, high-quality beers through various projects.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charSet="UTF-8"/>
        <link rel="icon" href="/favicon.ico"/>
       </Head>
      <body>
        <Navbar />
        {children}
        <InterestButton />
        <Footer />
      </body>
    </html>
  )
}