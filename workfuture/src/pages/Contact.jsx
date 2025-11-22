import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({...form,[e.target.name]: e.target.value})
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
    setTimeout(()=>{ setSent(false); setForm({name:'',email:'',message:''}) }, 1400)
  }

  return (
    <div className="page" style={{padding:32,maxWidth:700,margin:'0 auto'}}>
      <h2 style={{textAlign:'center',marginBottom:8}}>Contact</h2>
      <p style={{textAlign:'center',marginBottom:18}}>Use o formulário abaixo para falar com a equipe.</p>
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:12}}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nome" className="finput" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="finput" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Mensagem" className="ftextarea" />
        <div style={{display:'flex',justifyContent:'flex-end',gap:12}}>
          <button type="reset" className="btn" onClick={() => setForm({name:'',email:'',message:''})}>Limpar</button>
          <button type="submit" className="btn primary">Enviar</button>
        </div>
        {sent && <div className="message-sent">Formulário enviado com sucesso!</div>}
      </form>
    </div>
  )
}
