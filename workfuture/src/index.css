import React, { useState, useEffect, useMemo } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Filtros from './components/Filtros'
import ListaProfissionais from './components/ListaProfissionais'
import ModalPerfil from './components/ModalPerfil'
import gerarProfissionais from './data/profissionaisData'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArea, setSelectedArea] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedTech, setSelectedTech] = useState('')
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [showMessage, setShowMessage] = useState(false)

  const profissionais = useMemo(() => gerarProfissionais(), [])

  const areas = [...new Set(profissionais.map(p => p.area))]
  const cidades = [...new Set(profissionais.map(p => p.localizacao))]
  const tecnologias = [...new Set(profissionais.flatMap(p => p.habilidadesTecnicas))]

  const profissionaisFiltrados = useMemo(() => {
    return profissionais.filter(prof => {
      const q = searchTerm.toLowerCase()
      const matchSearch =
        prof.nome.toLowerCase().includes(q) ||
        prof.cargo.toLowerCase().includes(q)
      const matchArea = !selectedArea || prof.area === selectedArea
      const matchCity = !selectedCity || prof.localizacao === selectedCity
      const matchTech = !selectedTech || prof.habilidadesTecnicas.includes(selectedTech)
      return matchSearch && matchArea && matchCity && matchTech
    })
  }, [profissionais, searchTerm, selectedArea, selectedCity, selectedTech])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const handleRecommend = (prof) => {
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 1800)
  }

  const handleSendMessage = (prof) => {
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 1800)
  }

  const location = useLocation()

  return (
    <div className="app-root">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <>
            <Hero profissionaisCount={profissionais.length} areasCount={areas.length} cidadesCount={cidades.length} />
            <main className="container">
              <Filtros
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedArea={selectedArea}
                setSelectedArea={setSelectedArea}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                selectedTech={selectedTech}
                setSelectedTech={setSelectedTech}
                areas={areas}
                cidades={cidades}
                tecnologias={tecnologias}
                resultadosCount={profissionaisFiltrados.length}
              />
              <ListaProfissionais profissionais={profissionaisFiltrados} setSelectedProfile={setSelectedProfile} />
            </main>
          </>
        }/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {selectedProfile && (
        <ModalPerfil
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
          onRecommend={() => handleRecommend(selectedProfile)}
          onSendMessage={() => handleSendMessage(selectedProfile)}
        />
      )}

      {showMessage && (
        <div className="success-popup">Mensagem enviada com sucesso!</div>
      )}

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">WorkFuture</div>
          <div className="footer-links">© 2025 WorkFuture — Global Solution • FIAP</div>
        </div>
      </footer>
    </div>
  )
}
