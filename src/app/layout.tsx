import AppStoreProvider from "@/providers/AppStoreProvider";

import type {Metadata} from "next";

import {Poppins} from "next/font/google";

import {Toaster} from "react-hot-toast";

import Header from "@/components/Header";

import "./globals.css";

const font = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SingleClic - Ecommerce Task",
    template: "SingleClic - Ecommerce Task | %s",
  },
  description: "SingleClic - Ecommerce front-end task",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={font.className}>
        <AppStoreProvider>
          <main>
            <Header />
            {children}
          </main>
          <div id="modal-root"></div>
          <Toaster position="top-right" />
        </AppStoreProvider>
      </body>
    </html>
  );
}
