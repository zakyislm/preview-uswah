import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "LDK USWAH UPNVJ | Company Profile",
  description: "Lembaga Dakwah Kampus Uswah UPN Veteran Jakarta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="light scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Berkshire+Swash&family=Macondo&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;700;800&family=Gasoek+One&family=Nunito:wght@400;700;800;900&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
