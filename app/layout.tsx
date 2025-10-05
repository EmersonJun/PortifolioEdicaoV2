import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "VideoEditor - Portfólio de Edição de Vídeos",
  description:
    "Portfólio profissional de edição de vídeos com experiência em CapCut, Premiere Pro, After Effects e Photoshop",
    generator: 'Emerson',
    icons: {
    icon: "/Edc.png", // 👉 Coloque seu ícone aqui (dentro da pasta /public)
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
