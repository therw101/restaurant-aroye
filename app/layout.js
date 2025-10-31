import { Kanit, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
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
      "AROYÉ - รสชาติแห่งความเป็นไทย | อาหารไทยแท้ สดใหม่ทุกวัน",
    template: "%s | AROYÉ",
  },
  description:
    "AROYÉ ร้านอาหารไทยแท้ที่เสิร์ฟอาหารอร่อย วัตถุดิบสดใหม่ทุกวัน พร้อมบริการที่เป็นมิตร | เมนูแนะนำ: ต้มยำกุ้ง, ผัดไทย, แกงเขียวหวาน | เปิดบริการ: จ-ศ 11:00-21:00, ส-อา 10:00-22:00 | โทรจอง: 02-123-4567",
  keywords: [
    "ร้านอาหารไทย",
    "อาหารไทยแท้",
    "ต้มยำกุ้ง",
    "ผัดไทย",
    "แกงเขียวหวาน",
    "อาหารไทยกรุงเทพ",
    "จองโต๊ะ",
    "ร้านอาหารสุขุมวิท",
    "อาหารไทยออร์แกนิก",
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
    title: "AROYÉ - รสชาติแห่งความเป็นไทย",
    description:
      "AROYÉ ร้านอาหารไทยแท้ที่เสิร์ฟอาหารอร่อย วัตถุดิบสดใหม่ทุกวัน พร้อมบริการที่เป็นมิตร",
    url: "/",
    siteName: "AROYÉ",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AROYÉ - รสชาติแห่งความเป็นไทย",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AROYÉ - รสชาติแห่งความเป็นไทย",
    description: "AROYÉ ร้านอาหารไทยแท้ที่เสิร์ฟอาหารอร่อย วัตถุดิบสดใหม่ทุกวัน",
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
    <html lang="th" suppressHydrationWarning>
      <body className={`${kanit.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
