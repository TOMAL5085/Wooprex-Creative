import './App.css'
import heroWorkshop from './assets/hero-workshop.png'
import serviceBranding from './assets/service-branding.png'
import serviceGraphic from './assets/service-graphic.png'
import serviceMarketing from './assets/service-marketing.png'
import serviceVideo from './assets/service-video.png'

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

const team = [
  { name: 'Cameron Williamson', role: 'Designer' },
  { name: 'Robert Fox', role: 'Developer' },
  { name: 'Theresa Webb', role: 'Content creator' },
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

function App() {
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
            <span aria-hidden="true">⌕</span>
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
                <span aria-hidden="true">▴</span>
              </a>
              <div className="social-row" aria-label="Social links">
                {['ig', 'in', 'f', 't'].map((label) => (
                  <a key={label} href="#contact" className="social-chip">
                    {label}
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
                Read More <span aria-hidden="true">▴</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section logo-strip" aria-label="Client logos">
          <div className="logo-wordmark">Beka</div>
          <div className="logo-wordmark">ConneX</div>
          <div className="logo-wordmark">pilot</div>
        </section>

        <section className="section projects-section" id="portfolio">
          <div className="section-header-row">
            <div>
              <p className="eyebrow">Our projects</p>
              <h2>Take a Tour of Our Project</h2>
            </div>
            <div className="arrow-controls" aria-hidden="true">
              <button type="button">⌃</button>
              <button type="button">⌃</button>
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
              <a className="button button-outline" href="#contact">
                View Services <span aria-hidden="true">▴</span>
              </a>
            </div>

            <div className="feature-grid">
              {featureCards.map((item, index) => (
                <article className="feature-card" key={item.number}>
                  <div className="feature-number">{item.number}</div>
                  <div className="feature-body">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  {index === 1 ? <div className="feature-photo" aria-hidden="true" /> : null}
                </article>
              ))}
            </div>

            <div className="section-divider" />

            <h2 className="center-title">Reviews of Our Premium Solutions</h2>

            <div className="testimonial-grid">
              {[1, 2, 3].map((index) => (
                <article className="testimonial-card" key={index}>
                  <div className="testimonial-head">
                    <div className="avatar" aria-hidden="true" />
                    <div>
                      <strong>Michel Perci</strong>
                      <span>Designer</span>
                    </div>
                    <div className="rating">
                      <span>Rating</span>
                      <div aria-hidden="true">★★★★★</div>
                    </div>
                  </div>
                  <div className="testimonial-line" />
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a
                    page when looking at its layout. The point of using Lorem Ipsum is that it has.
                  </p>
                </article>
              ))}
            </div>

            <div className="dots" aria-hidden="true">
              <span className="dot active" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>
        </section>

        <section className="section team-section" id="team">
          <p className="eyebrow">Our team</p>
          <h2>The Team Behind the Magic</h2>

          <div className="team-grid">
            {team.map((member, index) => (
              <article className="team-card" key={member.name}>
                <div className={`team-photo team-photo-${index + 1}`}>
                  {index === 0 ? (
                    <div className="team-socials" aria-hidden="true">
                      <span>ig</span>
                      <span>in</span>
                      <span>f</span>
                      <span>t</span>
                    </div>
                  ) : null}
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>

          <div className="dots" aria-hidden="true">
            <span className="dot active" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </section>

        <section className="section faq-section">
          <div className="faq-hero">
            <div className="faq-photo" aria-hidden="true" />
            <div className="faq-card">
              <p className="eyebrow">FAQ</p>
              <h2>Consistently Providing Smart Ideas &amp; Resolving Inquiries</h2>

              <div className="faq-list">
                <details open>
                  <summary>How do you ensure a consistent flow of innovative ideas?</summary>
                  <p>
                    We maintain a dedicated team of creative professionals who stay updated with the latest
                    industry trends and engage in regular brainstorming sessions to generate fresh and
                    innovative ideas.
                  </p>
                </details>
                <details>
                  <summary>Can you provide examples of your past brilliant ideas?</summary>
                </details>
                <details>
                  <summary>How do you handle client questions and feedback?</summary>
                </details>
                <details>
                  <summary>What is your process for turning an idea into a successful project?</summary>
                </details>
                <details>
                  <summary>How do you tailor your ideas to meet the specific needs of different clients?</summary>
                </details>
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

        <section className="section news-section" id="contact">
          <p className="eyebrow">Our latest news</p>
          <h2>Our Solutions Alongside the Latest News &amp; Blogs</h2>

          <div className="news-grid">
            {blogPosts.map((post, index) => (
              <article className="news-card" key={`${post.date}-${index}`}>
                <div className={`news-photo news-photo-${index + 1}`} />
                <div className="news-meta">
                  <span>Mar 10, 2024</span>
                  <span>by- Guy Hawkins</span>
                </div>
                <h3>{post.title}</h3>
                <p>
                  We maintain a dedicated team of creative professionals who updated with the latest industry
                  insights.
                </p>
                <a className="read-more" href="#contact">
                  Read More <span aria-hidden="true">▴</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="cta-band">
          <div>
            <h2>Have a project in mind?</h2>
            <p>
              Ready to bring your vision to life? Share your project ideas with us, and let&apos;s create
              something extraordinary together.
            </p>
          </div>
          <a className="button button-light" href="#contact">
            Let&apos;s Talk
          </a>
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
              {['ig', 'in', 'f', 't'].map((label) => (
                <a key={label} href="#contact" className="social-chip social-chip-dark">
                  {label}
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
              <a href="#contact">Instagram</a>
              <a href="#contact">Facebook</a>
              <a href="#contact">LinkedIn</a>
              <a href="#contact">Web flow</a>
              <a href="#contact">Dribbble</a>
            </div>
            <div className="newsletter">
              <h3>Newsletter</h3>
              <p>We maintain a dedicated team of creative updated with the latest industry.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter email address" aria-label="Email address" />
                <button type="button" className="button button-outline">
                  Send <span aria-hidden="true">▴</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Copyright © 2023 . Wooprex creative. All Rights Reserved.</span>
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
