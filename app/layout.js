import './globals.css';
import { site } from '../site.config';

export const metadata = {
  title: `${site.name}, ${site.place} | Concept Preview`,
  description: `Concept preview of a direct-enquiry website for ${site.name}, ${site.place}.`,
  robots: { index: false, follow: false }, // keep the proposal out of search results
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
