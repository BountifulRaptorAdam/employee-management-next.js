import './globals.css'

export const metadata = {
  title: 'Employee Management',
  description: 'Created By Ethan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
