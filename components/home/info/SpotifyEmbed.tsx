"use client";

import { useState } from "react";
import "./spotify-embed.css";

const SPOTIFY_ALBUM_SRC =
  "https://open.spotify.com/embed/album/0PnpiJiogeVVMCaZ9IOU8k?utm_source=generator";

export default function SpotifyEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="spotify-embed">
      {!loaded && (
        <div className="spotify-embed-skeleton" aria-hidden="true" />
      )}
      <iframe
        title="Quiet Time album"
        src={SPOTIFY_ALBUM_SRC}
        width="100%"
        height="352"
        className={
          loaded ? "spotify-embed-frame spotify-embed-frame--loaded" : "spotify-embed-frame"
        }
        style={{ border: 0, borderRadius: "12px" }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
