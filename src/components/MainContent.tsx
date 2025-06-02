import { Rss } from "lucide-react";

const MainContent = () => {
  return (
    <div className="flex-1 space-y-5">
      <div className="sep20"></div>
      
      {/* Tabs */}
      <div className="box">
        <div className="inner">
          <a href="/?tab=tech" className="tab_current">技术</a>
          <a href="/?tab=creative" className="tab">创意</a>
          <a href="/?tab=play" className="tab">好玩</a>
          <a href="/?tab=apple" className="tab">Apple</a>
          <a href="/?tab=jobs" className="tab">酷工作</a>
          <a href="/?tab=deals" className="tab">交易</a>
          <a href="/?tab=city" className="tab">城市</a>
          <a href="/?tab=qna" className="tab">问与答</a>
          <a href="/?tab=hot" className="tab">最热</a>
          <a href="/?tab=all" className="tab">全部</a>
          <a href="/?tab=r2" className="tab">R2</a>
          <a href="/xna" className="tab">VXNA</a>
          &nbsp;
          <a href="/planet">
            <img 
              src="https://v2ex.com/static/img/planet/planet128.png?v=129f466d599bcd3bcb3d7a191f11a2be" 
              className="inline h-5"
              alt="Planet"
            />
          </a>
        </div>
        
        <div className="cell">
          <a href="/go/programmer">程序员</a> &nbsp; &nbsp; 
          <a href="/go/python">Python</a> &nbsp; &nbsp; 
          <a href="/go/idev">iDev</a> &nbsp; &nbsp; 
          <a href="/go/android">Android</a> &nbsp; &nbsp; 
          <a href="/go/linux">Linux</a> &nbsp; &nbsp; 
          <a href="/go/nodejs">node.js</a> &nbsp; &nbsp; 
          <a href="/go/cloud">云计算</a> &nbsp; &nbsp; 
          <a href="/go/bb">宽带症候群</a>
        </div>
        
        {/* Topic Items */}
        {topics.map((topic, index) => (
          <div key={index} className="cell item">
            <div className="flex items-start space-x-3">
              <img 
                src={topic.avatar} 
                alt={topic.username}
                className="w-12 h-12 avatar mt-1"
              />
              
              <div className="flex-1 min-w-0">
                <div className="item_title">
                  <a href={topic.link} className="topic-link">
                    {topic.title}
                  </a>
                </div>
                <div className="sep5"></div>
                <div className="topic_info">
                  {topic.votes && (
                    <div className="votes">
                      <span>↑</span> &nbsp;{topic.votes} &nbsp;&nbsp;
                    </div>
                  )}
                  <a className="node" href={`/go/${topic.node.slug}`}>
                    {topic.node.name}
                  </a>
                  &nbsp;•&nbsp;
                  <strong>
                    <a href={`/member/${topic.username}`}>{topic.username}</a>
                  </strong>
                  &nbsp;•&nbsp;
                  <span title={topic.createdAt}>{topic.timeAgo}</span>
                  {topic.lastReplyUser && (
                    <>
                      &nbsp;•&nbsp; 最后回复来自 
                      <strong>
                        <a href={`/member/${topic.lastReplyUser}`}>{topic.lastReplyUser}</a>
                      </strong>
                    </>
                  )}
                </div>
              </div>
              
              {topic.replyCount > 0 && (
                <div className="flex-shrink-0">
                  <a href={`${topic.link}#reply${topic.replyCount}`} className="count_livid">
                    {topic.replyCount}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
        
        <div className="inner">
          <div className="fr">
            <Rss className="inline w-4 h-4 mr-1" />
            <a href="/feed/tab/tech.xml" target="_blank">通过 Atom Feed 订阅</a>
          </div>
          <span className="chevron">»</span> &nbsp;
          <a href="/recent">更多新主题</a>
        </div>
      </div>

      <div className="sep20"></div>

      {/* Node Navigation */}
      <div className="box">
        <div className="cell">
          <div className="fr">
            <a href="/planes">浏览全部节点</a>
          </div>
          <span className="fade">
            <strong>V2EX</strong> / 节点导航
          </span>
        </div>
        
        {nodeCategories.map((category, index) => (
          <div key={index} className="cell">
            <div className="flex">
              <div className="w-20 text-right flex-shrink-0">
                <span className="fade">{category.name}</span>
              </div>
              <div className="flex-1 ml-2.5 leading-loose">
                {category.nodes.map((node, nodeIndex) => (
                  <span key={nodeIndex}>
                    <a href={`/go/${node.slug}`} className="text-sm">
                      {node.name}
                    </a>
                    {nodeIndex < category.nodes.length - 1 && <>&nbsp; &nbsp; </>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Mock data
const topics = [
  {
    username: "qq9751",
    avatar: "https://cdn.v2ex.com/gravatar/3b01825fefd2b4fb7d0e26e5c92dff1f?s=48&d=retro",
    title: "闲鱼的开发程序员不是弱智",
    link: "/t/1135775",
    node: { name: "Android", slug: "android" },
    timeAgo: "7 分钟前",
    replyCount: 7,
    lastReplyUser: "kevinxzhao",
    createdAt: "2025-06-02 08:58:38 +08:00"
  },
  {
    username: "Flynn2018", 
    avatar: "https://cdn.v2ex.com/avatar/5ffd/8a93/284636_large.png?m=1747887567",
    title: "infuse 最新版无法连上飞牛影视",
    link: "/t/1135786",
    node: { name: "NAS", slug: "nas" },
    timeAgo: "31 分钟前",
    replyCount: 2,
    lastReplyUser: "M48A1",
    createdAt: "2025-06-02 08:34:25 +08:00"
  },
  {
    username: "tangknox1",
    avatar: "https://cdn.v2ex.com/gravatar/a1a7952e770bca1b3c559bfdba68ac5b?s=48&d=retro",
    title: "有用 LiveKit 做过视频语音会议系统的没？",
    link: "/t/1135779", 
    node: { name: "Go 编程语言", slug: "go" },
    timeAgo: "4 小时 59 分钟前",
    replyCount: 0,
    createdAt: "2025-06-02 04:06:07 +08:00"
  },
  {
    username: "stuliren",
    avatar: "https://cdn.v2ex.com/gravatar/39e185a524ebf37445b268f4af21a585?s=48&d=retro",
    title: "低 glibc 版本服务器，有没有办法用 AI？",
    link: "/t/1135699",
    node: { name: "程序员", slug: "programmer" },
    timeAgo: "37 分钟前",
    replyCount: 28,
    lastReplyUser: "linhua",
    createdAt: "2025-06-02 08:29:01 +08:00"
  },
  {
    username: "xueyuehua",
    avatar: "https://cdn.v2ex.com/avatar/7a7e/fad5/370211_large.png?m=1733322796",
    title: "2025 年了，传统分布式架构还会是主流吗",
    link: "/t/1135777",
    node: { name: "程序员", slug: "programmer" },
    timeAgo: "3 小时 39 分钟前", 
    replyCount: 2,
    lastReplyUser: "xuanbg",
    createdAt: "2025-06-02 05:26:55 +08:00"
  }
];

const nodeCategories = [
  {
    name: "分享与探索",
    nodes: [
      { name: "问与答", slug: "qna" },
      { name: "分享发现", slug: "share" },
      { name: "分享创造", slug: "create" },
      { name: "奇思妙想", slug: "ideas" },
      { name: "分享邀请码", slug: "in" },
      { name: "自言自语", slug: "autistic" },
      { name: "设计", slug: "design" },
      { name: "Blog", slug: "blog" }
    ]
  },
  {
    name: "V2EX",
    nodes: [
      { name: "V2EX", slug: "v2ex" },
      { name: "反馈", slug: "feedback" },
      { name: "使用指南", slug: "guide" }
    ]
  },
  {
    name: "Apple",
    nodes: [
      { name: "Apple", slug: "apple" },
      { name: "macOS", slug: "macos" },
      { name: "iPhone", slug: "iphone" },
      { name: "MacBook Pro", slug: "mbp" },
      { name: "iOS", slug: "ios" },
      { name: "iPad", slug: "ipad" },
      { name: " WATCH", slug: "watch" },
      { name: "MacBook", slug: "macbook" },
      { name: "配件", slug: "accessory" },
      { name: "MacBook Air", slug: "mba" },
      { name: "Mac mini", slug: "macmini" },
      { name: "iMac", slug: "imac" },
      { name: "Xcode", slug: "xcode" },
      { name: "AirPods", slug: "airpods" },
      { name: "Mac Pro", slug: "macpro" },
      { name: "WWDC", slug: "wwdc" },
      { name: "iPod", slug: "ipod" },
      { name: "Mac Studio", slug: "macstudio" },
      { name: "HomeKit", slug: "homekit" },
      { name: "iWork", slug: "iwork" },
      { name: "MobileMe", slug: "mobileme" },
      { name: "iLife", slug: "ilife" },
      { name: "GarageBand", slug: "garageband" },
      { name: "Mac OS 9", slug: "macos9" },
      { name: "Freeform", slug: "freeform" },
      { name: "Mac 游戏", slug: "macgaming" },
      { name: "iMovie", slug: "imovie" }
    ]
  },
  {
    name: "城市",
    nodes: [
      { name: "北京", slug: "beijing" },
      { name: "上海", slug: "shanghai" },
      { name: "深圳", slug: "shenzhen" },
      { name: "杭州", slug: "hangzhou" },
      { name: "成都", slug: "chengdu" },
      { name: "广州", slug: "guangzhou" },
      { name: "武汉", slug: "wuhan" },
      { name: "香港", slug: "hongkong" },
      { name: "南京", slug: "nanjing" },
      { name: "西安", slug: "xian" },
      { name: "长沙", slug: "changsha" },
      { name: "重庆", slug: "chongqing" },
      { name: "苏州", slug: "suzhou" },
      { name: "昆明", slug: "kunming" },
      { name: "天津", slug: "tianjin" },
      { name: "厦门", slug: "xiamen" },
      { name: "青岛", slug: "qingdao" },
      { name: "San Francisco", slug: "sanfrancisco" },
      { name: "New York", slug: "nyc" },
      { name: "东京", slug: "tokyo" },
      { name: "Singapore", slug: "singapore" },
      { name: "贵阳", slug: "guiyang" },
      { name: "Los Angeles", slug: "la" }
    ]
  }
];

export default MainContent;