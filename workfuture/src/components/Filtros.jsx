import React from 'react'

export default function Filtros({
  searchTerm, setSearchTerm,
  selectedArea, setSelectedArea,
  selectedCity, setSelectedCity,
  selectedTech, setSelectedTech,
  areas, cidades, tecnologias, resultadosCount
}) {
  return (
    <div className="filtros">
      <div className="filtros-grid">
        <input placeholder="Buscar profissionais..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <select value={selectedArea} onChange={(e)=>setSelectedArea(e.target.value)}>
          <option value="">Áreas</option>
          {areas.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
        <select value={selectedCity} onChange={(e)=>setSelectedCity(e.target.value)}>
          <option value="">Cidades</option>
          {cidades.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={selectedTech} onChange={(e)=>setSelectedTech(e.target.value)}>
          <option value="">Tecnologias</option>
          {Array.from(tecnologias).slice(0,20).map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div className="result-count">{resultadosCount} profissionais encontrados</div>
    </div>
  )
}
