import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CustomLayout } from "@/components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'refined strategies',
  description: 'Strategic Advisory for the dynamic business environment',
  keywords: 'refined, strategies',
  robots: 'index, follow',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`bg-white ${geistSans.variable} ${geistMono.variable}`}
      >
        <CustomLayout>{children} </CustomLayout>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>

    </html>
  );
}
