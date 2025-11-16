import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "14U",
  description: "The platform for direct access to investors and breakthrough companies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-brand-bg text-brand-text">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}