import React, { useState } from 'react';
import {
  Users,
  Heart,
  Shield,
  Clock,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Lock,
  Star,
  Briefcase
} from 'lucide-react';

// --- Constants & Data ---

const CHECKOUT_LINK = "https://chk.eduzz.com/39YDQ2QJ9O";
const AUTHOR_IMAGE = "https://priscilla-moreira.com/imagens/priscilla-pdv-2.webp";
// Using a relevant placeholder or just omitting the hero image if not provided, 
// but the design expects one. I'll use a generic therapy/group image or the author image again if needed.
// For now let's use a nice unsplash image representing connection/group.
const HERO_IMAGE = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop";

const FAQS = [
  {
    question: "Para quem é o grupo?",
    answer: "Este grupo foi criado especialmente para terapeutas, psicólogos, psicanalistas e profissionais do cuidado que sentem a necessidade de um espaço seguro para serem ouvidos e cuidados."
  },
  {
    question: "Como funcionam os encontros?",
    answer: "São encontros semanais, todas as sextas-feiras, das 13h às 15h. Utilizamos uma plataforma online segura (Zoom/Meet) para garantir a privacidade e interação de todos."
  },
  {
    question: "Qual a duração do grupo?",
    answer: "A jornada tem duração de 3 meses, totalizando 12 sessões de aprofundamento e troca."
  },
  {
    question: "Preciso ser analista corporal?",
    answer: "Não. O grupo é aberto a terapeutas de diferentes linhas de abordagem. O foco é o cuidado com o terapeuta (você) e não apenas técnica."
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
            Inscrições Abertas
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-black leading-tight">
            Grupo Terapêutico para <span className="text-red-500">Terapeutas</span>
          </h1>

          <div className="space-y-2 text-gray-300">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Calendar className="w-5 h-5 text-red-500" />
              <span>Encontros semanais • Todas as sextas-feiras</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Clock className="w-5 h-5 text-red-500" />
              <span>Das 13h às 15h (até 2h de duração)</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-500" />
              <span>Duração de 3 meses (12 sessões)</span>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 pt-4 border-t border-gray-700">
            Um espaço de escuta, troca e aprofundamento emocional criado especialmente para quem cuida de outros — e muitas vezes esquece de cuidar de si.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button href={CHECKOUT_LINK}>
              QUERO PARTICIPAR
            </Button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-400 pt-2">
            <div className="flex items-center gap-1">
              <Lock className="w-4 h-4" /> Vagas Limitadas
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="absolute inset-0 bg-red-600 blur-[80px] opacity-20 rounded-full scale-75 animate-pulse"></div>
          <img
            src={HERO_IMAGE}
            alt="Grupo Terapêutico"
            className="relative w-full max-w-[320px] md:max-w-[400px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 border-4 border-gray-800"
          />
        </div>
      </div>
    </section>
  );
};

const GroupDetails = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Cuidar de quem Cuida
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Conduzido por <strong>Priscila Moreira</strong>, terapeuta integrativa e analista corporal, o grupo é um ambiente seguro e leve.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Aqui, terapeutas de diferentes linhas se reúnem para olhar suas próprias dores, desbloquear padrões inconscientes e fortalecer o campo interno, antes de voltar ao atendimento de seus clientes.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-red-600" />
              O que vamos trabalhar?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-red-100 p-1 rounded-full"><Users className="w-4 h-4 text-red-600" /></div>
                <span className="text-gray-700">Troca de experiências e acolhimento</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-red-100 p-1 rounded-full"><Heart className="w-4 h-4 text-red-600" /></div>
                <span className="text-gray-700">Desbloqueio de padrões inconscientes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-red-100 p-1 rounded-full"><Users className="w-4 h-4 text-red-600" /></div>
                <span className="text-gray-700">Fortalecimento do papel do terapeuta</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-red-100 p-1 rounded-full"><Shield className="w-4 h-4 text-red-600" /></div>
                <span className="text-gray-700">Ambiente seguro e confidencial</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Author = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
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
              <h4 className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">Sua Mentora</h4>
              <h2 className="text-3xl font-bold text-gray-900">Priscilla Moreira</h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Psicoterapeuta e especialista em Análise Corporal, Priscilla dedicou sua carreira a entender como as emoções moldam o corpo físico.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Com uma metodologia única e acolhedora, ela já formou milhares de alunos e agora abre este espaço exclusivo para cuidar de quem cuida.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> +5.000 Alunos
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
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
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-105 transition-transform duration-300">
          <div className="bg-gray-900 p-6 text-center text-white">
            <h3 className="text-2xl font-bold">Oferta Especial</h3>
            <p className="text-gray-400 mt-2">Para alunos (novos e antigos)</p>
          </div>

          <div className="p-8 text-center space-y-6">
            <div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-3xl text-gray-400 font-bold">12x</span>
                <span className="text-6xl font-black text-red-600">99,70</span>
              </div>
              <p className="text-gray-600 mt-2 font-medium">ou R$ 997,00 à vista</p>
            </div>

            <ul className="space-y-4 text-left bg-gray-50 p-6 rounded-xl">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700">12 Sessões de Grupo</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700">Encontros Semanais (Sex 13h-15h)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700">Acesso por 3 meses</span>
              </li>
            </ul>

            <Button href={CHECKOUT_LINK} className="w-full animate-pulse">
              GARANTIR MINHA VAGA
            </Button>

            <p className="text-xs text-gray-400">
              Pagamento seguro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
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
      setIsVisible(scrollPosition > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 md:hidden animate-slide-up">
      <div className="flex items-center justify-between gap-4 max-w-sm mx-auto">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">12x</span>
          <span className="text-xl font-bold text-red-600">R$ 99,70</span>
        </div>
        <a
          href={CHECKOUT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-600 text-white font-bold py-3 px-4 rounded-lg text-center shadow-lg hover:bg-green-700 transition-colors"
        >
          QUERO ENTRAR
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
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20 md:pb-0">
      <Hero />
      <GroupDetails />
      <Author />
      <Pricing />
      <FAQSection />
      <Footer />
      <StickyCTA />

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