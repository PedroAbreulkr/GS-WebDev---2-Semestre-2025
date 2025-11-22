import React from 'react'

export default function About() {
  return (
    <div className="page" style={{padding:32,maxWidth:1000,margin:'0 auto',textAlign:'center'}}>
      <h2 style={{marginBottom:8}}>Sobre o WorkFuture</h2>
      <p style={{maxWidth:900,margin:'0 auto 16px',lineHeight:1.6}}>
        WorkFuture é uma plataforma experimental criada no contexto do
        desafio Global Solution para explorar como tecnologia e design podem
        conectar pessoas, competências e propósito. Nosso foco é criar conexões
        mais justas, inclusivas e sustentáveis entre profissionais de diferentes áreas,
        facilitando troca de conhecimentos, visibilidade de habilidades e
        oportunidades de colaboração.
      </p>
      <p style={{maxWidth:900,margin:'0 auto',lineHeight:1.6}}>
        Esta plataforma usa perfis simulados para demonstrar funcionalidades de busca,
        filtros por área, cidade e tecnologia, visualização detalhada de perfis e
        interações rápidas (recomendar, enviar mensagem). O visual segue uma linguagem
        brutalista e urbana, priorizando contraste, legibilidade e impacto.
      </p>
    </div>
  )
}
