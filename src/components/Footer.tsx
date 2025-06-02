import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-white border-t border-[#e2e2e2] mt-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="py-6">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <div>
                <strong>
                  <a href="/about" className="text-[#333333]">关于</a> &nbsp; 
                  <span className="text-[#999999]">·</span> &nbsp; 
                  <a href="/help" className="text-[#333333]">帮助文档</a> &nbsp; 
                  <span className="text-[#999999]">·</span> &nbsp; 
                  <a href="https://blog.v2ex.com/" className="text-[#333333]" target="_blank">博客</a> &nbsp; 
                  <span className="text-[#999999]">·</span> &nbsp; 
                  <a href="/help/api" className="text-[#333333]">API</a> &nbsp; 
                  <span className="text-[#999999]">·</span> &nbsp; 
                  <a href="/faq" className="text-[#333333]">FAQ</a> &nbsp; 
                  <span className="text-[#999999]">·</span> &nbsp; 
                  <a href="/tools" className="text-[#333333]">实用小工具</a> &nbsp; 
                  <span className="text-[#999999]">·</span> &nbsp; 
                  2219 人在线
                </strong> &nbsp; 
                <span className="fade">最高记录 6679</span> &nbsp; 
                <span className="text-[#999999]">·</span> &nbsp; 
                <a href="/select/language" className="text-xs">
                  <Globe className="inline w-4 h-4 mr-1" />
                  Select Language
                </a>
              </div>
              
              <div className="space-y-2">
                <div>创意工作者们的社区</div>
                <div className="text-sm">World is powered by solitude</div>
              </div>
              
              <div className="text-xs text-[#999999] space-y-1">
                <div>
                  VERSION: 3.9.8.5 · 11ms · 
                  <a href="/worldclock#utc"> UTC 01:06</a> · 
                  <a href="/worldclock#pvg"> PVG 09:06</a> · 
                  <a href="/worldclock#lax"> LAX 18:06</a> · 
                  <a href="/worldclock#jfk"> JFK 21:06</a>
                </div>
                <div>
                  Developed with <a href="https://cl.v2ex.pro/" target="_blank">CodeLauncher</a>
                </div>
                <div>♥ Do have faith in what you're doing.</div>
              </div>
            </div>
            
            <div>
              <a href="https://www.digitalocean.com/?refcode=1b51f1a7651d" target="_blank">
                <div className="w-[120px] h-[60px] bg-[url('https://v2ex.com/static/img/digitalocean.png')] bg-no-repeat bg-contain"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;