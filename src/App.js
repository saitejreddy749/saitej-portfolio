import React, { useEffect, useState } from 'react';
import { FiArrowDown, FiArrowRight, FiArrowUpRight, FiLinkedin, FiMail, FiMapPin, FiMenu, FiX } from 'react-icons/fi';
import { education, focusAreas, profile, projects, skills } from './profile';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
];

function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -4% 0px' });

    elements.forEach((element) => observer.observe(element));
    document.documentElement.classList.add('motion-ready');
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label={`${profile.name}, back to top`}>
          <span className="brand-mark">{profile.initials}<span className="brand-dot">.</span></span>
          <span className="brand-name">{profile.name}</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav id="primary-navigation" className={`navigation ${menuOpen ? 'navigation-open' : ''}`} aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <FiArrowUpRight aria-hidden="true" /></a>
        </nav>
      </div>
      <div className="reading-progress" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden="true" />
    </header>
  );
}

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow"><span className="section-number">{number}</span> {eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> SOFTWARE DEVELOPMENT / APPLIED AI</p>
          <h1>{profile.tagline}</h1>
          <p className="hero-description">{profile.introduction}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <FiArrowUpRight aria-hidden="true" /></a>
            <a className="button button-secondary" href={`mailto:${profile.email}`}>Get in touch <FiArrowRight aria-hidden="true" /></a>
          </div>
          <p className="hero-location"><FiMapPin aria-hidden="true" /> {profile.location}</p>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="portrait-frame">
            {profile.photo ? (
              <img src={`${process.env.PUBLIC_URL}/${profile.photo}`} alt={profile.name} />
            ) : (
              <div className="portrait-placeholder" role="img" aria-label={`${profile.name} initials`}>
                <span>{profile.initials}</span>
              </div>
            )}
            <div className="portrait-caption"><span>SOFTWARE</span><span>×</span><span>APPLIED AI</span></div>
          </div>
          <span className="floating-code" aria-hidden="true">&lt;build /&gt;</span>
          <div className="floating-note" aria-hidden="true"><span className="status-dot" /> Ideas into working systems</div>
        </div>
      </div>
      <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <FiArrowDown aria-hidden="true" /></a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading number="01 /" eyebrow="ABOUT ME" title="Curious about the problem. Focused on the solution." />
        <div className="about-grid reveal">
          <p className="about-statement">I like work that sits at the intersection of <em>people, data and software.</em></p>
          <div className="about-detail">
            <p>{profile.about}</p>
            <p>I’m currently pursuing a Master of Information Technology at Southern Institute of Technology in New Zealand.</p>
            <a className="text-link" href="#education">More about my background <FiArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area, index) => (
            <article className="focus-card reveal" key={area.number} style={{ '--reveal-delay': `${index * 90}ms` }}>
              <span className="focus-number">{area.number} /</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading
          number="02 /"
          eyebrow="SELECTED PROJECTS"
          title="Work shaped by real questions."
          description="A selection of software, AI and campus projects from my CV. Each one starts with a problem worth understanding."
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card reveal" key={project.number} style={{ '--reveal-delay': `${(index % 2) * 110}ms` }}>
              <div className="project-card-top"><span>{project.label}</span><span className="project-index">{project.number}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list" aria-label="Technologies and themes">
                {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading
          number="03 /"
          eyebrow="TOOLKIT"
          title="Tools I use to get things done."
          description="From building interfaces to working with data and AI, these are the tools and concepts in my current CV."
        />
        <div className="skills-grid">
          {skills.map((group, index) => (
            <div className="skill-group reveal" key={group.title} style={{ '--reveal-delay': `${(index % 2) * 110}ms` }}>
              <h3>{group.title}</h3>
              <div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container education-grid">
        <SectionHeading number="04 /" eyebrow="EDUCATION" title="A foundation for what comes next." />
        <div className="education-list">
          {education.map((entry, index) => (
            <article className="education-item reveal" key={entry.degree} style={{ '--reveal-delay': `${index * 90}ms` }}>
              <span className="education-date">{entry.date}</span>
              <h3>{entry.degree}</h3>
              <p>{entry.school}</p>
              <span className="education-place">{entry.detail}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="reveal">
          <p className="eyebrow"><span className="section-number">05 /</span> SAY HELLO</p>
          <h2>Have an idea in mind? <span>Let’s connect.</span></h2>
          <p className="contact-description">I’m open to conversations about software development, applied AI and interesting problems to solve.</p>
        </div>
        <div className="contact-actions reveal">
          <a className="contact-email" href={`mailto:${profile.email}`}>
            <span><FiMail aria-hidden="true" /> Email me</span>
            <strong>{profile.email}</strong>
            <FiArrowUpRight aria-hidden="true" className="contact-arrow" />
          </a>
          <a className="contact-social" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <span><FiLinkedin aria-hidden="true" /> Connect on LinkedIn</span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="footer-name" href="#home">{profile.initials}<span>.</span></a>
        <p>© {new Date().getFullYear()} {profile.name}. Built with care.</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

function App() {
  useScrollReveal();
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
