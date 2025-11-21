const profissionaisData = [
  {
    id: 1,
    nome: "Ana Silva",
    foto: "https://i.pravatar.cc/150?img=1",
    cargo: "Engenheira de Software",
    resumo: "Especialista em desenvolvimento full-stack com foco em React e Node.js",
    localizacao: "São Paulo/SP",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    softSkills: ["Comunicação", "Liderança", "Resolução de Problemas"],
    experiencias: [{ empresa: "Tech Solutions", cargo: "Engenheira Sênior", inicio: "2022-01", fim: "2024-11", descricao: "Desenvolvimento de aplicações web escaláveis" }],
    formacao: [{ curso: "Engenharia de Software", instituicao: "USP", ano: 2020 }],
    projetos: [{ titulo: "Sistema de Gestão", link: "https://github.com", descricao: "Plataforma completa de gerenciamento" }],
    certificacoes: ["AWS Certified Solutions Architect", "Scrum Master"],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }, { idioma: "Espanhol", nivel: "Intermediário" }],
    areaInteresses: ["IA", "Cloud Computing", "Desenvolvimento Sustentável"]
  },
  {
    id: 2,
    nome: "Carlos Oliveira",
    foto: "https://i.pravatar.cc/150?img=12",
    cargo: "Designer UX/UI",
    resumo: "Designer especializado em criar experiências digitais memoráveis",
    localizacao: "Rio de Janeiro/RJ",
    area: "Design",
    habilidadesTecnicas: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
    softSkills: ["Criatividade", "Empatia", "Trabalho em Equipe"],
    experiencias: [{ empresa: "Design Studio", cargo: "UX Designer", inicio: "2021-03", fim: "2024-11", descricao: "Criação de interfaces intuitivas para aplicativos mobile" }],
    formacao: [{ curso: "Design Gráfico", instituicao: "UFRJ", ano: 2019 }],
    projetos: [{ titulo: "App de Saúde", link: "https://behance.net", descricao: "Design completo de aplicativo de bem-estar" }],
    certificacoes: ["Google UX Design Certificate"],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Design Inclusivo", "Acessibilidade", "Design Systems"]
  },
  {
    id: 3,
    nome: "Mariana Costa",
    foto: "https://i.pravatar.cc/150?img=5",
    cargo: "Cientista de Dados",
    resumo: "Especialista em análise de dados e machine learning",
    localizacao: "Belo Horizonte/MG",
    area: "Dados",
    habilidadesTecnicas: ["Python", "R", "SQL", "TensorFlow", "Pandas"],
    softSkills: ["Pensamento Analítico", "Comunicação", "Curiosidade"],
    experiencias: [{ empresa: "Data Corp", cargo: "Data Scientist", inicio: "2020-06", fim: "2024-11", descricao: "Desenvolvimento de modelos preditivos" }],
    formacao: [{ curso: "Estatística", instituicao: "UFMG", ano: 2018 }],
    projetos: [{ titulo: "Previsão de Vendas", link: "https://github.com", descricao: "Modelo de ML para previsão de vendas" }],
    certificacoes: ["AWS Machine Learning", "Google Data Analytics"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["IA Ética", "Big Data", "Análise Preditiva"]
  },
  {
    id: 4,
    nome: "Pedro Santos",
    foto: "https://i.pravatar.cc/150?img=13",
    cargo: "DevOps Engineer",
    resumo: "Especialista em infraestrutura e automação",
    localizacao: "Curitiba/PR",
    area: "DevOps",
    habilidadesTecnicas: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
    softSkills: ["Resolução de Problemas", "Colaboração", "Adaptabilidade"],
    experiencias: [{ empresa: "Cloud Systems", cargo: "DevOps Engineer", inicio: "2021-01", fim: "2024-11", descricao: "Implementação de CI/CD e automação" }],
    formacao: [{ curso: "Sistemas de Informação", instituicao: "UFPR", ano: 2019 }],
    projetos: [{ titulo: "Pipeline Automatizado", link: "https://github.com", descricao: "Sistema completo de CI/CD" }],
    certificacoes: ["Kubernetes Administrator", "AWS DevOps Professional"],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Automação", "Cloud Native", "Segurança"]
  },
  {
    id: 5,
    nome: "Julia Mendes",
    foto: "https://i.pravatar.cc/150?img=9",
    cargo: "Product Manager",
    resumo: "Gestora de produtos digitais com foco em inovação",
    localizacao: "São Paulo/SP",
    area: "Produto",
    habilidadesTecnicas: ["Jira", "Miro", "Analytics", "SQL", "A/B Testing"],
    softSkills: ["Liderança", "Negociação", "Visão Estratégica"],
    experiencias: [{ empresa: "Tech Innovations", cargo: "Product Manager", inicio: "2020-08", fim: "2024-11", descricao: "Gestão de produtos digitais B2B" }],
    formacao: [{ curso: "Administração", instituicao: "FGV", ano: 2018 }],
    projetos: [{ titulo: "Plataforma SaaS", link: "https://example.com", descricao: "Desenvolvimento de produto do zero" }],
    certificacoes: ["Certified Product Manager", "Agile Leadership"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }, { idioma: "Francês", nivel: "Intermediário" }],
    areaInteresses: ["Inovação", "UX Research", "Growth Hacking"]
  }
]

const firstNames = ["Lucas","Mariana","Felipe","Carolina","Guilherme","Beatriz","Rafael","Laura","Mateus","Isabela","Ricardo","Camila","Bruno","Aline","Thiago","Marina","Daniel","Sofia","Eduardo","Paula"]
const lastNames = ["Silva","Souza","Oliveira","Santos","Pereira","Costa","Almeida","Lima","Gomes","Ribeiro","Fernandes","Carvalho","Martins","Rocha","Araújo","Barbosa","Pinto","Nunes","Teixeira","Mendes"]

function randItem(arr){ return arr[Math.floor(Math.random()*arr.length)] }

export default function gerarProfissionais() {
  const cargos = [
    "Desenvolvedor Full Stack","Designer UI","Analista de Dados","Gerente de Projetos",
    "QA Engineer","Desenvolvedor Backend","Desenvolvedor Frontend","Scrum Master",
    "Business Analyst","Tech Lead","CTO","Engenheiro de ML"
  ]

  const areas = ["Desenvolvimento","Design","Dados","Gestão","QA","DevOps","Produto"]

  const cidades = [
    "São Paulo/SP","Rio de Janeiro/RJ","Belo Horizonte/MG","Curitiba/PR",
    "Porto Alegre/RS","Brasília/DF","Salvador/BA","Recife/PE"
  ]

  const techs = [
    "React","Python","Java","JavaScript","TypeScript","AWS","Docker","Kubernetes","SQL","MongoDB","Figma","Photoshop","Sketch"
  ]

  const profissionais = [...profissionaisData]

  for (let i = 6; i <= 65; i++) {
    const nome = `${randItem(firstNames)} ${randItem(lastNames)}`
    profissionais.push({
      id: i,
      nome,
      foto: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
      cargo: randItem(cargos),
      resumo: "Profissional experiente e dedicado ao futuro do trabalho",
      localizacao: randItem(cidades),
      area: randItem(areas),
      habilidadesTecnicas: Array.from(
        { length: 3 + Math.floor(Math.random() * 4) },
        () => randItem(techs)
      ).filter((v, idx, arr) => arr.indexOf(v) === idx),
      softSkills: ["Comunicação", "Trabalho em Equipe", "Liderança"],
      experiencias: [
        { empresa: "Tech Company", cargo: "Profissional", inicio: "2020-01", fim: "2024-11", descricao: "Desenvolvimento e inovação" }
      ],
      formacao: [
        { curso: "Tecnologia", instituicao: "Universidade", ano: 2018 }
      ],
      projetos: [
        { titulo: "Projeto Pessoal", link: "https://github.com", descricao: "Projeto desenvolvido para aprimoramento técnico" }
      ],
      certificacoes: ["Certificação Profissional"],
      idiomas: [{ idioma: "Inglês", nivel: "Intermediário" }],
      areaInteresses: ["Tecnologia","Inovação"]
    })
  }

  return profissionais
}
