import React, { useState } from 'react';
import {
  BookOpen,
  Eye,
  Shield,
  Heart,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Menu,
  Star,
  Lock
} from 'lucide-react';

// --- Constants & Data ---

const CHECKOUT_LINK = "https://chk.eduzz.com/57qpjkr5";
const HERO_IMAGE = "https://priscilla-moreira.com/imagens/400%20sinais%20mini.png";
const AUTHOR_IMAGE = "https://priscilla-moreira.com/imagens/priscilla-pdv-2.webp"; // Using the one from the reference

const FEATURES = [
  {
    title: "400+ Sinais Corporais",
    description: "Um dicionário visual completo explicado de forma simples e direta.",
    icon: <BookOpen className="w-6 h-6 text-red-600" />
  },
  {
    title: "Método dos 3 Cs",
    description: "Aprenda a técnica exclusiva para interpretações seguras e sem achismos.",
    icon: <Eye className="w-6 h-6 text-red-600" />
  },
  {
    title: "Detecção de Mentiras",
    description: "Identifique incongruências entre o que é dito e o que o corpo fala.",
    icon: <Shield className="w-6 h-6 text-red-600" />
  },
  {
    title: "Exercícios Práticos",
    description: "Treine seu olhar no dia a dia com atividades guiadas.",
    icon: <CheckCircle2 className="w-6 h-6 text-red-600" />
  }
];

const BENEFITS = [
  {
    text: "Se proteger de manipulações e mentiras",
    icon: <Shield className="w-5 h-5 text-white" />
  },
  {
    text: "Melhorar relacionamentos pessoais",
    icon: <Heart className="w-5 h-5 text-white" />
  },
  {
    text: "Transformar a leitura corporal em profissão",
    icon: <Briefcase className="w-5 h-5 text-white" />
  }
];

const FAQS = [
  {
    question: "Para quem é este manual?",
    answer: "É ideal para qualquer pessoa que deseja melhorar sua comunicação, entender melhor os outros e se proteger de manipulações. Profissionais de RH, vendas, terapeutas e líderes também se beneficiam muito."
  },
  {
    question: "Como recebo o acesso?",
    answer: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar o seu eBook e começar a estudar."
  },
  {
    question: "Serve para iniciantes?",
    answer: "Sim! A linguagem é simples e didática, desenvolvida justamente para quem está começando mas quer profundidade no conteúdo."
  },
  {
    question: "Quais formas de pagamento?",
    answer: "Você pode pagar via cartão de crédito em até 12x, PIX ou boleto bancário."
  }
];

// --- Sub-components ---

const Button = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href
}: {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
}) => {
  const baseStyles = "font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-center flex items-center justify-center gap-2 w-full md:w-auto";

  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white shadow-red-900/20",
    secondary: "bg-gray-900 hover:bg-gray-800 text-white",
    outline: "border-2 border-red-600 text-red-600 hover:bg-red-50"
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    // @ts-ignore
    <Component className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

const Accordion: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden mb-3 shadow-sm">
      <button
        className="w-full p-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-800">{question}</span>
        {isOpen ? <ChevronUp className="text-red-600" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="p-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
          {answer}
        </div>
      </div>
    </div>
  );
};

// --- Main Layout Components ---

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white pt-12 pb-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-red-600 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-blue-900 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center md:text-left space-y-6 order-2 md:order-1">
          <div className="inline-block px-4 py-1 rounded-full bg-red-600/20 border border-red-500/50 text-red-400 text-sm font-semibold mb-2">
            Manual Prático Exclusivo
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Decifre as <span className="text-red-500">Emoções</span> e <span className="text-red-500">Intenções</span> Escondidas
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
            Descubra o que ninguém te conta. Um guia completo para ler gestos, posturas e microexpressões, explicado por <strong>Priscilla Moreira</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button href={CHECKOUT_LINK}>
              QUERO O MANUAL AGORA
            </Button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-400 pt-2">
            <div className="flex items-center gap-1">
              <Lock className="w-4 h-4" /> Compra Segura
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Acesso Imediato
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center relative">
          {/* Image glow effect */}
          <div className="absolute inset-0 bg-red-600 blur-[80px] opacity-20 rounded-full scale-75 animate-pulse"></div>
          <img
            src={HERO_IMAGE}
            alt="Capa do Manual de Leitura Corporal"
            className="relative w-full max-w-[320px] md:max-w-[400px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

const WhatYouLearn = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Você Vai Encontrar?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Este não é apenas um livro teórico. É um manual de campo para você aplicar em qualquer situação da sua vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all group">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DarkBenefits = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
            alt="Interação profissional"
            className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[400px] w-full"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-3xl font-bold leading-tight">
            Para quem deseja <span className="text-red-500">Dominar</span> o ambiente
          </h2>
          <p className="text-gray-400 text-lg">
            A linguagem corporal representa mais de 70% da nossa comunicação. Se você foca apenas nas palavras, está perdendo a maior parte da conversa.
          </p>

          <div className="space-y-4">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="bg-red-600 rounded-full p-2 shrink-0">
                  {benefit.icon}
                </div>
                <span className="font-medium text-lg">{benefit.text}</span>
              </div>
            ))}
          </div>

          <Button href={CHECKOUT_LINK} className="w-full mt-4">
            QUERO ESSA TRANSFORMAÇÃO
          </Button>
        </div>
      </div>
    </section>
  );
};

const Author = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
              <img
                src={AUTHOR_IMAGE}
                alt="Priscilla Moreira"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-20 -z-10 translate-y-4"></div>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h4 className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">A Autora</h4>
              <h2 className="text-3xl font-bold text-gray-900">Priscilla Moreira</h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Psicoterapeuta e especialista em Análise Corporal, Priscilla dedicou sua carreira a entender como as emoções moldam o corpo físico.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Com uma metodologia única e acolhedora, ela já formou milhares de alunos, ensinando como transformar o conhecimento sobre os traços de caráter em uma ferramenta poderosa de cura e autoconhecimento.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> +5.000 Alunos
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                <Briefcase className="w-4 h-4 text-gray-500" /> Especialista
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-105 transition-transform duration-300">
          <div className="bg-red-600 p-6 text-center text-white">
            <h3 className="text-2xl font-bold">Manual Completo</h3>
            <p className="text-red-100 mt-2">Oferta por tempo limitado</p>
          </div>

          <div className="p-8 text-center space-y-6">
            <div>
              <p className="text-gray-500 line-through text-lg">De R$ 197,00</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-3xl text-gray-400 font-bold">12x</span>
                <span className="text-6xl font-black text-gray-900">10,03</span>
              </div>
              <p className="text-gray-600 mt-2 font-medium">ou R$ 97,00 à vista</p>
            </div>

            <ul className="space-y-4 text-left bg-gray-50 p-6 rounded-xl">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700">Acesso imediato ao eBook</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700">400+ Sinais explicados</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700">Método 3 Cs incluso</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700">7 Dias de Garantia</span>
              </li>
            </ul>

            <Button href={CHECKOUT_LINK} className="w-full animate-pulse">
              COMPRAR AGORA
            </Button>

            <p className="text-xs text-gray-400">
              Pagamento seguro processado pela Eduzz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Dúvidas Frequentes
        </h2>
        <div className="space-y-2">
          {FAQS.map((faq, index) => (
            <Accordion key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 500); // Show after scrolling down a bit
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 md:hidden animate-slide-up">
      <div className="flex items-center justify-between gap-4 max-w-sm mx-auto">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 line-through">R$ 197</span>
          <span className="text-xl font-bold text-red-600">R$ 97</span>
        </div>
        <a
          href={CHECKOUT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-600 text-white font-bold py-3 px-4 rounded-lg text-center shadow-lg hover:bg-green-700 transition-colors"
        >
          QUERO COMPRAR
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 text-center border-t border-gray-800">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Priscilla Moreira. Todos os direitos reservados.
        </p>
        <p className="text-xs max-w-lg mx-auto text-gray-500">
          Este produto não substitui o parecer médico profissional. Sempre consulte um médico para tratar de assuntos relativos à saúde.
        </p>
      </div>
    </footer>
  );
};

// --- Main App Component ---

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20 md:pb-0">
      <Hero />
      <WhatYouLearn />
      <DarkBenefits />
      <Author />
      <Pricing />
      <FAQSection />
      <Footer />
      <StickyCTA />

      {/* Global CSS for animations that Tailwind doesn't have by default */}
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;