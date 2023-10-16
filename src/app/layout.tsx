import { mavenPro } from "@/@core/fonts";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpaceX - Dashboard",
  description: "SpaceX dashboard with launches information and statistics",
  keywords:
    "sites, web, desenvolvimento, frontend, spacex, launches, rockets, website",
  creator: "Renato Peres",
  // openGraph: {
  //   type: "website",
  //   url: "https://renatoperes.dev",
  //   title: "Renato Peres - Homepage",
  //   description: "Renato's homepage",
  //   siteName: "Renato Peres - Homepage",
  //   images: [
  //     {
  //       url: "https://renatoperes.dev/images/og.png",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={mavenPro.className + " scroll-smooth"}>{children}</body>
    </html>
  );
}
