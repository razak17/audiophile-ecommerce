import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
