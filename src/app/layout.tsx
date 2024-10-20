import { Aside } from "@/ui_layout/aside/aside";
import { PageContainer } from "@/ui_layout/pageContainer/pageContainer";
import localFont from "next/font/local";
import "./globals.css";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <PageContainer>
          <Aside />
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </PageContainer>
      </body>
    </html>
  );
}
