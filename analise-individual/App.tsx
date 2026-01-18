import React from 'react';
import {
    CheckCircle2,
    AlertTriangle,
    Clock,
    Unlock,
    MessageCircle,
    Video,
    UserCheck
} from 'lucide-react';

const CHECKOUT_LINK = "https://chk.eduzz.com/iyejkuay";

const Button = ({ children, className = '', ...props }: any) => (
    <a
        href={CHECKOUT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center px-8 py-4 text-lg font-black text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:scale-105 active:scale-95 uppercase tracking-wide w-full md:w-auto ${className}`}
        {...props}
    >
        {children}
    </a>
);

const Section = ({ className = '', children }: { className?: string; children: React.ReactNode }) => (
    <section className={`py-16 px-4 md:px-8 ${className}`}>
        <div className="max-w-4xl mx-auto">
            {children}
        </div>
    </section>
);

const App = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-red-600 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-red-950/20">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">

                    <div className="inline-block px-4 py-1 rounded-full bg-red-600/20 border border-red-500/50 text-red-400 text-sm font-bold uppercase tracking-wider mb-6 animate-fade-in-up">
                        OFERTA POR TEMPO LIMITADO
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 animate-fade-in-up delay-100">
                        RECEBA UMA <span className="text-red-600">ANÁLISE CORPORAL E FACIAL</span> FEITA PELA PERITA PRISCILLA MOREIRA
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-medium animate-fade-in-up delay-200">
                        Eu vou gravar um vídeo exclusivo contando <strong className="text-white">TUDO</strong> o que eu vejo através da sua foto (ou de quem você quiser).
                    </p>

                    <div className="animate-fade-in-up delay-300">
                        <Button className="text-xl py-5 px-10">
                            QUERO MINHA ANÁLISE AGORA
                        </Button>
                        <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-red-500" /> A oferta pode acabar a qualquer momento</span>
                            <span className="flex items-center gap-1"><Unlock className="w-4 h-4 text-red-500" /> Sigilo Absoluto</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <Section className="bg-neutral-900 border-y border-neutral-800">
                <h2 className="text-3xl font-bold text-center mb-12">Como Funciona a Análise Individual?</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-red-600/50 transition-colors">
                        <div className="bg-red-600/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <UserCheck className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">1. Envie a Foto</h3>
                        <p className="text-gray-400">
                            Você enviará uma foto sua ou da pessoa que deseja analisar. Pode ser para autoconhecimento, ou casos específicos como desconfiança de infidelidade, mentiras, etc.
                        </p>
                    </div>

                    <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-red-600/50 transition-colors">
                        <div className="bg-red-600/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <Video className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">2. Análise da Perita</h3>
                        <p className="text-gray-400">
                            A Priscilla Moreira fará uma análise minuciosa dos traços faciais e corporais, identificando padrões de comportamento, sentimentos ocultos e intenções.
                        </p>
                    </div>

                    <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-red-600/50 transition-colors">
                        <div className="bg-red-600/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <MessageCircle className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">3. Receba a Devolutiva</h3>
                        <p className="text-gray-400">
                            Você receberá um vídeo/áudio gravado exclusivamente para você com todo o mapeamento. <strong>Não é uma análise ao vivo</strong>, é uma devolutiva gravada para você ver e rever.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Use Cases */}
            <Section className="bg-black">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6 text-red-600">O que você pode descobrir?</h2>
                        <ul className="space-y-4 text-lg text-gray-300">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                <span>Entender a verdadeira essência de uma pessoa.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                <span>Confirmar suspeitas de comportamento (mentiras, traição).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                <span>Descobrir como lidar melhor com alguém difícil.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                <span>Autoconhecimento profundo sobre suas próprias dores e recursos.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <AlertTriangle className="w-32 h-32 text-red-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Atenção</h3>
                        <p className="text-gray-400 mb-6">
                            Muitas vezes o corpo grita o que a boca cala. A Análise Corporal é uma ciência precisa que revela o que está oculto no inconsciente. Esteja preparado(a) para ouvir a verdade.
                        </p>
                        <div className="bg-red-900/20 border border-red-900/50 p-4 rounded-lg">
                            <p className="text-red-200 text-sm font-semibold">
                                * O sigilo é garantido. Sua história e sua análise não serão compartilhadas com ninguém.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Pricing Section */}
            <Section className="text-center py-24">
                <div className="max-w-lg mx-auto bg-neutral-900 border border-neutral-700 rounded-3xl p-8 md:p-12 shadow-2xl relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white font-bold px-6 py-2 rounded-full uppercase tracking-wider text-sm shadow-lg">
                        Oportunidade Única
                    </div>

                    <p className="text-gray-400 text-lg mb-2">De <span className="line-through decoration-red-600">R$ 497,00</span> por apenas:</p>
                    <div className="text-6xl font-black text-white mb-2 tracking-tighter">
                        R$ 247<span className="text-2xl text-gray-400 font-bold">,00</span>
                    </div>
                    <p className="text-gray-500 mb-8">Pagamento único ou parcelado</p>

                    <Button className="w-full text-xl py-5 mb-4 animate-pulse">
                        QUERO COMPRAR AGORA
                    </Button>

                    <p className="text-xs text-gray-500 mt-4">
                        Pagamento processado de forma 100% segura pela Eduzz.
                        Acesso imediato às instruções de envio da foto após a compra.
                    </p>
                </div>
            </Section>

            <footer className="py-8 bg-black border-t border-neutral-900 text-center text-neutral-600 text-sm">
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
