const en = {
  locale: "en",
  seo: {
    title: "oLauncher for Mac | Bring back a familiar Launchpad experience on macOS 26",
    description:
      "A lightweight app launcher that restores the visual browsing workflow many Mac users still want on macOS 26."
  },
  hero: {
    title: "Bring back the familiar Launchpad experience on macOS 26",
    subtitle:
      "oLauncher gives visual app browsing, fast recall, and native-feeling interactions back to users who miss the old Launchpad workflow.",
    primaryCta: "Download Free",
    secondaryCta: "Unlock PRO",
    meta: "Runs on macOS 26 and later"
  },
  featureHeading: "Built for people who still launch apps visually",
  features: [
    {
      title: "Gesture-friendly launch flow",
      description: "Wake the launcher with a trackpad gesture and keep your spatial memory intact."
    },
    {
      title: "Shortcut and hot corner triggers",
      description: "Open your launcher from a keyboard shortcut or hot corner without breaking focus."
    },
    {
      title: "Custom grid layout",
      description: "Tune density and spacing so the launcher feels like your own workspace, not Apple's default."
    },
    {
      title: "Hide what you never launch",
      description: "Keep utility clutter out of sight and make the grid stay readable."
    },
    {
      title: "Rename and organize apps",
      description: "Improve scanning speed with labels that match how you actually remember tools."
    },
    {
      title: "Native and lightweight",
      description: "Built in Swift for low overhead and a launch flow that feels at home on macOS."
    }
  ],
  pricing: {
    heading: "Two lifetime plans",
    subtitle: "Buy once, unlock every PRO feature, and keep your setup simple.",
    tiers: [
      {
        name: "Single Device Lifetime",
        price: "$5.99",
        originalPrice: "$7.99",
        description: "Best for one daily Mac.",
        priceId: "single",
        features: ["1 Mac license", "Lifetime updates for the purchased major line", "All PRO features"]
      },
      {
        name: "Two Devices Lifetime",
        price: "$9.99",
        originalPrice: "$13.99",
        description: "For people who switch between two Macs.",
        priceId: "double",
        features: ["2 Mac licenses", "Lifetime updates for the purchased major line", "All PRO features"]
      }
    ]
  },
  faqHeading: "FAQ",
  faqs: [
    {
      question: "How do I receive my license key?",
      answer:
        "After checkout, Paddle sends your receipt and the license email. The receipt may arrive first, so give the license email a few minutes."
    },
    {
      question: "What if I do not receive the license email?",
      answer:
        "Check spam first. If it still does not arrive, contact support with the purchase email and receipt reference."
    },
    {
      question: "Do I need to buy again when I change Macs?",
      answer:
        "No. Remove the old device from activation and reuse your available seat on the new Mac."
    },
    {
      question: "What macOS versions are supported?",
      answer: "oLauncher currently targets macOS 26 and later."
    },
    {
      question: "Can I request a refund?",
      answer:
        "Yes. Refunds for purchases made through Paddle follow Paddle's refund policy: 14 days for the European Union, EEA, Switzerland, the United Kingdom, Turkey, and Israel; 7 days for South Korea, Brazil, China, and Canada; and 5 days for Singapore."
    },
    {
      question: "How do I contact support?",
      answer: "Send mail to support@olauncher.app and include your app version plus purchase email if relevant."
    }
  ],
  install: {
    heading: "Install and activate",
    steps: [
      "Download the latest DMG.",
      "Drag oLauncher into Applications.",
      "Open the app and finish the initial setup.",
      "Enter your license key to unlock PRO."
    ]
  },
  footer: {
    releaseLabel: "Last updated",
    releaseHref: "/en/release",
    releaseText: "Release notes",
    privacyText: "Privacy Policy",
    termsText: "Terms of Service",
    refundText: "Refund Policy"
  },
  legal: {
    privacyTitle: "Privacy Policy",
    privacyBody:
      "oLauncher Site collects only the data required to run the website, process payments through Paddle, and answer support requests.",
    termsTitle: "Terms of Service",
    termsBody:
      "These Terms apply to oLauncher, the oLauncher website, and the related products and services provided by oLauncher. Purchasing a license grants the right to activate oLauncher on the number of Macs included in the purchased tier.",
    refundTitle: "Refund Policy",
    refundBody:
      "Refunds for purchases made through Paddle are handled in accordance with Paddle Buyer Terms and the Paddle Refund Policy. Consumers in the European Union, EEA, Switzerland, the United Kingdom, Turkey, and Israel may request a refund within 14 days of the transaction date. Consumers in South Korea, Brazil, China, and Canada may request a refund within 7 days of the transaction date. Consumers in Singapore may request a refund within 5 days of the transaction date. Refund requests can be submitted through the Paddle receipt links or at paddle.net."
  },
  release: {
    title: "Release Notes",
    entries: [
      {
        version: "1.0.2",
        date: "2026-03-19",
        notes: [
          "Refined grid spacing and hover feedback for faster browsing.",
          "Improved activation copy inside the app to match the website flow.",
          "Hardened notarized DMG distribution for direct downloads."
        ]
      }
    ]
  }
} as const;

export default en;
