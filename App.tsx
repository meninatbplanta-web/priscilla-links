import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import LinkCard from './components/LinkCard';
import SocialFooter from './components/SocialFooter';
import { LinkItemProps } from './types';

const App: React.FC = () => {

  const links: LinkItemProps[] = [
    {
      id: 'minicurso-gratuito',
      title: 'Minicurso Terapeuta Analista Corporal',
      image: 'https://priscilla-moreira.com/imagens/links/index-minicurso.png',
      description: 'Aprenda a ler os sinais ocultos do corpo para identificar mentiras, dores emocionais e a raiz das doenças.',
      details: [
        'Online e Gratuito',
        'Com Certificado',
        'De 02 a 08 de Fevereiro'
      ],
      url: '/captura/',
      isHighlight: true,
      tag: 'GRATUITO',
      buttonText: 'Inscrever-se Agora'
    },
    {
      id: 'manual-400-sinais',
      title: 'Manual 400 Sinais do Corpo',
      image: 'https://priscilla-moreira.com/imagens/links/index-400-sinais.webp',
      description: 'Dicionário visual completo para ler gestos e microexpressões.',
      details: [
        'Acesso Imediato',
        'Método 3 Cs',
        'Detecção de Mentiras'
      ],
      url: '/400-sinais/',
      isHighlight: true,
      tag: 'NOVO',
      buttonText: 'Conhecer o Manual'
    },
    {
      id: 'grupo-terapeutico',
      title: 'Grupo Terapêutico para Terapeutas',
      image: 'https://priscilla-moreira.com/imagens/links/index-grupo-terapeutico.webp',
      description: 'Um espaço de escuta, troca e aprofundamento emocional para quem cuida.',
      details: [
        'Encontros Semanais (Sextas, 13h-15h)',
        'Duração de 3 meses (12 sessões)',
        'Ambiente seguro para desbloquear padrões',
        'Início Imediato'
      ],

      url: '/grupo-terapeutico/',
      isHighlight: true,
      tag: 'NOVIDADE',
      buttonText: 'Garantir Vaga no Grupo'
    },
    {
      id: 'analise-individual',
      title: 'Análise Corporal Individual (Gravada)',
      image: 'https://priscilla-moreira.com/imagens/links/index-analise-individual.webp',
      description: 'Envie sua foto e receba uma análise completa em áudio feita pela perita Priscilla Moreira.',
      details: [
        'Análise Facial e Corporal',
        'Devolutiva em Áudio',
        'Sigilo Absoluto'
      ],

      url: '/analise-individual/',
      isHighlight: true,
      tag: 'OFERTA',
      buttonText: 'Quero Minha Análise'
    },
    {
      id: 'formacao-analise',
      title: 'Formação em Análise Corporal',
      image: 'https://priscilla-moreira.com/imagens/links/index-formacao-analista.webp',
      description: 'Decifre qualquer pessoa apenas olhando para o formato do corpo dela.',
      details: [
        'Metodologia única e acolhedora',
        'Certificação Profissional',
        'Domine os traços de caráter'
      ],
      url: '/formacao-analista/',
      variant: 'dark',
      isHighlight: false,
      buttonText: 'Conhecer a Formação'
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative top background */}
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 -z-10 rounded-b-[3rem]"></div>

      <div className="max-w-md mx-auto px-4 relative z-0">
        <ProfileHeader />

        <main className="flex flex-col items-center w-full animate-fade-in-up">
          {links.map((link) => (
            <LinkCard key={link.id} {...link} />
          ))}
        </main>

        <SocialFooter />
      </div>
    </div>
  );
};

export default App;