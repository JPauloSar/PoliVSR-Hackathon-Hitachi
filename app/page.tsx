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
        <ellipse cx="7" cy="14" rx="3.2" ry="10" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <ellipse cx="14" cy="14" rx="3.2" ry="10" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <ellipse cx="21" cy="14" rx="3.2" ry="10" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
      <span className="text-[1.35rem] font-extrabold tracking-[-0.06em]">Poli<span className="text-[#e60000]">VSR</span></span>
    </span>
  )
}

function Hero() {
  const [hour, setHour] = useState(13)
  const reactors = getReactorCount(hour)
  const marker = `${(hour / 24) * 100}%`
  const points = useMemo(() => '0,70 5,67 10,60 16,51 22,39 28,25 34,19 40,22 46,36 53,57 60,68 68,63 76,48 84,43 92,50 100,30', [])

  return (
    <>
      <section className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_75%_22%,rgba(230,0,0,.22),transparent_30%),linear-gradient(115deg,transparent_34%,rgba(255,255,255,.04)_50%,transparent_70%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] opacity-80" aria-hidden="true">
          <svg viewBox="0 0 100 80" className="size-full" preserveAspectRatio="none">
            <defs><linearGradient id="hero-line" x1="0" x2="1"><stop offset="0" stopColor="#e60000" stopOpacity=".15" /><stop offset=".45" stopColor="#ff5555" /><stop offset="1" stopColor="#e60000" stopOpacity=".3" /></linearGradient><linearGradient id="hero-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#e60000" stopOpacity=".15" /><stop offset="1" stopColor="#e60000" stopOpacity="0" /></linearGradient></defs>
            <g stroke="white" strokeOpacity=".08" strokeWidth=".2"><path d="M0 15H100" /><path d="M0 35H100" /><path d="M0 55H100" /><path d="M0 75H100" /></g>
            <polygon points={`0,80 ${points} 100,80`} fill="url(#hero-fill)" />
            <polyline points={points} fill="none" stroke="url(#hero-line)" strokeWidth=".9" vectorEffect="non-scaling-stroke" />
            <line x1={marker} x2={marker} y1="4" y2="79" stroke="white" strokeOpacity=".55" strokeDasharray="2 2" strokeWidth=".35" vectorEffect="non-scaling-stroke" />
            <circle cx={marker} cy="36" r="1.5" fill="#fff" stroke="#e60000" strokeWidth=".8" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center px-6 pb-20 pt-28 sm:px-10 lg:px-16">
          <div className="max-w-4xl">
            <p className="mb-7 text-xs font-bold uppercase tracking-[.26em] text-red-400">PoliVSR · pesquisa aplicada</p>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[.98] tracking-[-.06em] sm:text-7xl lg:text-[5.8rem]">A demanda cai.<br />A tensão sobe.<br />A solução precisa ser <span className="text-[#e60000]">variável.</span></h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Conheça o PoliVSR: o projeto que estuda a substituição dos reatores shunt fixos no SIN, estabilizando a rede sem o custo das manobras bruscas.</p>
            <div className="mt-10 max-w-2xl border-l-2 border-red-600 pl-5">
              <p className="text-sm font-bold uppercase tracking-[.1em] text-white sm:text-base">Agora são {String(hour).padStart(2, '0')}h. Neste momento de carga leve, estima-se que <span className="text-red-400">{reactors} reatores fixos</span> precisam estar ligados no SIN para compensar a sobretensão.</p>
              <p className="mt-3 text-sm text-slate-400">O VSR transforma os degraus agressivos de comutação em ajustes suaves.</p>
            </div>
            <div className="mt-8 max-w-xl">
              <label htmlFor="hero-hour" className="mb-2 flex justify-between text-xs font-bold uppercase tracking-[.16em] text-slate-500"><span>00h</span><span>Hora do dia · {String(hour).padStart(2, '0')}h</span><span>24h</span></label>
              <input id="hero-hour" type="range" min="0" max="24" value={hour} onChange={(event) => setHour(Number(event.target.value))} className="h-1.5 w-full cursor-pointer accent-[#e60000]" />
            </div>
            <button onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })} className="mt-9 inline-flex items-center gap-3 rounded-sm bg-[#e60000] px-6 py-4 text-sm font-bold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Entenda o Efeito Ferranti e a Solução VSR <ArrowRight className="size-4" /></button>
          </div>
        </div>
      </section>
      <section id="pillars" className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.25em] text-[#e60000]">O que estamos construindo</p><h2 className="mt-5 text-4xl font-extrabold tracking-[-.05em] text-slate-950 sm:text-5xl">Uma rede mais estável para um futuro variável.</h2><p className="mt-5 text-lg leading-8 text-slate-600">O PoliVSR combina pesquisa acadêmica e aplicação industrial para responder ao novo comportamento do Sistema Interligado Nacional.</p></div>
          <div className="mt-16 grid gap-12 border-t border-slate-200 pt-10 md:grid-cols-3 md:gap-8">
            {[['01', 'Medir', 'Entender o comportamento da rede e as sobretensões em regime permanente a cada hora do dia, mapeando regiões críticas como o Norte e Nordeste.'], ['02', 'Modular', 'Usar a tecnologia VSR (Variable Shunt Reactor) para ajustar a absorção de reativo usando o comutador de derivação (OLTC), sem a necessidade de chaves.'], ['03', 'Estabilizar', 'Mais confiabilidade sistêmica, menos manutenção de disjuntores e um SIN resiliente à carga intermitente renovável.']].map(([number, title, text]) => <article key={number}><p className="text-5xl font-extrabold tracking-[-.06em] text-slate-200">{number}</p><h3 className="mt-5 text-2xl font-extrabold text-slate-950">{title}</h3><p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">{text}</p></article>)}
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
