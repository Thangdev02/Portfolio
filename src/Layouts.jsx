import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./index.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
})

export const metadata = {
  title: "Patrick David - Award-winning Developer & Designer",
  description:
    "Portfolio of Patrick David - Independent developer and designer creating digital products and experiences for national and international clients.",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
