import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex gap-5">
          <div className="flex-1">
            <MainContent />
          </div>
          <Sidebar />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;