import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../assets/styles/globals.css'

const barlow = localFont({
  src:[
    {
      path: "../assets/fonts/Barlow-Black.ttf", 
      weight: '900', 
      style: 'normal',
    },
    {
      path: "../assets/fonts/Barlow-Bold.ttf", 
      weight: '700', 
      style: 'normal',
    },
    {
      path: "../assets/fonts/Barlow-ExtraBold.ttf", 
      weight: '800', 
      style: 'normal',
    },
    {
      path: "../assets/fonts/Barlow-ExtraLight.ttf", 
      weight: '200', 
      style: 'normal',
    },
    {
      path: "../assets/fonts/Barlow-Italic.ttf", 
      weight: '400', 
      style: 'normal',
    },
    {
      path: "../assets/fonts/Barlow-Light.ttf", 
      weight: '300', 
      style: 'normal',
    },
    {
      path: "../assets/fonts/Barlow-Medium.ttf", 
      weight: '500', 
      style: 'normal',
    },
    {
      path: "../assets/fonts/Barlow-Regular.ttf", 
      weight: '400', 
      style: 'normal',
    },
    {
      path: "../assets/fonts/Barlow-SemiBold.ttf", 
      weight: '600', 
      style: 'normal',
    },
    {
      path: "../assets/fonts/Barlow-Thin.ttf", 
      weight: '100', 
      style: 'normal',
    },
  ]
})

export const metadata: Metadata = {
  title: 'Anibal AG',
  description: 'Anibal Atahualpa portfolio test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  )
}
