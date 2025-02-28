import '@/app/ui/global.css'
import {merriweather} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ `${merriweather.className} antialiased`}>{children}</body>
    </html>
  );
}
