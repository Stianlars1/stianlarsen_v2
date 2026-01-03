import { Aside } from "@/components/layout/aside/aside";
import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import "./globals.css";
import { InitialRenders } from "@/components/layout/InitialRenders";
import { geistMono, geistSans } from "@/lib/fonts";

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
        <InitialRenders />
      </body>
    </html>
  );
}
