import React, { useState, useEffect } from 'react'

export default function ModalPerfil({ profile, onClose, onRecommend, onSendMessage }) {
  const [closing, setClosing] = useState(false)
  const [showMessageBox, setShowMessageBox] = useState(false)
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => onClose(), 240)
  }

  const handleSend = () => {
    if (!message.trim()) return
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setMessage('')
      setShowMessageBox(false)
      onSendMessage && onSendMessage(profile)
    }, 1400)
  }

  return (
    <div className={`modal-backdrop ${closing ? 'fade-out' : 'fade-in'}`} onClick={handleClose}>
      <div className={`modal ${closing ? 'modal-out' : 'modal-in'}`} onClick={(e)=>e.stopPropagation()}>
        <header className="modal-header">
          <div className="modal-title" style={{display:'flex',gap:12,alignItems:'center'}}>
            <img src={profile.foto} alt={profile.nome} className="avatar-large" />
            <div>
              <h2 style={{margin:0}}>{profile.nome}</h2>
              <div className="muted" style={{marginTop:6}}>{profile.cargo} • {profile.localizacao}</div>
            </div>
          </div>
          <button className="btn-close" onClick={handleClose}>✕</button>
        </header>

        <div className="modal-content">
          <section>
            <h4>Sobre</h4>
            <p>{profile.resumo}</p>
          </section>

          <section>
            <h4>Habilidades Técnicas</h4>
            <div className="tag-row spaced">
              {profile.habilidadesTecnicas.map((t,i)=>(<span key={i} className="tag">{t}</span>))}
            </div>
          </section>

          <section>
            <h4>Soft Skills</h4>
            <div className="tag-row spaced">
              {profile.softSkills.map((s,i)=>(<span key={i} className="tag">{s}</span>))}
            </div>
          </section>

          <section>
            <h4>Experiências</h4>
            {profile.experiencias.map((e,i)=>(
              <div key={i} className="exp">
                <strong>{e.cargo}</strong>
                <div className="muted">{e.empresa} • {e.inicio} - {e.fim}</div>
                <p style={{marginTop:8}}>{e.descricao}</p>
              </div>
            ))}
          </section>

          <section>
            <h4>Formação</h4>
            {profile.formacao.map((f,i)=>(
              <div key={i} style={{marginBottom:8}}>
                <strong>{f.curso}</strong>
                <div className="muted">{f.instituicao} • {f.ano}</div>
              </div>
            ))}
          </section>

          <section>
            <h4>Projetos</h4>
            {profile.projetos && profile.projetos.map((p,i)=>(
              <div key={i} className="exp">
                <strong>{p.titulo}</strong>
                <div className="muted" style={{marginTop:6}}>
                  <a className="link-btn" href={p.link} target="_blank" rel="noreferrer">{p.link}</a>
                </div>
                <p style={{marginTop:8}}>{p.descricao}</p>
              </div>
            ))}
          </section>

          <section>
            <h4>Certificações</h4>
            <ul>
              {profile.certificacoes && profile.certificacoes.map((c,i)=>(<li key={i}>{c}</li>))}
            </ul>
          </section>

          <section>
            <h4>Idiomas</h4>
            {profile.idiomas && profile.idiomas.map((li,i)=>(<div key={i}>{li.idioma} — {li.nivel}</div>))}
          </section>

          <section>
            <h4>Áreas de Interesse</h4>
            <div className="tag-row spaced">
              {profile.areaInteresses && profile.areaInteresses.map((a,i)=>(<span key={i} className="tag">{a}</span>))}
            </div>
          </section>

          <div className="spaced-actions" style={{marginTop:18}}>
            <button className="btn primary textured" onClick={()=>{onRecommend && onRecommend(profile)}}>Recomendar Profissional</button>
            {!showMessageBox && <button className="btn textured" onClick={()=>setShowMessageBox(true)}>Enviar Mensagem</button>}
          </div>

          {showMessageBox && (
            <div className="message-box">
              <textarea placeholder="Digite sua mensagem..." value={message} onChange={(e)=>setMessage(e.target.value)} />
              <div style={{display:'flex',justifyContent:'flex-end',gap:12,marginTop:6}}>
                <button className="btn" onClick={()=>setShowMessageBox(false)}>Cancelar</button>
                <button className="btn primary textured" onClick={handleSend}>Enviar</button>
              </div>
            </div>
          )}

          {sent && <div className="message-sent">Mensagem enviada com sucesso!</div>}
        </div>
      </div>
    </div>
  )
}
