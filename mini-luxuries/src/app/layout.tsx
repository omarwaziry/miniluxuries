import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini Luxuries - Premium Perfumes in Egypt",
  description: "Discover exquisite fragrances and luxury perfumes at Mini Luxuries. Shop authentic designer perfumes with fast delivery across Egypt.",
  keywords: "perfumes, fragrances, luxury, Egypt, Cairo, Alexandria, designer perfumes, authentic",
  authors: [{ name: "Mini Luxuries" }],
  openGraph: {
    title: "Mini Luxuries - Premium Perfumes in Egypt",
    description: "Discover exquisite fragrances and luxury perfumes at Mini Luxuries",
    url: "https://miniluxuries.com",
    siteName: "Mini Luxuries",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
