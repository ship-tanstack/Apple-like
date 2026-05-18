import type { CSSProperties } from 'react'
import { useEffect } from 'react'

import { createFileRoute } from '@tanstack/react-router'
import { Aperture, ArrowRight, BatteryCharging, Cpu, ScanFace } from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

const metrics = [
  { label: 'Battery life', value: '40 hrs' },
  { label: 'Noise control', value: '2x faster' },
  { label: 'USB-C audio', value: '24-bit' },
]

const features = [
  {
    icon: Cpu,
    title: 'Acoustic silicon with real headroom',
    description:
      'A dedicated audio engine handles adaptive EQ, noise control, and spatial processing without making the experience feel heavy or over-processed.',
  },
  {
    icon: Aperture,
    title: 'Spatial listening that stays believable',
    description:
      'Layered sound moves around you with slower, softer transitions so the animation language still feels Apple-like instead of theatrical.',
  },
  {
    icon: ScanFace,
    title: 'Comfort tuned around long sessions',
    description:
      'Breathable mesh, lower clamp force, and wear-aware controls keep the object premium without turning it into a gadget that demands attention.',
  },
]

const finishes = [
  {
    name: 'Midnight Graphite',
    tone: 'A low-sheen graphite finish built for darker desks, black anodized accessories, and a quieter silhouette.',
    swatch: 'linear-gradient(135deg, #0f1014 0%, #2b2e36 100%)',
  },
  {
    name: 'Moonlight Silver',
    tone: 'Cool aluminum reflections make the frame read cleaner in bright environments and studio lighting.',
    swatch: 'linear-gradient(135deg, #f5f7fb 0%, #bcc4d2 100%)',
  },
  {
    name: 'Glacier Blue',
    tone: 'A muted blue-grey that stays restrained at a distance but feels distinctive once light starts moving across it.',
    swatch: 'linear-gradient(135deg, #8da9c5 0%, #d9e5ef 100%)',
  },
]

function Home() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="apple-page" id="top">
      <header className="apple-nav" data-reveal>
        <div className="nav-mark">
          <span className="nav-mark-dot" />
          Astra Air
        </div>
        <nav className="nav-links" aria-label="Page sections">
          <a href="#design">Design</a>
          <a href="#performance">Audio</a>
          <a href="#finish">Finishes</a>
        </nav>
        <a className="nav-cta" href="#buy">
          Watch the preview
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">Astra Air</p>
          <h1>The quietest way to make sound feel premium.</h1>
          <p className="hero-text">
            This concept swaps the phone for a pair of over-ear headphones and keeps the Apple-inspired language where it matters:
            disciplined motion, oversized typography, controlled contrast, and product lighting that feels calm instead of loud.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#buy">
              Book a listening demo
            </a>
            <a className="secondary-button" href="#performance">
              See the highlights
              <ArrowRight size={16} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="device-theater" data-reveal>
          <div className="device-aura" aria-hidden="true" />
          <div className="headphone-sculpture" aria-hidden="true">
            <div className="headband-outer" />
            <div className="headband-inner" />
            <div className="earcup earcup-left">
              <div className="earcup-cushion" />
              <div className="earcup-driver" />
            </div>
            <div className="earcup earcup-right">
              <div className="earcup-cushion" />
              <div className="earcup-driver" />
            </div>
            <div className="headphone-badge headphone-badge-top">
              <span>Lossless over USB-C</span>
              <strong>More detail, no extra setup.</strong>
            </div>
            <div className="headphone-badge headphone-badge-bottom">
              <span>Adaptive noise control</span>
              <strong>Quiet shaped in layers.</strong>
            </div>
            <div className="headphone-shadow" />
          </div>

          <div className="floating-card floating-card-left" data-reveal>
            <BatteryCharging size={20} strokeWidth={1.8} />
            <div>
              <strong>50% in 18 minutes</strong>
              <span>Fast enough to leave the cable out of the story.</span>
            </div>
          </div>

          <div className="floating-card floating-card-right" data-reveal>
            <Aperture size={20} strokeWidth={1.8} />
            <div>
              <strong>Personalized spatial audio</strong>
              <span>Movement stays present, but never distracting.</span>
            </div>
          </div>
        </div>

        <div className="scroll-cue" data-reveal>
          <span className="scroll-line" />
          Scroll to continue
        </div>
      </section>

      <section className="metric-strip" data-reveal>
        {metrics.map((metric) => (
          <div key={metric.label} className="metric-item">
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </section>

      <section className="story-section" id="performance">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Sound & Silicon</p>
          <h2>Motion should feel like breathing, not decoration.</h2>
          <p>
            The Apple-like part is not the object itself. It is the pacing. Small lifts, soft blur, and low-amplitude reveals guide attention
            without making the page feel busy.
          </p>
        </div>

        <div className="story-grid">
          <div className="feature-stack">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <article
                  key={feature.title}
                  className="feature-card"
                  data-reveal
                  style={{ '--delay': `${index * 120}ms` } as CSSProperties}
                >
                  <div className="feature-icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              )
            })}
          </div>

          <div className="ambient-panel" data-reveal>
            <div className="ambient-copy">
              <p className="eyebrow">Spatial Interface</p>
              <h3>Glass layers, gentle light, and slower orbital motion feel closer to Apple than louder 3D tricks.</h3>
              <p>
                The product stays centered while the information field moves around it. Your eye keeps a stable focal point, but the page never
                feels static.
              </p>
            </div>

            <div className="orbital-stage" aria-hidden="true">
              <span className="orbit orbit-one" />
              <span className="orbit orbit-two" />
              <span className="core-glow" />
              <span className="mini-chip mini-chip-top">Adaptive EQ</span>
              <span className="mini-chip mini-chip-bottom">Spatial Audio</span>
            </div>
          </div>
        </div>
      </section>

      <section className="camera-section" id="design">
        <div className="camera-copy" data-reveal>
          <p className="eyebrow">Form & Comfort</p>
          <h2>Machine-finished metal outside. Soft certainty where it touches you.</h2>
          <p>
            Rounded volumes, polished reflections, and a lot of empty space make the object feel expensive before the first note starts. The
            circular forms below read as acoustic architecture instead of camera hardware.
          </p>
        </div>

        <div className="lens-cluster" data-reveal>
          <span className="lens lens-large" />
          <span className="lens lens-medium" />
          <span className="lens lens-small" />
          <span className="lens-flare" />
        </div>
      </section>

      <section className="finish-section" id="finish">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Finishes</p>
          <h2>Quiet colors. More presence.</h2>
          <p>
            This section keeps the product matrix simple and lets the material, gradient, and restrained hover response do the work.
          </p>
        </div>

        <div className="finish-grid">
          {finishes.map((finish, index) => (
            <article
              key={finish.name}
              className="finish-card"
              data-reveal
              style={{
                '--delay': `${index * 120}ms`,
                '--swatch': finish.swatch,
              } as CSSProperties}
            >
              <div className="finish-swatch" />
              <h3>{finish.name}</h3>
              <p>{finish.tone}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="buy" data-reveal>
        <p className="eyebrow">Ready to Launch</p>
        <h2>This is no longer a starter page. It is a polished Apple-like concept built around a different object.</h2>
        <p>
          The page now centers a premium pair of headphones, keeps all copy in English, and preserves the softer animation language you asked for.
          If needed, the next pass can add scroll-driven pinning, video panels, or a deeper 3D product transition.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="mailto:demo@astraair.design">
            Request a preview
          </a>
          <a className="secondary-button" href="#top">
            Back to top
            <ArrowRight size={16} strokeWidth={2} />
          </a>
        </div>
      </section>
    </main>
  )
}
