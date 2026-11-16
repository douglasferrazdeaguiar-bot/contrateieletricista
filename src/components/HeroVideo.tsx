import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hasPortfolioFile, mediaUrl, works } from "@/lib/portfolio";

const videos = [works[2], works[1]].filter((work) => work.video && hasPortfolioFile(work.video));

const HeroVideo = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(() => matchMedia("(prefers-reduced-motion: reduce)").matches);
  const player = useRef<HTMLVideoElement>(null);
  const region = useRef<HTMLDivElement>(null);
  const work = videos[index];

  useEffect(() => {
    const video = player.current;
    const container = region.current;
    if (!video || !container) return;
    let visible = false;
    const sync = () => {
      if (paused || !visible || document.hidden || document.querySelector('[role="dialog"]')) video.pause();
      else void video.play().catch(() => setPaused(true));
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: 0.1 });
    const dialogs = new MutationObserver(sync);
    observer.observe(container);
    dialogs.observe(document.body, { childList: true, subtree: true });
    document.addEventListener("visibilitychange", sync);
    return () => { observer.disconnect(); dialogs.disconnect(); document.removeEventListener("visibilitychange", sync); video.pause(); };
  }, [index, paused]);

  if (!work?.video) return null;
  return <div ref={region} className="relative min-w-0 aspect-[4/3] bg-primary rounded-lg overflow-hidden" role="region" aria-label="Vídeos de obras atendidas">
    <video key={work.video} ref={player} src={mediaUrl(work.video)} poster={mediaUrl(work.cover)}
      autoPlay={!paused} muted playsInline preload="metadata" aria-label={work.title}
      onEnded={() => { if (videos.length > 1) setIndex((current) => (current + 1) % videos.length); else { const video = player.current; if (video) { video.currentTime = 0; void video.play().catch(() => setPaused(true)); } } }}
      className="h-full w-full object-cover" />
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-primary/90 px-4 py-2 text-primary-foreground">
      <span className="text-sm font-medium">{work.title}</span>
      <Button variant="ghost" size="icon" className="shrink-0" aria-label={paused ? "Reproduzir vídeos" : "Pausar vídeos"} onClick={() => setPaused((current) => !current)}>
        {paused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
      </Button>
    </div>
  </div>;
};

export default HeroVideo;