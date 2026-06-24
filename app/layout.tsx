/*Layout given in Next.js */
import Head from "next/head";
import Link from 'next/link';
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import InterestButton from "../src/components/InterestButton";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <Head>
        <title>Home - UBC BIoT</title>
        <meta name = 'title' content='UBC BIoT website'/>
        <meta name = 'description' content='Known as “UBC’s beer-brewing design team”, Biological   Internet of Things (BIoT) has expanded to include a variety of projects in process control, R&D, and automation, including building a miniature chemical plant for the ChemE Cube competition, IoT process automation devices, and experimental research projects in food technology like making glow-in-the-dark beer.Our team aims to design and implement low-cost data monitoring and develop innovative techniques to brew novel, high-quality beers through various projects.'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charSet="UTF-8"/>
        <link rel="icon" href="public/favicon.ico"/>
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