import "./globals.css";

export const metadata = {
  title: "Random Movie Generator",
  description: "Don't know which movie to watch next?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
