import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";

export default function CommonLayout({ children }) {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="min-h-screen ">{children}</div>
      <Footer />
    </div>
  );
}
