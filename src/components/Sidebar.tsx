import { Rss, Globe } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-[270px] space-y-5">
      <div className="sep20"></div>
      
      {/* Welcome Box */}
      <div className="box">
        <div className="cell">
          <strong>V2EX = way to explore</strong>
          <div className="sep5"></div>
          <span className="fade">V2EX 是一个关于分享和探索的地方</span>
        </div>
        <div className="inner">
          <div className="sep5"></div>
          <div className="text-center">
            <a href="/signup" className="super normal button">现在注册</a>
            <div className="sep5"></div>
            <div className="sep10"></div>
            已注册用户请 &nbsp;<a href="/signin">登录</a>
          </div>
        </div>
      </div>

      <div className="sep20"></div>

      {/* Hot Topics */}
      <div className="box">
        <div className="cell">
          <span className="fade">今日热议主题</span>
        </div>
        
        {hotTopics.map((topic, index) => (
          <div key={index} className="cell">
            <div className="flex items-center space-x-2">
              <img 
                src={topic.avatar} 
                alt={topic.username}
                className="w-6 h-6 avatar"
              />
              <div className="flex-1">
                <a href={topic.link} className="item_hot_topic_title">
                  {topic.title}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sep20"></div>

      {/* Hot Nodes */}
      <div className="box">
        <div className="cell">
          <span className="fade">最热节点</span>
        </div>
        <div className="cell">
          {hotNodes.map((node, index) => (
            <a key={index} href={`/go/${node.slug}`} className="item_node">
              {node.name}
            </a>
          ))}
        </div>
        <div className="inner">
          <Rss className="inline w-4 h-4 mr-1" />
          <a href="/index.xml" target="_blank">RSS</a>
        </div>
      </div>

      <div className="sep20"></div>

      {/* Site of the Day */}
      <div className="box">
        <div className="cell flex-one-row" style={{ gap: '10px' }}>
          <Globe className="w-[18px] h-[18px]" />
          <strong style={{ fontFamily: "'Press Start 2P'", fontSize: '10px', fontWeight: 'normal' }}>
            <a href="/xna">VXNA</a>
          </strong>
          <span className="chevron">›</span>
          <span style={{ flex: 1 }}>Site of the Day</span>
        </div>
        <div className="cell flex-one-row" style={{ gap: '5px' }}>
          <div style={{ flex: 1 }} className="f16">
            <a href="https://hiwannz.com/" target="_blank">见字如面</a>
          </div>
          <span className="f12 fade">17 篇文章</span>
          <a href="https://hiwannz.com/feed" target="_blank">
            <Rss className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="sep20"></div>

      {/* Recent Nodes */}
      <div className="box">
        <div className="cell">
          <span className="fade">最近新增节点</span>
        </div>
        <div className="inner">
          {recentNodes.map((node, index) => (
            <a key={index} href={`/go/${node.slug}`} className="item_node">
              {node.name}
            </a>
          ))}
        </div>
      </div>

      <div className="sep20"></div>

      {/* Community Stats */}
      <div className="box">
        <div className="cell">
          <span className="fade">社区运行状况</span>
        </div>
        <div className="cell">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="w-[60px] text-right">
                  <span className="gray">注册会员</span>
                </td>
                <td className="text-left">
                  <strong>750,904</strong>
                </td>
              </tr>
              <tr>
                <td className="w-[60px] text-right">
                  <span className="gray">主题</span>
                </td>
                <td className="text-left">
                  <strong>1,135,788</strong>
                </td>
              </tr>
              <tr>
                <td className="w-[60px] text-right">
                  <span className="gray">回复</span>
                </td>
                <td className="text-left">
                  <strong>16,325,429</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="sep20"></div>
    </div>
  );
};

// Mock data
const hotTopics = [
  {
    username: "GeekGuru",
    avatar: "https://cdn.v2ex.com/avatar/32ad/39d1/647743_normal.png?m=1719759557",
    title: "今年 618 消费欲望不强，只买了一些生活必需品",
    link: "/t/1135708"
  },
  {
    username: "stephenxiaxy", 
    avatar: "https://cdn.v2ex.com/avatar/5fb2/23d6/338639_normal.png?m=1748750269",
    title: "仲裁的话， 2n 概率大吗",
    link: "/t/1135704"
  },
  {
    username: "ggp1ot2",
    avatar: "https://cdn.v2ex.com/avatar/da2c/7a71/382312_normal.png?m=1698654772", 
    title: "618 计划购入一个投影仪，坚果 N3 咋样",
    link: "/t/1135731"
  },
  {
    username: "stuliren",
    avatar: "https://cdn.v2ex.com/gravatar/39e185a524ebf37445b268f4af21a585?s=24&d=retro",
    title: "低 glibc 版本服务器，有没有办法用 AI？",
    link: "/t/1135699"
  },
  {
    username: "yanfulives",
    avatar: "https://cdn.v2ex.com/gravatar/0b8527caaec717f5b96ca1c4804fc71e?s=24&d=retro",
    title: "今年的 618 有什么服务器优惠吗？ 199 三年 5M 那种，或者 299 三年 5M 网速",
    link: "/t/1135682"
  }
];

const hotNodes = [
  { name: "问与答", slug: "qna" },
  { name: "程序员", slug: "programmer" },
  { name: "酷工作", slug: "jobs" },
  { name: "分享发现", slug: "share" },
  { name: "Apple", slug: "apple" },
  { name: "分享创造", slug: "create" },
  { name: "macOS", slug: "macos" },
  { name: "职场话题", slug: "career" },
  { name: "宽带症候群", slug: "bb" },
  { name: "Python", slug: "python" },
  { name: "Android", slug: "android" },
  { name: "iPhone", slug: "iphone" },
  { name: "全球工单系统", slug: "gts" },
  { name: "MacBook Pro", slug: "mbp" },
  { name: "推广", slug: "promotions" }
];

const recentNodes = [
  { name: "钓鱼", slug: "fishing" },
  { name: "VXNA", slug: "vxna" },
  { name: "ENS", slug: "ens" },
  { name: "原神", slug: "genshin" },
  { name: "Mac OS 9", slug: "macos9" },
  { name: "Diablo IV", slug: "diablo4" },
  { name: "nostr", slug: "nostr" },
  { name: "Freeform", slug: "freeform" },
  { name: "OpenAI", slug: "openai" },
  { name: "掌机", slug: "handheld" },
  { name: "YubiKey", slug: "yubikey" },
  { name: "Logseq", slug: "logseq" },
  { name: "Planet", slug: "planet" },
  { name: "魂系游戏", slug: "soulslike" },
  { name: "Mac Studio", slug: "macstudio" },
  { name: "Zoom", slug: "zoom" },
  { name: "iMovie", slug: "imovie" },
  { name: "Xbox Series X/S", slug: "xboxseries" },
  { name: "NixOS", slug: "nixos" }
];

export default Sidebar;