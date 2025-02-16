import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Footer } from "@/components/layout/footer";
import { herrvon, inter, interthin, playfairbold, playfairthin } from "@/utils/fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "YG IMPACT",
  description: "Join YG IMPACT to create unforgettable experiences and impactful events. Professional event planning and coordination services.",
  keywords: [
    "event planning",
    "event coordination",
    "event organisatie",
    "eventplanner",
    "YG IMPACT",
    "Ylenia Guerrini",
    "professional events",
    "event management",
    "luxury events",
    "event organizer"
  ],
  authors: [{ name: "Ylenia Guerrini" }],
  creator: "Ylenia Guerrini",
  publisher: "YG IMPACT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://ygimpact.com',
    siteName: 'YG IMPACT',
    title: 'YG IMPACT - Professional Event Planning & Coordination',
    description: 'Join YG IMPACT to create unforgettable experiences and impactful events. Professional event planning and coordination services.',
    images: [
      {
        url: '/og-image.jpg', // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'YG IMPACT Events',
      },
    ],
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google verification code
  },
  category: 'Event Planning',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="nl">
      <body className={`${playfairbold.variable} ${playfairthin.variable} ${inter.variable} ${interthin.variable} ${herrvon.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
