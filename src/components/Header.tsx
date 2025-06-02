import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <div className="bg-white border-b border-[#e2e2e2]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <a href="/" className="flex items-center">
            <div id="Logo"></div>
          </a>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="搜索"
                className="w-full pl-10 pr-4 py-2 border border-[#e2e2e2] rounded-md focus:outline-none focus:border-[#778087]"
                maxLength={128}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#999999] w-4 h-4" />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Tools section - empty for now */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;