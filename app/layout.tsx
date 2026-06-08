import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adorables Pet Clinic | Premium Veterinary Hospital, Banjara Hills, Hyderabad",
  description: "Experience world-class veterinary care in Banjara Hills, Hyderabad. Adorables Pet Clinic offers advanced surgeries, diagnostics, luxurious grooming, and cage-free boarding in a compassionate, hospital-grade facility.",
  keywords: [
    "pet clinic hyderabad",
    "veterinary hospital banjara hills",
    "vets in hyderabad",
    "pet grooming banjara hills",
    "dog boarding hyderabad",
    "animal diagnostics hyderabad",
    "adorables pet clinic"
  ],
  authors: [{ name: "Adorables Pet Clinic" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-soft-white text-neutral-900 selection:bg-clinic-green selection:text-white">
        {children}
      </body>
    </html>
  );
}

