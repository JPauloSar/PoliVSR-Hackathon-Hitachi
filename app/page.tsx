'use client'

import { useMemo, useState } from 'react'
import { BarChart3, CircleHelp, Gauge, Menu, ArrowRight, X } from 'lucide-react'

const tabs = [
  { id: 'about', label: 'Quem Somos', icon: CircleHelp },
  { id: 'data', label: 'Pesquisas (Dados)', icon: BarChart3 },
  { id: 'simulator', label: 'Simulador VSR', icon: Gauge },
] as const

type TabId = (typeof tabs)[number]['id']

function getReactorCount(hour: number) {
  const daylight = Math.max(0, Math.sin(((hour - 6) / 12) * Math.PI))
  return Math.max(1, Math.round(1 + daylight * 8))
}

function BrandMark() {
  return (
    <span className="flex items-center gap-3" aria-label="PoliVSR">
      <svg viewBox="0 0 28 28" className="size-7" role="img" aria-label="Marca PoliVSR">
        <ellipse cx="7" cy="14" rx="3.2" ry="10" fill="none" stroke="currentColor" strokeWidth="3" />
        <ellipse cx="14" cy="14" rx="3.2" ry="10" fill="none" stroke="currentColor" strokeWidth="3" />
        <ellipse cx="21" cy="14" rx="3.2" ry="10" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
      <span className="text-[1.35rem] font-extrabold tracking-[-0.06em]">Poli<span className="text-[#e60000]">VSR</span></span>
    </span>
  )
}

function Hero() {
  const [hour, setHour] = useState(13)
  const reactors = getReactorCount(hour)
  const maneuvers = Math.max(18, Math.round(42 - reactors * 1.8 + Math.abs(hour - 13) * 1.4))
  const points = useMemo(() => '0,78 8,76 16,68 24,51 32,28 40,20 48,34 56,63 64,76 72,70 80,48 88,42 100,18', [])

  return (
    <>
      <section className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(230,0,0,.2),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[54%] opacity-40" aria-hidden="true">
          <svg viewBox="0 0 100 100" className="size-full" preserveAspectRatio="none">
            <defs><linearGradient id="hero-line" x1="0" x2="1"><stop offset="0" stopColor="#e60000" stopOpacity=".15" /><stop offset=".5" stopColor="#ff6b6b" /><stop offset="1" stopColor="#e60000" stopOpacity=".18" /></linearGradient></defs>
            <path d="M0 25H100M0 50H100M0 75H100" stroke="white" strokeOpacity=".08" strokeWidth=".25" />
            <polyline points={points} fill="none" stroke="url(#hero-line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-32 sm:px-10 lg:px-16">
          <div className="max-w-5xl">
            <p className="mb-8 text-xs font-bold uppercase tracking-[.28em] text-red-400">PoliVSR · pesquisa aplicada</p>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-[-.055em] sm:text-6xl lg:text-7xl">Nesse momento, <span className="block text-6xl font-black text-[#e60000] sm:text-8xl">{maneuvers} Manobras</span> foram feitas em todo o país.</h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{reactors} reatores fixos estão ligados no SIN apenas para dar conta da baixa tensão.</p>
            <div className="mt-12 max-w-xl">
              <label htmlFor="hero-hour" className="mb-3 flex justify-between text-xs font-bold uppercase tracking-[.16em] text-slate-400"><span>00h</span><span>Hora do dia · {String(hour).padStart(2, '0')}h</span><span>24h</span></label>
              <input id="hero-hour" aria-label="Hora do dia" type="range" min="0" max="24" value={hour} onChange={(event) => setHour(Number(event.target.value))} className="h-2 w-full cursor-pointer accent-[#e60000]" />
              <p className="mt-4 text-sm text-slate-400">O VSR transforma os degraus agressivos de comutação em ajustes suaves.</p>
            </div>
            <button onClick={() => document.getElementById('about-project')?.scrollIntoView({ behavior: 'smooth' })} className="mt-10 inline-flex items-center gap-3 rounded-sm bg-[#e60000] px-6 py-4 text-sm font-bold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Conheça o projeto <ArrowRight className="size-4" /></button>
          </div>
        </div>
      </section>
      <section id="about-project" className="bg-white px-6 py-24 sm:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-[#e60000]">Quem somos e o que queremos</p>
          <h2 className="mt-5 text-4xl font-extrabold tracking-[-.05em] text-slate-950 sm:text-5xl">O PoliVSR e a Evolução do Grid</h2>
          <div className="mt-10 flex flex-col gap-7 text-lg leading-relaxed text-slate-700">
            <p>Somos um grupo de pesquisa formado por alunos de Iniciação Científica (ICs) e Mestrandos da Poli-USP, atuando em parceria direta com a comissão de P&amp;D da Hitachi Energy e transmissoras de energia. Nossa missão é transformar conhecimento acadêmico em soluções aplicáveis para o Sistema Interligado Nacional.</p>
            <p>O crescimento das fontes renováveis trouxe uma nova dinâmica para o grid: a demanda varia, a tensão oscila e os equipamentos precisam responder com mais precisão. O PoliVSR nasce para investigar essa transição e construir uma rede mais flexível, confiável e eficiente.</p>
            <p>Queremos substituir a lógica de manobras fixas por uma compensação variável e inteligente. Ao aproximar universidade, indústria e operação, criamos as bases para um futuro energético mais sustentável e preparado para a complexidade do Brasil.</p>
          </div>
        </div>
      </section>
      <section id="pillars" className="bg-slate-50 px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.25em] text-[#e60000]">O que estamos construindo</p><h2 className="mt-5 text-4xl font-extrabold tracking-[-.05em] text-slate-950 sm:text-5xl">Uma rede mais estável para um futuro variável.</h2></div>
          <div className="mt-16 grid gap-12 border-t border-slate-200 pt-10 md:grid-cols-3 md:gap-8">
            {[['01', 'Medir', 'Entender o comportamento da rede e as sobretensões em regime permanente a cada hora do dia, mapeando regiões críticas como o Norte e Nordeste.'], ['02', 'Modular', 'Usar a tecnologia VSR (Variable Shunt Reactor) para ajustar a absorção de reativo usando o comutador de derivação (OLTC), sem a necessidade de chaves.'], ['03', 'Estabilizar', 'Mais confiabilidade sistêmica, menos manutenção de disjuntores e um SIN resiliente à carga intermitente renovável.']].map(([number, title, text]) => <article key={number}><p className="text-5xl font-extrabold tracking-[-.06em] text-slate-300">{number}</p><h3 className="mt-5 text-2xl font-extrabold text-slate-950">{title}</h3><p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">{text}</p></article>)}
          </div>
        </div>
      </section>
    </>
  )
}

function Placeholder({ type }: { type: Exclude<TabId, 'about'> }) {
  const isData = type === 'data'
  return <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 pt-24 text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-red-600">Módulo em desenvolvimento</p><h1 className="mt-4 text-5xl font-extrabold tracking-[-.05em] text-slate-950">{isData ? 'Pesquisas e dados' : 'Simulador VSR'}</h1><p className="mt-5 max-w-lg leading-7 text-slate-500">{isData ? 'Explore em breve os dados de carga e tensão do Sistema Interligado Nacional.' : 'Experimente em breve diferentes cenários e veja como o reator variável responde à rede.'}</p></div>
}

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabId>('about')
  const [menuOpen, setMenuOpen] = useState(false)
  return <main className="min-h-screen bg-white text-slate-950"><header className="fixed inset-x-0 top-0 z-20 border-b border-slate-200 bg-white"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16"><button onClick={() => setActiveTab('about')} aria-label="Ir para o início"><BrandMark /></button><nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">{tabs.map((tab) => { const Icon = tab.icon; return <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 border-b-2 px-4 py-7 text-sm font-bold transition ${activeTab === tab.id ? 'border-[#e60000] text-slate-950' : 'border-transparent text-slate-500 hover:text-slate-950'}`}><Icon className="size-4" />{tab.label}</button> })}</nav><button className="rounded-sm p-2 text-slate-900 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button></div>{menuOpen && <nav className="flex flex-col gap-1 border-t border-slate-200 bg-white p-4 md:hidden">{tabs.map((tab) => <button key={tab.id} onClick={() => { setActiveTab(tab.id); setMenuOpen(false) }} className="px-4 py-3 text-left text-sm font-bold text-slate-700">{tab.label}</button>)}</nav>}</header>{activeTab === 'about' ? <Hero /> : <Placeholder type={activeTab} />}</main>
}
