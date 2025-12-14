import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Facebook,
  Shield,
  Code,
  Terminal,
  ExternalLink,
  Server,
  Cpu,
  Bug,
  Menu,
  X,
  ChevronRight,
  Lock,
  Zap,
  AlertTriangle,
  Flame,
  GitBranch,
  Languages,
} from 'lucide-react';

/**
 * Home page component. This page renders the entire portfolio application.
 *
 * The design is built with TailwindCSS and uses lucide-react for icons.
 * A language toggle is available in the footer which switches between
 * English (`en`) and Serbian (`sr`) content strings defined in the
 * `content` dictionary below. When switching languages, the page will
 * re-render with the appropriate translations.
 */
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('en'); // 'en' or 'sr'

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'sr' : 'en'));
    // Optionally scroll to top on language switch
  };

  // Content Dictionary
  const content = {
    en: {
      nav: {
        home: 'Home',
        security: 'Security',
        projects: 'Projects',
        contact: 'Contact',
      },
      hero: {
        badge: 'Staklopati Founder & Team Lead',
        role: 'Full Stack Developer',
        subRole: '& White Hat Hacker',
        desc: 'Building fast, scalable, and secure web solutions. Specialized in the React ecosystem and security analysis (Meta Bounty Hunter). Combining engineering with a security-first approach.',
        ctaProject: 'View Projects',
      },
      security: {
        title: 'Security',
        subtitle: '& Engineering',
        desc: "I don't just write code that works; I write code that is secure. My experience in the 'White Hat' world guarantees the safety of your infrastructure.",
        cards: [
          {
            title: 'White Hat Hacker',
            desc: 'Ethical hacking, penetration testing, and vulnerability assessment. Protecting critical infrastructure.',
          },
          {
            title: 'Security Architecture',
            desc: "Implementing 'Secure by Design' principles. Code review and protection against modern attack vectors.",
          },
          {
            title: 'Meta Bounty Hunter',
            desc: 'Recognized participant in the Meta (Facebook) Bug Bounty program. Focused on platform security.',
          },
        ],
        report: {
          header: 'Critical Vulnerability Disclosure: Meta',
          badge: 'High Impact Finding',
          intro: 'Conducted independent security research under the <strong>Meta Bug Bounty</strong> program, focusing on critical attack vectors in the <strong>WhatsApp</strong> ecosystem.',
          discoveryTitle: 'Discovery: WhatsApp Chat Lock Bypass',
          discoveryDesc:
            'Identified a critical <strong>High Impact</strong> vulnerability allowing complete bypass of security mechanisms (PIN/Biometrics) for locked chats. The vulnerability allowed unauthorized access to private content and interaction with \'protected\' users via Share/Forward functionality manipulation.',
          severityLabel: 'Severity: HIGH',
          vectorLabel: 'Vector: Auth Bypass',
          impact:
            'This finding directly demonstrates a vulnerability in access control at the application logic level, compromising the privacy of millions of users on Android and Windows platforms, regardless of internal classification criteria.',
        },
      },
      projects: {
        title: 'Featured',
        subtitle: 'Projects',
        desc: 'From e-commerce platforms to security systems.',
        viewAll: 'View all code',
        items: [
          {
            desc: 'Complete food ordering ecosystem. Developed for high performance and scalability.',
            type: 'Platform',
          },
          {
            desc: 'Advanced service solution for the Slovak market. Business process optimization.',
            type: 'Service',
          },
          {
            desc: 'Revolutionary Staklopati team application. Innovative approach and modern architecture.',
            type: 'Flagship',
          },
          {
            desc: 'Development of complex web solutions for private clients. Focus on security and performance.',
            type: 'Portfolio',
          },
        ],
      },
      footer: {
        tagline: 'Crafting digital experiences and securing digital boundaries.',
        team: 'Staklopati Team.',
        rights: 'Mark House. All rights reserved.',
        secure: 'Secure by Design',
        langBtn: 'Prebaci na Srpski',
      },
    },
    sr: {
      nav: {
        home: 'Početna',
        security: 'Security',
        projects: 'Projekti',
        contact: 'Kontakt',
      },
      hero: {
        badge: 'Osnivač i Vođa Staklopati Tima',
        role: 'Full Stack Developer',
        subRole: '& White Hat Hacker',
        desc: 'Kreiram brza, skalabilna i sigurna web rešenja. Specijalizovan za React ekosistem i sigurnosnu analizu (Meta Bounty Hunter). Kombinujem inženjerstvo sa security-first pristupom.',
        ctaProject: 'Pogledaj Projekte',
      },
      security: {
        title: 'Security',
        subtitle: '& Engineering',
        desc: "Ne pišem samo kod koji radi, pišem kod koji je siguran. Moje iskustvo u 'White Hat' svetu garantuje bezbednost vaše infrastrukture.",
        cards: [
          {
            title: 'White Hat Hacker',
            desc: 'Etičko hakovanje, penetration testing i provera ranjivosti sistema. Zaštita kritične infrastrukture.',
          },
          {
            title: 'Sigurnosna Arhitektura',
            desc: "Implementacija 'Secure by Design' principa. Revizija koda i zaštita od modernih vektora napada.",
          },
          {
            title: 'Meta Bounty Hunter',
            desc: 'Priznati učesnik u Meta (Facebook) Bug Bounty programu. Fokus na sigurnost platformi.',
          },
        ],
        report: {
          header: 'Kritična Ranjivost: Meta',
          badge: 'High Impact Finding',
          intro: 'Sproveo sam nezavisno sigurnosno istraživanje u okviru <strong>Meta Bug Bounty</strong> programa, fokusirajući se na kritične vektore napada u <strong>WhatsApp</strong> ekosistemu.',
          discoveryTitle: 'Otkriće: WhatsApp Chat Lock Bypass',
          discoveryDesc:
            'Identifikovao sam kritičan <strong>High Impact</strong> propust koji omogućava potpuno zaobilaženje sigurnosnih mehanizama (PIN/Biometrija) za zaključana ćaskanja. Ranjivost je dozvoljavala neovlašćen pristup privatnom sadržaju i interakciju sa \'zaštićenim\' korisnicima putem manipulacije Share/Forward funkcionalnosti.',
          severityLabel: 'Ozbiljnost: HIGH',
          vectorLabel: 'Vektor: Auth Bypass',
          impact:
            'Ovo otkriće direktno demonstrira ranjivost u kontroli pristupa na nivou aplikativne logike, ugrožavajući privatnost miliona korisnika na Android i Windows platformama, nezavisno od internih kriterijuma klasifikacije.',
        },
      },
      projects: {
        title: 'Istaknuti',
        subtitle: 'Projekti',
        desc: 'Od e-commerce platformi do sigurnosnih sistema.',
        viewAll: 'Pogledaj sav kod',
        items: [
          {
            desc: 'Kompletan ekosistem za naručivanje hrane. Razvijen za visoke performanse i skalabilnost.',
            type: 'Platforma',
          },
          {
            desc: 'Napredno rešenje za servisne usluge na slovačkom tržištu. Optimizacija poslovnih procesa.',
            type: 'Servis',
          },
          {
            desc: 'Revolucionarna aplikacija Staklopati tima. Inovativan pristup i moderna arhitektura.',
            type: 'Flagship',
          },
          {
            desc: 'Razvoj kompleksnih web rešenja za privatne klijente. Fokus na bezbednost i performanse.',
            type: 'Portfolio',
          },
        ],
      },
      footer: {
        tagline: 'Kreiram digitalna iskustva i osiguravam digitalne granice.',
        team: 'Staklopati Team.',
        rights: 'Mark House. All rights reserved.',
        secure: 'Secure by Design',
        langBtn: 'Switch to English',
      },
    },
  };

  const t = content[lang];

  const socialLinks = [
    { icon: <Facebook size={24} />, url: 'https://www.facebook.com/markhouse369/', label: 'Facebook' },
    { icon: <Github size={24} />, url: 'https://github.com/MrHouse111', label: 'GitHub' },
    { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/mrhouse111/', label: 'LinkedIn' },
  ];

  const projects = [
    {
      title: 'Klopati.rs',
      description: t.projects.items[0].desc,
      tags: ['React', 'Node.js', 'E-commerce', 'High-Load'],
      link: 'https://klopati.rs',
      featured: true,
      type: t.projects.items[0].type,
    },
    {
      title: 'NemoServis.sk',
      description: t.projects.items[1].desc,
      tags: ['Full Stack', 'Business Logic', 'International'],
      link: 'https://nemoservis.sk',
      featured: true,
      type: t.projects.items[1].type,
    },
    {
      title: 'Staklopati App',
      description: t.projects.items[2].desc,
      tags: ['Mobile', 'Innovation', 'Team Lead'],
      link: '#',
      featured: true,
      type: t.projects.items[2].type,
    },
    {
      title: 'Enterprise Solutions (4+)',
      description: t.projects.items[3].desc,
      tags: ['Custom Dev', 'B2B', 'Web Apps'],
      link: '#',
      featured: false,
      type: t.projects.items[3].type,
    },
  ];

  const securityAchievements = [
    {
      title: t.security.cards[0].title,
      description: t.security.cards[0].desc,
      icon: <Shield className="text-emerald-400" size={32} />,
    },
    {
      title: t.security.cards[1].title,
      description: t.security.cards[1].desc,
      icon: <Terminal className="text-emerald-400" size={32} />,
    },
    {
      title: t.security.cards[2].title,
      description: t.security.cards[2].desc,
      icon: <Bug className="text-emerald-400" size={32} />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo(0, 0);
                }
              }}
            >
              {/* Logo icon */}
              <div className="bg-emerald-500/10 p-1.5 rounded-lg border border-emerald-500/20">
                <Terminal className="text-emerald-500 w-5 h-5" />
              </div>
              {/* Logo text */}
              <span className="font-bold text-xl tracking-tight text-white">
                Mark <span className="text-emerald-500">House</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  {t.nav.home}
                </a>
                <a href="#security" className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  {t.nav.security}
                </a>
                <a href="#projects" className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  {t.nav.projects}
                </a>
                <a
                  href="#contact"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-lg shadow-emerald-900/20"
                >
                  {t.nav.contact}
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-white p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-emerald-400"
              >
                {t.nav.home}
              </a>
              <a
                href="#security"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-emerald-400"
              >
                {t.nav.security}
              </a>
              <a
                href="#projects"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-emerald-400"
              >
                {t.nav.projects}
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-emerald-400 font-bold"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Background Atmosphere */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t.hero.badge}
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-8">
            {t.hero.role} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              {t.hero.subRole}
            </span>
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">{t.hero.desc}</p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center w-full">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20 hover:scale-105"
            >
              {t.hero.ctaProject} <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <div className="flex gap-6 items-center justify-center px-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white hover:scale-110 transition-all hover:text-emerald-400"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              <span className="text-emerald-500">{t.security.title}</span> {t.security.subtitle}
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">{t.security.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {securityAchievements.map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center mb-4 border border-slate-800 group-hover:border-emerald-500/30">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Featured Bug Bounty Report */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Bug size={150} />
            </div>

            <div className="p-1 bg-gradient-to-r from-emerald-500/20 via-slate-800 to-slate-800"></div>

            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-6 md:items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center border border-red-500/20 animate-pulse">
                    <AlertTriangle className="text-red-500" size={32} />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{t.security.report.header}</h3>
                      <p className="text-emerald-400 font-mono text-sm mt-1">Report ID: 122212540058251853</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-medium border border-red-500/20">
                      <Lock size={12} className="mr-2" /> {t.security.report.badge}
                    </span>
                  </div>

                  <div className="prose prose-invert max-w-none text-slate-400 space-y-4">
                    <p
                      dangerouslySetInnerHTML={{ __html: t.security.report.intro }}
                    />

                    <div className="bg-slate-900/80 rounded-lg p-6 border border-slate-800 my-6 shadow-2xl shadow-black/50">
                      <h4 className="text-white font-semibold mb-3 flex items-center text-lg">
                        <Zap size={18} className="text-emerald-500 mr-2" />
                        {t.security.report.discoveryTitle}
                      </h4>
                      <p
                        className="text-sm leading-relaxed mb-4 text-slate-300"
                        dangerouslySetInnerHTML={{ __html: t.security.report.discoveryDesc }}
                      />
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-red-900/20 rounded text-xs text-red-300 border border-red-900/30 font-mono">
                          {t.security.report.severityLabel}
                        </span>
                        <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700 font-mono">
                          {t.security.report.vectorLabel}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-500 italic border-l-2 border-emerald-500 pl-4">
                      {t.security.report.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t.projects.title} <span className="text-emerald-500">{t.projects.subtitle}</span>
            </h2>
            <p className="mt-4 text-slate-400">{t.projects.desc}</p>
          </div>
          <a
            href="https://github.com/MrHouse111"
            className="hidden md:flex items-center text-emerald-400 hover:text-emerald-300 font-medium mt-4 md:mt-0"
          >
            {t.projects.viewAll} <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-2xl hover:shadow-emerald-900/10"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-10 pointer-events-none"></div>

              <div className="p-8 relative z-20 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 rounded-full border border-emerald-500/20">
                    {project.type}
                  </div>
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-sm text-slate-300 bg-slate-950 rounded border border-slate-700 font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-12 bg-emerald-900/5 border-y border-emerald-500/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-emerald-500 font-mono text-sm mb-8 tracking-widest">TECHNOLOGIES & TOOLS</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <span className="text-xl font-bold text-slate-300 flex items-center gap-2">
              <Code size={20} /> REACT
            </span>
            <span className="text-xl font-bold text-slate-300 flex items-center gap-2">
              <Server size={20} /> NODE.JS
            </span>
            <span className="text-xl font-bold text-slate-300 flex items-center gap-2">
              <Zap size={20} /> NEXT.JS
            </span>
            <span className="text-xl font-bold text-slate-300 flex items-center gap-2">
              <Flame size={20} /> FIREBASE
            </span>
            <span className="text-xl font-bold text-slate-300 flex items-center gap-2">
              <GitBranch size={20} /> GITHUB
            </span>
            <span className="text-xl font-bold text-slate-300 flex items-center gap-2">
              <Shield size={20} /> BURP SUITE
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <Terminal className="text-emerald-500" />
                <span className="font-bold text-xl text-white">Mark House</span>
              </div>
              <p className="text-slate-400 max-w-sm">
                {t.footer.tagline}
                <br />
                {t.footer.team}
              </p>
            </div>

            <div className="flex gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-900 p-3 rounded-full text-slate-400 hover:text-white hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/20 border border-slate-800"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} {t.footer.rights}
            </p>

            <div className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0">
              <p className="flex items-center gap-2 text-emerald-500/70">
                <Lock size={14} /> {t.footer.secure}
              </p>

              {/* Language Switch Button */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-all text-xs font-medium"
              >
                <Languages size={14} /> {t.footer.langBtn}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}