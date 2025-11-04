import localFont from "next/font/local"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const caviarDreams = localFont({
  src: [
    {
      path: "./font/CaviarDreams.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/Caviar_Dreams_Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/CaviarDreams_Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./font/CaviarDreams_BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-caviar-dreams",
  display: "swap",
  preload: true,
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
})

export const metadata = {
  title: {
    default:
      "AROYÉ - Authentic Thai Taste | Fresh Thai Cuisine Daily",
    template: "%s | AROYÉ",
  },
  description:
    "AROYÉ authentic Thai restaurant serving delicious food with fresh ingredients daily, friendly service | Featured menu: Tom Yum Goong, Pad Thai, Green Curry | Open: Mon-Fri 11:00-21:00, Sat-Sun 10:00-22:00 | Call: 02-123-4567",
  keywords: [
    "Thai restaurant",
    "authentic Thai food",
    "Tom Yum Goong",
    "Pad Thai",
    "Green Curry",
    "Bangkok Thai food",
    "table reservation",
    "Sukhumvit restaurant",
    "organic Thai food",
  ],
  authors: [{ name: "AROYÉ" }],
  creator: "AROYÉ",
  publisher: "AROYÉ",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://restaurant.example.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AROYÉ - Authentic Thai Taste",
    description:
      "AROYÉ authentic Thai restaurant serving delicious food with fresh ingredients daily, friendly service",
    url: "/",
    siteName: "AROYÉ",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AROYÉ - Authentic Thai Taste",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AROYÉ - Authentic Thai Taste",
    description: "AROYÉ authentic Thai restaurant serving delicious food with fresh ingredients daily",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${caviarDreams.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
