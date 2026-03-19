const zh = {
  locale: "zh",
  seo: {
    title: "oLauncher for Mac | 在 macOS 26 上带回熟悉的 Launchpad 体验",
    description:
      "一个轻量的第三方应用启动台，让仍然依赖视觉浏览的 Mac 用户在 macOS 26 上找回熟悉的启动体验。"
  },
  hero: {
    title: "恢复 macOS 26 上熟悉的 Launchpad 风格体验",
    subtitle:
      "oLauncher 把很多人依然离不开的视觉化启动方式、空间记忆和原生交互感，重新带回 macOS 26。",
    primaryCta: "免费下载",
    secondaryCta: "解锁 PRO",
    meta: "支持 macOS 26 及更高版本"
  },
  featureHeading: "为仍然习惯视觉启动应用的人而做",
  features: [
    {
      title: "更自然的手势唤起",
      description: "通过触控板手势唤起启动台，让熟悉的空间记忆继续有效。"
    },
    {
      title: "快捷键与触发角",
      description: "支持快捷键和触发角，减少在不同启动方式之间切换的成本。"
    },
    {
      title: "可自定义网格布局",
      description: "根据自己的显示习惯调整密度与间距，不再被系统默认布局束缚。"
    },
    {
      title: "隐藏不需要的应用",
      description: "把不常用工具隐藏起来，让首页保持干净、可扫描。"
    },
    {
      title: "重命名与整理",
      description: "用更符合你记忆方式的名称和组织方式管理应用。"
    },
    {
      title: "原生、轻量、顺手",
      description: "基于 Swift 开发，尽量保持低开销和贴近系统的使用手感。"
    }
  ],
  pricing: {
    heading: "双档终身授权",
    subtitle: "买断一次，解锁全部 PRO 功能，根据你的设备数量选择即可。",
    tiers: [
      {
        name: "单设备终身版",
        price: "$5.99",
        originalPrice: "$7.99",
        description: "适合主力只有一台 Mac 的个人用户。",
        priceId: "single",
        features: ["1 台 Mac 授权", "购买主版本线内的终身更新", "全部 PRO 功能"]
      },
      {
        name: "双设备终身版",
        price: "$9.99",
        originalPrice: "$13.99",
        description: "适合同时使用两台 Mac 的用户。",
        priceId: "double",
        features: ["2 台 Mac 授权", "购买主版本线内的终身更新", "全部 PRO 功能"]
      }
    ]
  },
  faqHeading: "常见问题",
  faqs: [
    {
      question: "付款后如何收到许可证？",
      answer:
        "付款成功后，Paddle 会发送收据邮件和许可证邮件。通常收据会先到，许可证邮件可能稍晚几分钟。"
    },
    {
      question: "没有收到许可证邮件怎么办？",
      answer:
        "请先检查垃圾邮箱。如果仍未收到，请带上购买邮箱和收据编号联系支持。"
    },
    {
      question: "更换设备时需要重新购买吗？",
      answer:
        "不需要。你可以先移除旧设备的激活占用，再在新设备上继续使用原来的授权。"
    },
    {
      question: "支持哪些 macOS 版本？",
      answer: "当前版本面向 macOS 26 及以上系统。"
    },
    {
      question: "支持退款吗？",
      answer:
        "如需退款，请通过支持邮箱联系，并附上购买邮箱与收据信息，我们会按实际情况处理。"
    },
    {
      question: "如何联系支持？",
      answer: "请发送邮件至 support@olauncher.app，并附上 App 版本号和购买邮箱。"
    }
  ],
  install: {
    heading: "安装与激活",
    steps: [
      "下载最新 DMG 安装包。",
      "将 oLauncher 拖入 Applications。",
      "打开 App，完成首次基础设置。",
      "输入 License Key 解锁 PRO。"
    ]
  },
  footer: {
    releaseLabel: "最近更新",
    releaseHref: "/zh/release",
    releaseText: "更新日志",
    privacyText: "隐私政策",
    termsText: "使用条款"
  },
  legal: {
    privacyTitle: "隐私政策",
    privacyBody:
      "oLauncher Site 仅收集运行官网、通过 Paddle 处理支付，以及回复支持请求所需的必要信息。",
    termsTitle: "使用条款",
    termsBody:
      "购买授权后，你可以在所购买档位对应数量的 Mac 设备上激活并使用 oLauncher。"
  },
  release: {
    title: "更新日志",
    entries: [
      {
        version: "1.0.2",
        date: "2026-03-19",
        notes: [
          "优化网格间距与悬停反馈，提升视觉浏览效率。",
          "统一 App 内激活文案与官网购买链路说明。",
          "加强直接下载的公证 DMG 分发流程。"
        ]
      }
    ]
  }
} as const;

export default zh;
