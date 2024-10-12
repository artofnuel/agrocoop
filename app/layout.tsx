import type { Metadata } from "next";
import { Inter, Livvic, Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";

const manrope = Manrope({
  subsets: ["cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const livvic = Livvic({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "The Mbiafun Cooperative",
  description:
    "Creating a better community through modern agricultural practices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={livvic.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
