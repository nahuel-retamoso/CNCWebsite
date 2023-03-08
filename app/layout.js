import './globals.css'

export const metadata = {
  title: 'Servicios CNC',
  description: 'Empresa dedicada a brindar soluciones de CNC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
