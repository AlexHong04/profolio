import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'boxicons/css/boxicons.min.css'
import 'devicon/devicon.min.css'
import './assets/css/style.css'

import Favicon from './assets/imgs/favicon.ico'
import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
import ImportJS from './components/importJS'

export const metadata = {
  title: 'Tan Kok Hong',
  description: 'Kok Hong\'s Portfolio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={Favicon.src} />
      </head>
      <body>
        {/* ======= Mobile nav toggle button =======  */}
        <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>

        {/* ======= Header ======= */}
        <Header />

        {/* ======= Hero Section ======= */}
        <Hero />

        {children}

        {/* ======= Footer ======= */}
        <Footer />

        {/* <div id="preloader"></div> */}
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        {/* Vendor JS Files */}
        <ImportJS />
      </body>
    </html>
  )
}
