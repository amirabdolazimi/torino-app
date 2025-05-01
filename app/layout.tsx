import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const vazirMatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "600"],
});
export const metadata: Metadata = {
  title: "Torino | تورینو",
  description: "Torino organizes the best domestic and international tours",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirMatn.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
