import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-4 md:px-32">
          <Navbar />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
