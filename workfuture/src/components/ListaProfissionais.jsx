import React from 'react'
import CardProfissional from './CardProfissional'

export default function ListaProfissionais({ profissionais, setSelectedProfile }) {
  return (
    <section className="grid-cards">
      {profissionais.map((p, idx) => (
        <CardProfissional key={p.id} prof={p} index={idx} onOpen={() => setSelectedProfile(p)} />
      ))}
    </section>
  )
}
