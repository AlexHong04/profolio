import '../style/globals.css'

import Favicon from '../public/favicon.ico'
import Header from './layouts/header'
import Footer from './layouts/footer'

export const metadata = {
  title: 'Tan Kok Hong',
  description: 'Kok Hong\'s Portfolio'
}

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={Favicon.src} />
      </head>
      <body>
        {/* ======= Mobile nav toggle button =======  */}


        {/* ======= Header ======= */}
        <Header />


        {/* ======= Footer ======= */}
        <Footer />

      </body>
    </html>
  )
}
