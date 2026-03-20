"use client";

import React, { useState } from "react";
import { type Locale } from "@/lib/site";

interface VideoSectionProps {
  locale: Locale;
}

export function VideoSection({ locale }: VideoSectionProps) {
  // Default to Bilibili for Chinese, YouTube for others
  const [source, setSource] = useState<"youtube" | "bilibili">(
    locale === "zh" ? "bilibili" : "youtube"
  );

  const sources = {
    youtube: "https://www.youtube.com/embed/-Zk7Y-8mf6Q?si=D1qYIk5dFgUMJt7v",
    bilibili: "//player.bilibili.com/player.html?bvid=BV1yVwXzGEbL&page=1&high_quality=1&danmaku=0&autoplay=0",
  };

  return (
    <section className="video-section">
      <div className="video-switcher">
        <button 
          className={`switcher-btn ${source === "youtube" ? "active" : ""}`}
          onClick={() => setSource("youtube")}
        >
          YouTube
        </button>
        <button 
          className={`switcher-btn ${source === "bilibili" ? "active" : ""}`}
          onClick={() => setSource("bilibili")}
        >
          Bilibili
        </button>
      </div>
      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          src={sources[source]}
          title="oLauncher Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="video-iframe"
        ></iframe>
      </div>
    </section>
  );
}
