import React from 'react'

function renderSkillsPreview(skills) {
  const preview = skills.slice(0,3)
  const extra = Math.max(0, skills.length - 3)
  return { preview, extra }
}

export default function CardProfissional({ prof, index, onOpen }) {
  const style = { animationDelay: `${index * 50}ms` }
  const { preview, extra } = renderSkillsPreview(prof.habilidadesTecnicas)
  return (
    <article className="card card-anim" style={style} onClick={onOpen}>
      <div className="card-body">
        <div style={{display:'flex',gap:12,alignItems:'flex-start'}}>
          <img src={prof.foto} alt={prof.nome} className="avatar" />
          <div style={{flex:1}}>
            <h3 className="card-title">{prof.nome}</h3>
            <p className="card-sub">{prof.cargo}</p>
            <p className="card-resumo">{prof.resumo}</p>
          </div>
        </div>
        <div className="tag-row">
          {preview.map((t,i)=>(<span key={i} className="tag">{t}</span>))}
          {extra > 0 && <span className="tag extra-count">+{extra}</span>}
        </div>
      </div>
    </article>
  )
}
