import { Roboto_Flex } from 'next/font/google'
import './globals.css'

const roboto = Roboto_Flex({ subsets: ['latin'] })

export const metadata = {
  title: 'Chatbot',
  description: 'Generated by DataStax',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}