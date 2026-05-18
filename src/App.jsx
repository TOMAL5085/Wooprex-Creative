import { useEffect, useState } from 'react'
import './App.css'
import heroWorkshop from './assets/hero-workshop.png'
import serviceBranding from './assets/service-branding.png'
import serviceGraphic from './assets/service-graphic.png'
import serviceMarketing from './assets/service-marketing.png'
import serviceVideo from './assets/service-video.png'
import logoBeka from './assets/logo-beka.png'
import logoConnex from './assets/logo-connex.png'
import logoPilot from './assets/logo-pilot.png'

const navItems = ['Home', 'Pages', 'Portfolio', 'Blogs', 'Contact']

const services = [
  {
    title: 'Branding and Identity',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking',
    image: serviceBranding,
  },
  {
    title: 'Graphic Design',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking',
    image: serviceGraphic,
  },
  {
    title: 'Digital Marketing',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking',
    image: serviceMarketing,
  },
  {
    title: 'Video Production',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking',
    image: serviceVideo,
  },
]

const projectCards = [
  {
    title: 'Website Design',
    text: 'Focusing on enhancing user experience across mobile.',
  },
  { title: 'Creative Direction', text: '' },
  { title: 'Brand Strategy', text: '' },
  { title: 'Interface Design', text: '' },
]

const partnerLogos = [
  { name: 'Beka', image: logoBeka },
  { name: 'ConneX', image: logoConnex },
  { name: 'Pilot', image: logoPilot },
]

const featureCards = [
  {
    number: '01',
    title: 'Design & Art Development',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have.',
  },
  {
    number: '02',
    title: 'User Interaction Design',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have.',
  },
  {
    number: '03',
    title: 'App And Web Development',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have.',
  },
  {
    number: '04',
    title: 'Digital Marketing Solution',
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have.',
  },
]

const testimonialSlides = [
  [
    {
      name: 'Michel Perci',
      role: 'Designer',
      copy: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
      avatarClass: 'avatar avatar-1',
    },
    {
      name: 'Ariana Holt',
      role: 'Strategist',
      copy: 'Working with the team felt effortless from kickoff to launch. Their process stayed organized, collaborative, and focused on clear business outcomes.',
      avatarClass: 'avatar avatar-4',
    },
    {
      name: 'Jude Palmer',
      role: 'Founder',
      copy: 'The final experience looked polished and premium, but what mattered most was how quickly it helped us present our offer with confidence.',
      avatarClass: 'avatar avatar-5',
    },
  ],
  [
    {
      name: 'Selena Brooks',
      role: 'Marketing Lead',
      copy: 'Every deliverable arrived thoughtful and sharp. The visual direction, communication, and attention to detail made the partnership easy to trust.',
      avatarClass: 'avatar avatar-6',
    },
    {
      name: 'Rina Moore',
      role: 'Product Manager',
      copy: 'They balanced creativity with structure really well. We got a result that felt distinctive without losing clarity or usability.',
      avatarClass: 'avatar avatar-7',
    },
    {
      name: 'Luca Bennett',
      role: 'Creative Director',
      copy: 'The team brought strong ideas to the table and translated them into design decisions that felt intentional at every stage.',
      avatarClass: 'avatar avatar-8',
    },
  ],
  [
    {
      name: 'Nora Hayes',
      role: 'Operations Lead',
      copy: 'What stood out most was the consistency. The project stayed aligned, deadlines stayed realistic, and the final work exceeded expectations.',
      avatarClass: 'avatar avatar-9',
    },
    {
      name: 'Milan Cross',
      role: 'Brand Manager',
      copy: 'The team translated rough ideas into a refined visual system quickly. Every step felt intentional, and the final result gave the brand much more clarity.',
      avatarClass: 'avatar avatar-2',
    },
    {
      name: 'Clara West',
      role: 'Consultant',
      copy: 'From the first review to the handoff, communication stayed smooth and practical. The final work looked premium and felt easy to present to stakeholders.',
      avatarClass: 'avatar avatar-3',
    },
  ],
]

const teamSlides = [
  [
    { name: 'Cameron Williamson', role: 'Designer', photoClass: 'team-photo-1' },
    { name: 'Robert Fox', role: 'Developer', photoClass: 'team-photo-2' },
    { name: 'Theresa Webb', role: 'Content creator', photoClass: 'team-photo-3' },
  ],
  [
    { name: 'Jenny Wilson', role: 'Creative lead', photoClass: 'team-photo-4' },
    { name: 'Marvin McKinney', role: 'UI designer', photoClass: 'team-photo-5' },
    { name: 'Kristin Watson', role: 'Brand strategist', photoClass: 'team-photo-6' },
  ],
  [
    { name: 'Leslie Alexander', role: 'Art director', photoClass: 'team-photo-7' },
    { name: 'Jacob Jones', role: 'Developer', photoClass: 'team-photo-8' },
    { name: 'Savannah Nguyen', role: 'Motion designer', photoClass: 'team-photo-9' },
  ],
  [
    { name: 'Courtney Henry', role: 'Photographer', photoClass: 'team-photo-10' },
    { name: 'Wade Warren', role: 'Growth manager', photoClass: 'team-photo-11' },
    { name: 'Guy Hawkins', role: 'Content creator', photoClass: 'team-photo-12' },
  ],
]

const blogPosts = [
  {
    title: 'Blogging for Beginners: Best Tools and Agency Recommendations',
    date: 'Mar 10, 2024',
  },
  {
    title: 'Blogging for Beginners: Best Tools and Agency Recommendations',
    date: 'Mar 10, 2024',
  },
  {
    title: 'Blogging for Beginners: Best Tools and Agency Recommendations',
    date: 'Mar 10, 2024',
  },
]

const socialLinks = [
  { label: 'Instagram', key: 'instagram', href: 'https://www.instagram.com/' },
  { label: 'LinkedIn', key: 'linkedin', href: 'https://www.linkedin.com/' },
  { label: 'Facebook', key: 'facebook', href: 'https://www.facebook.com/' },
  { label: 'Twitter', key: 'twitter', href: 'https://twitter.com/' },
]

const footerContactLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Web flow', href: 'https://webflow.com/' },
  { label: 'Dribbble', href: 'https://dribbble.com/' },
]

const faqs = [
  {
    question: 'How do you ensure a consistent flow of innovative ideas?',
    answer:
      'We maintain a dedicated team of creative professionals who stay updated with the latest industry trends and engage in regular brainstorming sessions to generate fresh and innovative ideas.',
  },
  {
    question: 'Can you provide examples of your past brilliant ideas?',
    answer:
      'We regularly build campaign concepts, visual systems, launch content, and digital experiences that help brands communicate clearly and stand out in crowded markets.',
  },
  {
    question: 'How do you handle client questions and feedback?',
    answer:
      'We keep communication clear and collaborative through regular check-ins, shared review points, and focused revisions that turn feedback into practical design improvements.',
  },
  {
    question: 'What is your process for turning an idea into a successful project?',
    answer:
      'We start with strategy, shape the creative direction, prototype key ideas, refine through feedback, and deliver polished assets that are ready to launch with confidence.',
  },
  {
    question: 'How do you tailor your ideas to meet the specific needs of different clients?',
    answer:
      "Every project is shaped around the client's goals, audience, and brand voice so the final solution feels specific, useful, and aligned with real business needs.",
  },
]

function SocialIcon({ icon }) {
  switch (icon) {
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="9" width="3" height="10" rx="0.7" />
          <circle cx="6.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          <path d="M11 9v10M11 12.2c0-1.8 1.3-3.2 3.1-3.2 1.9 0 3.4 1.3 3.4 4v6M14.1 9c2 0 3.4 1.4 3.4 4" />
        </svg>
      )
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.5 20v-7h2.4l.4-3h-2.8V8.1c0-.9.3-1.6 1.6-1.6H17V4a10 10 0 0 0-1.8-.1c-2.7 0-4.2 1.6-4.2 4.5V10H8.8v3H11v7" />
        </svg>
      )
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 7.2c-.5.2-1 .4-1.6.5a2.8 2.8 0 0 0 1.2-1.5c-.5.3-1.1.5-1.7.7a2.7 2.7 0 0 0-4.6 2.4A7.7 7.7 0 0 1 6.7 6.6a2.7 2.7 0 0 0 .8 3.6c-.4 0-.8-.1-1.2-.3 0 1.3.9 2.4 2.2 2.7-.4.1-.8.1-1.2 0 .3 1.1 1.4 1.9 2.6 1.9A5.4 5.4 0 0 1 6 16.6a7.6 7.6 0 0 0 4.1 1.2c4.9 0 7.6-4 7.6-7.6v-.3c.5-.4 1-.9 1.3-1.5Z" />
        </svg>
      )
    default:
      return null
  }
}

function App() {
  const [testimonialPage, setTestimonialPage] = useState(0)
  const [teamPage, setTeamPage] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)
  const testimonialPages = testimonialSlides.length
  const visibleTestimonials = testimonialSlides[testimonialPage]
  const totalTeamPages = teamSlides.length
  const visibleTeam = teamSlides[teamPage]
  const handleFaqToggle = (index) => {
    setOpenFaq((currentOpen) => (currentOpen === index ? null : index))
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTestimonialPage((currentPage) => (currentPage + 1) % testimonialPages)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [testimonialPages])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTeamPage((currentPage) => (currentPage + 1) % totalTeamPages)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [totalTeamPages])

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Wooprex Creative home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="brand-copy">
            <strong>WOOPREX</strong>
            <small>Creative</small>
          </span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={item === 'Home' ? 'active' : ''}>
              {item}
              {item === 'Home' ? <span className="active-dot" aria-hidden="true" /> : null}
              {item === 'Pages' ? <span className="nav-caret" aria-hidden="true" /> : null}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <button className="icon-button" type="button" aria-label="Search">
            <span aria-hidden="true">&#8981;</span>
          </button>
          <a className="button button-primary" href="#contact">
            Let&apos;s Contact
          </a>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-decor hero-decor-left" aria-hidden="true" />
          <div className="hero-decor hero-decor-dot" aria-hidden="true" />

          <div className="hero-copy">
            <h1>Pioneering Creative Excellence</h1>
            <p className="lead">
              Where creativity meets innovation. We specialize in bringing your ideas to life through
              exceptional design.
            </p>
            <div className="hero-rule" aria-hidden="true" />
            <div className="hero-actions">
              <a className="button button-primary button-lg" href="#services">
                Get started
                <span aria-hidden="true">&#9652;</span>
              </a>
              <div className="social-row" aria-label="Social links">
                {socialLinks.map((social) => (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-chip"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <SocialIcon icon={social.key} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-card photo-card-hero">
              <img src={heroWorkshop} alt="Team workshop" />
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Our best of service</p>
            <h2>
              Wooprex Digital Agency&apos;s Best
              <br />
              Service Options
            </h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <img className="service-illustration" src={service.image} alt="" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="pages">
          <div className="about-grid">
            <div>
              <p className="eyebrow">About us</p>
              <h2 className="about-title">
                <span>Find out more about the team behind</span>
                <span>the best and fastest Like minimal</span>
                <span>portfolio HTML Template</span>
              </h2>
              <div className="about-photo photo-card photo-card-about" />
            </div>

            <div className="about-copy">
              <div className="bg-rings" aria-hidden="true" />
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words which don&apos;t
                look even slightly believable.
              </p>
              <p>
                Digital agencies specialize in strategic marketing, focusing on enhancing user experience
                across mobile and social platforms while gathering and analyzing data for insights.
              </p>
              <a className="read-more" href="#team">
                Read More <span aria-hidden="true">&#9652;</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section logo-strip" aria-label="Client logos">
          {partnerLogos.map((logo) => (
            <div className="logo-item" key={logo.name}>
              <img className="logo-image" src={logo.image} alt={logo.name} />
            </div>
          ))}
        </section>

        <section className="section projects-section" id="portfolio">
          <div className="section-header-row">
            <div>
              <p className="eyebrow">Our projects</p>
              <h2>Take a Tour of Our Project</h2>
            </div>
            <div className="arrow-controls" aria-hidden="true">
              <button type="button">&#8963;</button>
              <button type="button">&#8963;</button>
            </div>
          </div>

          <div className="project-grid">
            {projectCards.map((project, index) => (
              <article className={`project-card project-card-${index + 1}`} key={project.title}>
                <div className="project-overlay">
                  <span>{project.title}</span>
                  {project.text ? <strong>{project.text}</strong> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section dark-section" id="blogs">
          <div className="dark-inner">
            <div className="section-header-row dark-header">
              <div>
                <p className="eyebrow">Key service & testimonials</p>
                <h2>Services We Provide and What Clients Say</h2>
              </div>
              <a className="button button-outline" href="#services">
                View Services <span aria-hidden="true">&#9652;</span>
              </a>
            </div>

            <div className="feature-grid">
              <div className="feature-column">
                {featureCards.slice(0, 2).map((item) => (
                  <article className="feature-card" key={item.number}>
                    <div className="feature-number">{item.number}.</div>
                    <div className="feature-body">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="feature-photo" aria-hidden="true" />

              <div className="feature-column">
                {featureCards.slice(2).map((item) => (
                  <article className="feature-card" key={item.number}>
                    <div className="feature-number">{item.number}.</div>
                    <div className="feature-body">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="section-divider" />

            <h2 className="center-title">Reviews of Our Premium Solutions</h2>

            <div className="testimonial-grid">
              {visibleTestimonials.map((testimonial, index) => (
                <article className="testimonial-card" key={`${testimonialPage}-${testimonial.name}-${index}`}>
                  <div className="testimonial-head">
                    <div className={testimonial.avatarClass} aria-hidden="true" />
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                    <div className="rating">
                      <span>Rating</span>
                      <div aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    </div>
                  </div>
                  <div className="testimonial-line" />
                  <p>{testimonial.copy}</p>
                </article>
              ))}
            </div>

            <div className="dots testimonial-dots" aria-label="Testimonial pages">
              {Array.from({ length: testimonialPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={index === testimonialPage ? 'dot active' : 'dot'}
                  aria-label={`Show testimonial page ${index + 1}`}
                  aria-pressed={index === testimonialPage}
                  onClick={() => setTestimonialPage(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section team-section" id="team">
          <p className="eyebrow">Our team</p>
          <h2>The Team Behind the Magic</h2>

          <div className="team-grid">
            {visibleTeam.map((member) => (
              <article className="team-card" key={member.name}>
                <div className={`team-photo ${member.photoClass}`}>
                  <div className="team-socials">
                    {socialLinks.map((social) => (
                      <a
                        key={social.key}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        title={social.label}
                      >
                        <SocialIcon icon={social.key} />
                      </a>
                    ))}
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>

          <div className="dots team-dots" aria-label="Team pages">
            {Array.from({ length: totalTeamPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                className={index === teamPage ? 'dot active' : 'dot'}
                aria-label={`Show team page ${index + 1}`}
                aria-pressed={index === teamPage}
                onClick={() => setTeamPage(index)}
              />
            ))}
          </div>
        </section>

        <section className="section faq-section">
          <div className="faq-hero">
            <div className="faq-photo" aria-hidden="true" />
            <div className="faq-card">
              <p className="eyebrow">FAQ</p>
              <h2>Consistently Providing Smart Ideas &amp; Resolving Inquiries</h2>

              <div className="faq-list">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index

                  return (
                    <div className={isOpen ? 'faq-item open' : 'faq-item'} key={faq.question}>
                      <button
                        type="button"
                        className="faq-question"
                        aria-expanded={isOpen}
                        onClick={() => handleFaqToggle(index)}
                      >
                        <span>{faq.question}</span>
                        <span className="faq-icon" aria-hidden="true">
                          {isOpen ? '-' : '+'}
                        </span>
                      </button>
                      {isOpen ? <p>{faq.answer}</p> : null}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section stats-section">
          <div className="stats-grid">
            {[
              ['09', 'Years of experience'],
              ['120+', 'Stable clients'],
              ['560', 'Complete projects'],
              ['44', 'Team member'],
              ['$100k', 'Monthly revenue'],
            ].map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section news-section" id="news">
          <p className="eyebrow">Our latest news</p>
          <h2>Our Solutions Alongside the Latest News &amp; Blogs</h2>

          <div className="news-grid">
            {blogPosts.map((post, index) => (
              <article className="news-card" key={`${post.date}-${index}`}>
                <div className={`news-photo news-photo-${index + 1}`} />
                <div className="news-meta">
                  <span className="news-date">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="4.5" y="6.5" width="15" height="13" rx="1.8" />
                      <path d="M8 4.5v4M16 4.5v4M4.5 10.5h15" />
                    </svg>
                    Mar 10, 2024
                  </span>
                  <span>by- Guy Hawkins</span>
                </div>
                <h3>{post.title}</h3>
                <p>
                  We maintain a dedicated team of creative professionals who updated with the latest industry
                  insights.
                </p>
                <a className="read-more" href="#contact">
                  Read More <span aria-hidden="true">&#9652;</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="cta-band">
          <div className="cta-band-inner">
            <div className="cta-copy">
              <h2>Have a project in mind?</h2>
              <p>
                Ready to bring your vision to life? Share your project ideas with us, and let&apos;s
                create something extraordinary together.
              </p>
            </div>
            <a className="button button-light" href="#contact">
              Let&apos;s Talk
            </a>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand brand-footer">
              <span className="brand-mark" aria-hidden="true">
                <span />
                <span />
              </span>
              <span className="brand-copy">
                <strong>WOOPREX</strong>
                <small>Creative</small>
              </span>
            </div>
            <a href="mailto:hello@wooprex.co.bd">hello@wooprex.co.bd</a>
            <a href="tel:+34675382860">+34 675382860</a>
            <div className="social-row footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-chip social-chip-dark"
                  aria-label={social.label}
                  title={social.label}
                >
                  <SocialIcon icon={social.key} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h3>Services</h3>
              <a href="#services">Startup Offer</a>
              <a href="#services">Branding</a>
              <a href="#services">Web Design</a>
              <a href="#services">UI+UX</a>
              <a href="#services">Web Development</a>
            </div>
            <div>
              <h3>Agency</h3>
              <a href="#pages">Web3 Design</a>
              <a href="#pages">About</a>
              <a href="#portfolio">Works</a>
              <a href="#team">Career</a>
              <a href="#team">Culture</a>
            </div>
            <div>
              <h3>Contact</h3>
              {footerContactLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="newsletter">
              <h3>Newsletter</h3>
              <p>We maintain a dedicated team of creative updated with the latest industry.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter email address" aria-label="Email address" />
                <button type="button" className="button button-outline">
                  Send <span aria-hidden="true">&#9652;</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Copyright &copy; 2023 . Wooprex creative. All Rights Reserved.</span>
          <div className="footer-bottom-links">
            <a href="#contact">Terms & Conditions</a>
            <a href="#contact">Personal Data</a>
            <a href="#contact">Notice</a>
            <a href="#contact">Policy</a>
            <a href="#contact">Cookies Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
