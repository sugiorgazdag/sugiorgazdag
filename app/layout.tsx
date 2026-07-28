import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets:[
    "latin"
  ]
});


export const metadata: Metadata = {

  title:
  "Galang Eka Wiyono | Software QA Engineer",


  description:
  "Software Quality Assurance Engineer specializing in Banking System, QRIS, Automation Testing, API Testing and Quality Engineering.",


  keywords:[
    "QA Engineer",
    "Software Tester",
    "Automation Testing",
    "Playwright",
    "Cypress",
    "Selenium",
    "QRIS",
    "Banking System"
  ],


  openGraph:{

    title:
    "Galang Eka Wiyono | Software QA Engineer",

    description:
    "5+ Years Experience in Quality Assurance Engineering.",

    type:"website"

  }

};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <html lang="en">


      <body
        className={inter.className}
      >

        {children}

      </body>


    </html>

  );

}