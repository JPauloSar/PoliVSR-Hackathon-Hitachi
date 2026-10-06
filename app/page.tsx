'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroText, setHeroText] = useState('');

  const slides = [
    {
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ix899Ndz6OuZ3jewtpFh7m8GbM0LNN.png',
      text: 'A energia do futuro está sendo construída hoje.',
    },
    {
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HqYSkMu3SnfJcRxvMf7mbuJo0KvF33.png',
      text: 'A demanda cai. As sobretensões sobem. A rede precisa responder.',
    },
    {
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CLcyeXMizzU3qyYIuk1YS7TKtCWIh2.png',
      text: 'Nesse momento, surgem tecnologias que mudam o jogo.',
    },
  ];

  useEffect(() => {
    setHeroText(slides[currentSlide].text);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="text-2xl font-bold text-gray-900">PoliVSR</div>
        <button className="md:hidden text-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Hero Slider */}
      <div className="relative w-full h-96 md:h-screen overflow-hidden bg-gray-900">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center max-w-4xl transition-all duration-700">
            {heroText}
          </h1>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bloco 1: Quem somos */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Quem somos</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Somos um grupo de pesquisa formado por alunos de Iniciação Científica (ICs) e Mestrandos da Poli-USP, atuando em parceria direta com a comissão de P&D da Hitachi Energy e grandes transmissoras. Nossa missão é transformar conhecimento acadêmico em soluções aplicáveis para o Sistema Interligado Nacional (SIN). Com a expansão das linhas e o crescimento das fontes renováveis intermitentes, a dinâmica do grid mudou: a demanda varia, a tensão dispara e os equipamentos precisam responder com precisão. O PoliVSR nasce para viabilizar essa transição para uma rede flexível e resiliente.
          </p>
        </div>
      </section>

      {/* Bloco 2: O que estamos fazendo */}
      <section className="bg-gray-50 px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">O que estamos fazendo</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Conduzimos pesquisas aplicadas para quantificar os benefícios do Reator de Derivação Variável (VSR). Nosso foco é demonstrar, com dados medidos, como essa tecnologia resolve os desafios sistêmicos que a rede enfrenta com a queda de carga diurna. Este site é um repositório técnico aberto, permitindo que o setor acompanhe a validação da tecnologia e se junte a nós na próxima evolução do sistema.
          </p>
        </div>
      </section>

      {/* Bloco 3: O que queremos */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">O que queremos</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Acreditamos na aliança entre a universidade e a indústria para acelerar a inovação. Queremos atrair concessionárias de transmissão para estudos práticos, comprovando a drástica redução nos custos operacionais (OPEX) e no desgaste de ativos. A meta final é fornecer ao ONS e à EPE embasamento técnico para especificar o VSR nos próximos leilões. A tecnologia já está disponível para produção local no HUB da Hitachi em Guarulhos; nossa missão é provar que essa é a melhor decisão de investimento.
          </p>
        </div>
      </section>

      {/* Bloco 4: O que é o VSR e por que ele é superior? */}
      <section className="bg-gray-50 px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">O que é o VSR e por que ele é superior?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hoje, a rede utiliza reatores fixos operando como interruptores brutos. Para controlar a tensão, realizam-se manobras agressivas de disjuntor, diminuindo a vida útil do equipamento e gerando restrições operativas. O Variable Shunt Reactor (VSR) funciona como um dimmer. Equipado com um comutador sob carga (OLTC), ele altera o número de espiras ativas em pequenos degraus automáticos, ajustando a absorção de potência reativa sem desconectar o ativo. Isso estabiliza a rede e viabiliza a integração de energias renováveis.
          </p>
        </div>
      </section>

      {/* Seção de Contato B2B e Call-to-Action Final */}
      <section className="bg-gray-950 px-6 py-24 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Traga a estabilidade do VSR para a sua concessão.</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl">
            O PoliVSR está de portas abertas para novas parcerias de P&D. Se a sua transmissora enfrenta altos custos com desgaste de disjuntores e sobretensões diárias durante a carga leve, junte-se a nós para um estudo de viabilidade técnica e financeira.
          </p>

          {/* Grid 2 Colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Coluna 1: Dados Institucionais */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="text-white text-lg">parcerias@polivsr.usp.br</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Telefone</p>
                <p className="text-white text-lg">+55 (11) 3091-0000</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Pesquisa Aplicada</p>
                <p className="text-white text-lg">Poli-USP, São Paulo - SP</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Engenharia e Produção</p>
                <p className="text-white text-lg">Hitachi Energy HUB, Guarulhos - SP</p>
              </div>
            </div>

            {/* Coluna 2: Formulário de Contato */}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nome completo"
                className="bg-gray-900 border border-gray-700 text-white p-3 rounded placeholder-gray-500 focus:outline-none focus:border-red-600"
                required
              />
              <input
                type="text"
                placeholder="Empresa (Concessionária / Agente)"
                className="bg-gray-900 border border-gray-700 text-white p-3 rounded placeholder-gray-500 focus:outline-none focus:border-red-600"
                required
              />
              <input
                type="email"
                placeholder="E-mail corporativo"
                className="bg-gray-900 border border-gray-700 text-white p-3 rounded placeholder-gray-500 focus:outline-none focus:border-red-600"
                required
              />
              <textarea
                placeholder="Como as sobretensões afetam o OPEX da sua operação hoje?"
                rows={8}
                className="bg-gray-900 border border-gray-700 text-white p-3 rounded placeholder-gray-500 focus:outline-none focus:border-red-600"
                required
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold p-4 rounded text-center transition-colors"
              >
                Solicitar Estudo de Viabilidade
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
