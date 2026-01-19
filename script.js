function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const cvFiles = {
  en: './assets/Resume_Pablo-Santiago.pdf',
  pt: './assets/Curriculo_Pablo-Santiago.pdf'
};

const translations = {
  en: {
    nav_about: "About",
    nav_exp: "Experience",
    nav_proj: "Projects",
    nav_contact: "Contact",
    profile_hello: "Hello, I'm",
    profile_role: "Computer Engineering Student | Full Stack",
    btn_cv: "Download CV",
    btn_contact: "Contact Info",
    section_know_more: "Get To Know More",
    about_title: "About Me",
    about_exp_desc: "2+ years <br />DevOps & FullStack",
    about_edu_title: "Education",
    about_edu_desc: "IT Technician. IFCE<br />B.Sc. Comp. Engineering (Ongoing)",
    about_text: "As an IT Technician and Computer Engineering student, I bridge the gap between hardware and software. My expertise ranges from low-level IoT solutions with ESP32 to modern Web & Mobile applications, always focusing on automation and efficient infrastructure.",
    section_explore: "Explore My",
    exp_backend_title: "Backend & DevOps",
    exp_frontend_title: "Frontend & Mobile",
    level_basic: "Basic",
    level_inter: "Intermediate",
    level_exp: "Experienced",
    section_browse: "Browse My Recent",
    proj_1_title: "Molecule Database App<br/>Next.js, TypeScript, NeonDB",
    proj_2_title: "IoT Beehive Monitor<br/>ESP32, C++, Sensors",
    proj_3_title: "Desmorona Brasil (iOS)<br/>Swift, Apple Academy",
    section_touch: "Get in Touch"
  },
  pt: {
    nav_about: "Sobre",
    nav_exp: "Experiência",
    nav_proj: "Projetos",
    nav_contact: "Contato",
    profile_hello: "Olá, eu sou",
    profile_role: "Estudante de Eng. de Computação | Full Stack",
    btn_cv: "Baixar Currículo",
    btn_contact: "Contato",
    section_know_more: "Saiba mais",
    about_title: "Sobre Mim",
    about_exp_desc: "2+ anos <br />DevOps & FullStack",
    about_edu_title: "Educação",
    about_edu_desc: "Téc. em Informática - IFCE<br />Eng. de Computação (Cursando)",
    about_text: "Como Técnico em Informática e estudante de Engenharia, uno o hardware ao software. Minha experiência vai desde soluções IoT de baixo nível com ESP32 até aplicações Web e Mobile modernas, sempre focando em automação e infraestrutura eficiente.",
    section_explore: "Explore Minha",
    exp_backend_title: "Backend & DevOps",
    exp_frontend_title: "Frontend & Mobile",
    level_basic: "Básico",
    level_inter: "Intermediário",
    level_exp: "Experiente",
    section_browse: "Veja meus recentes",
    proj_1_title: "App Banco de Moléculas<br/>Next.js, TypeScript, NeonDB",
    proj_2_title: "Monitor de Colmeias IoT<br/>ESP32, C++, Sensores",
    proj_3_title: "Desmorona Brasil (iOS)<br/>Swift, Apple Academy",
    section_touch: "Entre em Contato"
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      if (element.innerHTML.includes('<') && element.innerHTML.includes('>')) {
         element.innerHTML = translations[lang][key];
      } else {
         element.innerText = translations[lang][key];
      }
    }
  });

  const btnCv = document.getElementById("btn-cv");
  if (btnCv) {
    btnCv.onclick = function() {
      window.open(cvFiles[lang]);
    };
  }

  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));

  const activeBtnDesktop = document.getElementById(`btn-${lang}-desktop`);
  const activeBtnMobile = document.getElementById(`btn-${lang}-mobile`);
  
  if (activeBtnDesktop) activeBtnDesktop.classList.add('active');
  if (activeBtnMobile) activeBtnMobile.classList.add('active');
}