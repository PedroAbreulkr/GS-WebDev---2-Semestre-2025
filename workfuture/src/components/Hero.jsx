import React from 'react'

export default function Hero({ profissionaisCount, areasCount, cidadesCount }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h2 className="hero-title">Conectando talentos ao futuro do trabalho</h2>
        <p className="hero-sub">Descubra profissionais, compartilhe experiência e construa carreiras.</p>
        <div className="hero-metrics">
          <div>
            <div className="hero-num">{profissionaisCount}+</div>
            <span>Profissionais</span>
          </div>
          <div>
            <div className="hero-num">{areasCount}</div>
            <span>Áreas</span>
          </div>
          <div>
            <div className="hero-num">{cidadesCount}</div>
            <span>Cidades</span>
          </div>
        </div>
      </div>
    </section>
  )
}
