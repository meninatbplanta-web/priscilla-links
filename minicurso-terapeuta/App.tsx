import React from 'react';
import {
    Calendar,
    Clock,
    CheckCircle2,
    PlayCircle,
    Users,
    Star as StarIcon
} from 'lucide-react';

const CTA_LINK = "https://chat.whatsapp.com/L123456789"; // Replace with actual group link
const AUTHOR_IMAGE = "https://priscilla-moreira.com/imagens/priscilla-pdv-2.webp";
// Using a placeholder that resembles the dark/blue tone of the reference
const HERO_BG_IMAGE = "https://images.unsplash.com/photo-1516575150278-77136aed6920?q=80&w=1920&auto=format&fit=crop";

const Button = ({ children, className = '', ...props }: any) => (
    <a
        href={CTA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center px-8 py-4 text-base font-black text-slate-900 bg-yellow-400 rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:scale-105 active:scale-95 uppercase tracking-wide ${className}`}
        {...props}
    >
        {children}
    </a>
);

const LessonCard = ({ number, title, description, date }: { number: string, title: string, description: string, date: string }) => (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-colors group">
        <div className="h-32 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
            {/* Placeholder for lesson thumbnail */}
            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-600 font-bold text-4xl opacity-20">
                {number}
            </div>
            <div className="absolute bottom-3 left-4 z-20">
                <span className="inline-block px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded uppercase">
                    {date}
                </span>
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                {title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

const App = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-yellow-500 selection:text-black">

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src={HERO_BG_IMAGE} alt="Background" className="w-full h-full object-cover opacity-20 filter blur-sm" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-sm font-bold uppercase tracking-wider mb-8 animate-fade-in-up">
                        <Calendar className="w-4 h-4" />
                        Minicurso Gratuito • 02 a 08 de Fevereiro
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-in-up delay-100">
                        Descubra como transformar seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">dom de ajudar pessoas</span> em uma das profissões mais importantes e valiosas do mundo.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Participe do minicurso gratuito e descubra o caminho para se tornar um Terapeuta de Resultados.
                    </p>

                    <div className="animate-fade-in-up delay-300">
                        <Button className="w-full md:w-auto min-w-[300px] text-lg">
                            SIM, QUERO PARTICIPAR
                        </Button>
                        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 100% Online e Gratuito</span>
                            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Certificado Incluso</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* Schedule Section */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            O que você aprenderá no <br />
                            <span className="text-yellow-500">Minicurso Terapeuta de Resultados?</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <LessonCard
                            number="01"
                            date="02 de Fevereiro"
                            title="Qualquer pessoa pode se tornar terapeuta?"
                            description="Você descobrirá o requisito número 1 para atuar profissionalmente, mesmo que esteja começando do zero."
                        />
                        <LessonCard
                            number="02"
                            date="04 de Fevereiro"
                            title="A raiz de todas as situações emocionais"
                            description="Você vai compreender como acessar a causa raiz dos problemas e não apenas tratar os sintomas."
                        />
                        <LessonCard
                            number="03"
                            date="06 de Fevereiro"
                            title="O mapa para viver de terapia"
                            description="Vou te mostrar o caminho exato para atrair clientes, cobrar o quanto você vale e viver da sua missão."
                        />
                        <LessonCard
                            number="04"
                            date="08 de Fevereiro"
                            title="Certificado e Próximos Passos"
                            description="Encerramento do minicurso com a liberação do seu certificado e a oportunidade de dar o próximo passo."
                        />
                    </div>

                    <div className="mt-12 text-center">
                        <Button className="w-full md:w-auto min-w-[300px]">
                            QUERO ME INSCREVER AGORA
                        </Button>
                    </div>
                </div>
            </section>

            {/* Author Section */}
            <section className="py-20 bg-slate-950 text-center md:text-left">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2 relative">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl relative z-10">
                                <img src={AUTHOR_IMAGE} alt="Priscilla Moreira" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-yellow-500/20 rounded-2xl -z-0 hidden md:block"></div>
                        </div>

                        <div className="w-full md:w-1/2 space-y-6">
                            <h2 className="text-sm font-bold text-yellow-500 tracking-widest uppercase">COM QUEM VOU APRENDER?</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">Priscilla Moreira</h3>

                            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                                <p>
                                    Terapeuta e Analista Corporal com mais de 10 anos de experiência clínica.
                                </p>
                                <p>
                                    Já formou mais de 5.000 alunos em seus cursos e mentorias, ajudando pessoas comuns a se tornarem terapeutas confiantes e bem remunerados.
                                </p>
                                <p>
                                    Sua missão é democratizar o acesso ao conhecimento sobre a mente e as emoções humanas, formando uma nova geração de profissionais capazes de curar dores reais.
                                </p>
                            </div>

                            <div className="pt-6">
                                <Button className="w-full md:w-auto">
                                    GARANTIR MINHA VAGA
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-600 text-sm">
                <p>&copy; {new Date().getFullYear()} Priscilla Moreira. Todos os direitos reservados.</p>
            </footer>

            <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

        </div>
    );
};

export default App;
