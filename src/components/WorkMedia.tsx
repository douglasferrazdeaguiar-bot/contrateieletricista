import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { hasPortfolioFile, mediaUrl, mediaDimensions, portfolioSrcSet, type Work } from '@/lib/portfolio';

export const WorkImage = ({ work, eager = false }: { work: Work; eager?: boolean }) => (
  <picture className="block h-full w-full">
  <img src={mediaUrl(work.cover)} srcSet={portfolioSrcSet(work.cover)}
    sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1023px) 45vw, 560px"
    width={mediaDimensions(work.cover)?.width} height={mediaDimensions(work.cover)?.height}
    alt={`${work.caption} ${work.title}`} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'low'} decoding="async"
    className="h-full w-full object-contain" />
  </picture>
);

export const WorkMedia = ({ items }: { items: Work[] }) => {
  const [selected, setSelected] = useState<{ work: Work; video: boolean } | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const player = useRef<HTMLVideoElement | null>(null);
  const close = () => { player.current?.pause(); setSelected(null); };
  return <>
    {items.map((work) => <article key={work.cover} className="min-w-0">
      <Button variant="ghost" aria-label={`Ampliar: ${work.title}`} aria-haspopup="dialog"
        className="block h-auto w-full p-0 bg-secondary hover:bg-secondary rounded-lg"
        onClick={(event) => { opener.current = event.currentTarget; setSelected({ work, video: false }); }}>
        <div className="aspect-[4/3] w-full"><WorkImage work={work} /></div>
      </Button>
      <h3 className="mt-4 font-semibold text-foreground">{work.title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{work.caption}</p>
      {work.video && hasPortfolioFile(work.video) && <Button variant="outline" className="mt-3" aria-label={`Assistir: ${work.title}`}
        onClick={(event) => { opener.current = event.currentTarget; setSelected({ work, video: true }); }}><Play className="mr-2 h-4 w-4" />Assistir</Button>}
    </article>)}
    <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) close(); }}>
      <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-3xl max-h-[90dvh] overflow-y-auto pt-12"
        aria-describedby={undefined} onCloseAutoFocus={(event) => { event.preventDefault(); opener.current?.focus({ preventScroll: true }); }}>
        <DialogTitle>{selected?.work.title}</DialogTitle>
        {selected && (selected.video && selected.work.video ? <video ref={player} src={mediaUrl(selected.work.video)}
          poster={mediaUrl(selected.work.cover)} controls playsInline preload="none" aria-label={selected.work.title}
          className="mx-auto max-h-[65dvh] w-full max-w-sm object-contain" />
          : <div className="h-[60dvh]"><WorkImage work={selected.work} /></div>)}
        <p className="text-sm text-muted-foreground">{selected?.work.caption}</p>
      </DialogContent>
    </Dialog>
  </>;
};