"use client";

import { useState, useEffect } from "react";

export default function PreloaderClient({ mediaFiles, onAllLoaded }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!mediaFiles.length) return;

    let loaded = 0;
    const updateProgress = () => {
      loaded += 1;
      setProgress(Math.round((loaded / mediaFiles.length) * 100));

      if (loaded === mediaFiles.length) {
        onAllLoaded();
      }
    };

    mediaFiles.forEach((url) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress;
      img.src = url;
    });
  }, [mediaFiles, onAllLoaded]);

  return (
    <div>
      {progress < 100 && (
        <>
          <div>{progress}%</div>
        </>
      )}
    </div>
  );
}
