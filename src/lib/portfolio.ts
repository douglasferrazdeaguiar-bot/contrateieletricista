export type Work = {
  title: string;
  caption: string;
  cover: string;
  video?: string;
};

const files = import.meta.glob('/public/portfolio/*', { eager: true, query: '?url', import: 'default' });
export const hasPortfolioFile = (name: string) => `/public/portfolio/${name}` in files;
export const mediaUrl = (name: string) => `/portfolio/${name}`;
export const smallVariant = (name: string) => name.replace(/\.webp$/, '-640.webp');
export const portfolioSrcSet = (name: string) => hasPortfolioFile(smallVariant(name))
  ? `${mediaUrl(smallVariant(name))} 640w, ${mediaUrl(name)} 1280w` : undefined;

export const works: Work[] = [
  { title: 'YouCom — Brasília/DF', cover: 'youcom-brasilia-iluminacao.webp', caption: 'Iluminação de loja com spots e luminárias decorativas.' },
  { title: 'Drogasil — Vera Cruz, Goiás', cover: 'drogasil-vera-cruz-fachada-poster.webp', video: 'drogasil-vera-cruz-loja-finalizada.mp4', caption: 'Iluminação de fachada, área externa e interior — loja finalizada.' },
  { title: 'Mania de Churrasco — Brasília/DF', cover: 'mania-de-churrasco-brasilia-iluminacao-poster.webp', video: 'mania-de-churrasco-brasilia-iluminacao.mp4', caption: 'Iluminação interna de restaurante com luminárias lineares e spots.' },
  { title: 'Quadro comercial — São Paulo', cover: 'comercial-sao-paulo-quadro-concluido-poster.webp', video: 'comercial-sao-paulo-quadro-concluido.mp4', caption: 'Montagem concluída de quadro elétrico com circuitos identificados.' },
  { title: 'Quadro comercial — Brasília/DF', cover: 'comercial-brasilia-quadro-concluido-poster.webp', video: 'comercial-brasilia-quadro-concluido.mp4', caption: 'Quadro elétrico com comandos e componentes internos — montagem concluída.' },
  { title: 'Drogasil — Brasília/DF', cover: 'drogasil-brasilia-quadro-estabilizado.webp', caption: 'Quadro elétrico estabilizado.' },
  { title: 'Infraestrutura comercial — Goiânia/GO', cover: 'comercial-goiania-infraestrutura.webp', caption: 'Infraestrutura suspensa e passagem de cabos — execução.' },
  { title: 'Quadro em montagem — Goiânia/GO', cover: 'comercial-goiania-quadro-em-montagem-poster.webp', video: 'comercial-goiania-quadro-em-montagem.mp4', caption: 'Montagem de quadro e cabeamento em andamento.' },
  { title: 'YouCom — Brasília/DF: detector', cover: 'youcom-brasilia-detector-instalado.webp', caption: 'Detector de incêndio instalado e identificado.' },
  { title: 'Mania de Churrasco — Brasília/DF: manutenção', cover: 'mania-de-churrasco-brasilia-quadro-manutencao.webp', caption: 'Manutenção preventiva de quadro elétrico — detalhes dos dispositivos de proteção e comando.' },
];

export const heroWorks = [works[0], works[1], works[2], works[4]].filter((work) => hasPortfolioFile(work.cover));
export const availableWorks = works.filter((work) => hasPortfolioFile(work.cover));
export const evolution: Work[] = [
  { title: 'Drogasil — Jardim Nova Esperança, Goiânia/GO: execução', cover: 'drogasil-jardim-nova-esperanca-execucao.webp', caption: 'Infraestrutura durante a execução' },
  { title: 'Drogasil — Jardim Nova Esperança, Goiânia/GO: resultado', cover: 'drogasil-jardim-nova-esperanca-iluminacao-poster.webp', video: 'drogasil-jardim-nova-esperanca-iluminacao.mp4', caption: 'Iluminação instalada — loja finalizada, conforme registro do responsável' },
];