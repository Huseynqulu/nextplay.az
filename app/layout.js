import "./globals.css";

export const metadata = {
  title: "NextPlay — Oyun dünyası bir klik uzaqda",
  description: "Azərbaycan üçün premium rəqəmsal oyun mağazası",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  );
}
