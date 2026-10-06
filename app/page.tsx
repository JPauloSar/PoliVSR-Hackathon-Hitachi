'use client'

import { useMemo, useState } from 'react'
import { Activity, ArrowRight, BarChart3, ChevronRight, CircleHelp, Gauge, Menu, ShieldCheck, SlidersHorizontal, Sparkles, X, Zap } from 'lucide-react'

const tabs = [
  { id: 'about', label: 'Quem Somos', icon: CircleHelp },
  { id: 'data', label: 'Pesquisas (Dados)', icon: BarChart3 },
  { id: 'simulator', label: 'Simulador VSR', icon: Gauge },
] as const

type TabId = (typeof tabs)[number]['id']

function getReactorCount(hour: number) {
  const daylight = Math.max(0, Math.sin(((hour - 6) / 12) * Math.PI))
  return Math.round(1 + daylight * 8)
}

function AboutPage() {
  const [hour, setHour] = useState(13)
  const reactors = getReactorCount(hour)
  const load = Math.round(42 + (1 - Math.max(0, Math.sin(((hour - 6) / 12) * Math.PI))) * 37)
  const marker = `${(hour / 24) * 100}%`

  const points = useMemo(() => '0,70 8,62 16,48 25,32 33,18 42,12 50,16 58,32 66,48 75,55 83,54 91,42 100,25', [])

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pt-36">
      <section className="grid items-center gap-12 lg:grid-cols-[1.03fr_.97fr] lg:gap-20">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-red-700">
            <span className="size-1.5 rounded-full bg-red-600" /> Hackathon Hitachi Energy 2026
          </div>
          <h1 className="max-w-2xl text-4xl font-black leading-[1.04] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
            A energia do futuro não pode operar no <span className="text-red-600">modo liga/desliga.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Conheça o PoliVSR: uma nova forma de estabilizar a rede elétrica brasileira com precisão, inteligência e menos manobras bruscas.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button onClick={() => document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700">
              Explorar o problema <ArrowRight className="size-4" />
            </button>
            <span className="text-sm font-medium text-slate-500">Protótipo conceitual · v1.0</span>
          </div>
        </div>

        <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_20px_70px_-30px_rgba(15,23,42,.3)] sm:p-6">
          <div className="absolute -right-3 -top-3 flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-xl"><Activity className="size-5" /></div>
          <div className="mb-5 flex items-start justify-between">
            <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Visualização em tempo real</p><h2 className="mt-1 text-lg font-extrabold text-slate-900">Curva de carga do SIN</h2></div>
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700"><span className="size-1.5 rounded-full bg-emerald-500" /> AO VIVO</span>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-slate-950 px-4 pb-4 pt-7 sm:px-6">
            <div className="pointer-events-none absolute inset-x-6 top-6 bottom-10 flex flex-col justify-between opacity-10"><i className="border-t border-white" /><i className="border-t border-white" /><i className="border-t border-white" /><i className="border-t border-white" /></div>
            <div className="relative h-48 sm:h-56">
              <svg viewBox="0 0 100 80" className="size-full overflow-visible" preserveAspectRatio="none" role="img" aria-label="Curva de carga ao longo do dia">
                <defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#e60000" stopOpacity=".35" /><stop offset="1" stopColor="#e60000" stopOpacity="0" /></linearGradient></defs>
                <polygon points={`0,80 ${points} 100,80`} fill="url(#fill)" />
                <polyline points={points} fill="none" stroke="#ff3b3b" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
                <line x1={marker} x2={marker} y1="5" y2="78" stroke="white" strokeDasharray="3 3" strokeOpacity=".7" vectorEffect="non-scaling-stroke" />
                <circle cx={marker} cy="18" r="2.8" fill="#fff" stroke="#e60000" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
            <div className="flex justify-between text-[10px] font-medium text-slate-500"><span>00h</span><span>06h</span><span>12h</span><span>18h</span><span>24h</span></div>
            <label htmlFor="hour" className="sr-only">Selecione o horário</label>
            <input id="hour" type="range" min="0" max="24" value={hour} onChange={(e) => setHour(Number(e.target.value))} className="mt-3 h-1.5 w-full cursor-pointer accent-red-500" />
          </div>
          <div className="mt-5 grid grid-cols-[1fr_auto] items-end gap-4 border-t border-slate-100 pt-5">
            <div><p className="text-xs font-bold uppercase tracking-[.12em] text-slate-400">Agora são</p><p className="mt-1 text-3xl font-black tracking-tight text-slate-900">{String(hour).padStart(2, '0')}<span className="text-base font-bold text-slate-400">h00</span></p></div>
            <div className="text-right"><p className="text-xs font-bold uppercase tracking-[.12em] text-slate-400">Carga estimada</p><p className="mt-1 text-lg font-extrabold text-red-600">{load}%</p></div>
          </div>
        </div>
      </section>

      <section id="explore" className="mt-24 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-10"><div className="flex size-11 items-center justify-center rounded-xl bg-red-600"><Zap className="size-5" /></div><h2 className="mt-8 max-w-md text-3xl font-black tracking-tight sm:text-4xl">O problema é real. A solução precisa ser <span className="text-red-400">variável.</span></h2><p className="mt-5 max-w-md leading-7 text-slate-400">Durante o dia, a geração solar reduz a carga e eleva a tensão. O reator fixo responde como um interruptor: cada manobra tem um custo.</p></div>
        <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10"><div className="flex items-center justify-between"><div className="flex size-11 items-center justify-center rounded-xl bg-red-50 text-red-600"><SlidersHorizontal className="size-5" /></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">CENÁRIO ATUAL</span></div><p className="mt-8 text-sm font-bold uppercase tracking-[.12em] text-slate-400">Com reatores fixos</p><p className="mt-2 text-xl font-extrabold leading-snug text-slate-900">AGORA SÃO {String(hour).padStart(2, '0')}h. NESTE MOMENTO DE CARGA LEVE, <span className="text-red-600">{reactors} REATORES</span> FIXOS DEVEM ESTAR LIGADOS NO SIN.</p><div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5 text-sm font-semibold text-slate-600"><ShieldCheck className="size-5 text-red-600" /> O VSR transforma degraus agressivos em ajustes suaves.</div></div>
      </section>

      <section className="mt-20 grid gap-5 border-t border-slate-200 pt-10 sm:grid-cols-3"><div><p className="text-4xl font-black tracking-tight text-slate-950">01</p><p className="mt-2 font-bold text-slate-900">Medir</p><p className="mt-1 text-sm leading-6 text-slate-500">Entender o comportamento da rede em cada hora do dia.</p></div><div><p className="text-4xl font-black tracking-tight text-slate-950">02</p><p className="mt-2 font-bold text-slate-900">Modular</p><p className="mt-1 text-sm leading-6 text-slate-500">Ajustar o reativo com a precisão que a rede exige.</p></div><div><p className="text-4xl font-black tracking-tight text-slate-950">03</p><p className="mt-2 font-bold text-slate-900">Estabilizar</p><p className="mt-1 text-sm leading-6 text-slate-500">Mais confiabilidade, menos desgaste e um SIN mais resiliente.</p></div></section>
    </div>
  )
}

function Placeholder({ type }: { type: Exclude<TabId, 'about'> }) {
  const isData = type === 'data'
  return <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 pt-24 text-center"><div className="flex size-16 items-center justify-center rounded-2xl bg-red-50 text-red-600"><>{isData ? <BarChart3 className="size-7" /> : <Gauge className="size-7" />}</></div><p className="mt-7 text-xs font-bold uppercase tracking-[.2em] text-red-600">Módulo em desenvolvimento</p><h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">{isData ? 'Pesquisas e dados' : 'Simulador VSR'}</h1><p className="mt-4 max-w-lg leading-7 text-slate-500">{isData ? 'Aqui você poderá explorar os dados de carga e tensão do sistema interligado nacional.' : 'Em breve, experimente diferentes cenários e veja como o reator variável responde à rede.'}</p><div className="mt-8 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700"><Sparkles className="size-4 text-red-600" /> Em breve no PoliVSR</div></div>
}

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabId>('about')
  const [menuOpen, setMenuOpen] = useState(false)
  return <main className="min-h-screen bg-[#fafafa] text-slate-950"><header className="fixed inset-x-0 top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"><button onClick={() => setActiveTab('about')} className="flex items-center gap-3" aria-label="Ir para o início"><span className="flex size-9 items-center justify-center rounded-lg bg-red-600 text-sm font-black text-white">P</span><span className="text-lg font-black tracking-[-.04em]">Poli<span className="text-red-600">VSR</span></span></button><nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">{tabs.map((tab) => { const Icon = tab.icon; return <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition ${activeTab === tab.id ? 'bg-red-50 text-red-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}><Icon className="size-4" />{tab.label}</button> })}</nav><button className="rounded-lg p-2 text-slate-700 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button></div>{menuOpen && <nav className="flex flex-col gap-1 border-t border-slate-100 bg-white p-4 md:hidden">{tabs.map((tab) => <button key={tab.id} onClick={() => { setActiveTab(tab.id); setMenuOpen(false) }} className={`rounded-lg px-4 py-3 text-left text-sm font-bold ${activeTab === tab.id ? 'bg-red-50 text-red-700' : 'text-slate-600'}`}>{tab.label}</button>)}</nav>}</header>{activeTab === 'about' ? <AboutPage /> : <Placeholder type={activeTab} />}</main>
}
