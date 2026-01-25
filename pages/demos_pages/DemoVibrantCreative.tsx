import React, { useState } from 'react';
import { RequestButton } from '../../components/RequestButton';

export const DemoVibrantCreative: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div style={{
            backgroundColor: '#fff5f7',
            color: '#1a1a1a',
            fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, sans-serif'
        }}>

            {/* Header */}
            <header style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#fff5f7',
                borderBottom: '3px solid #ff006e'
            }}>
                <h1 style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #ff006e, #8338ec)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    VIBE
                </h1>
                <nav style={{ display: 'flex', gap: '2rem' }}>
                    {['Inicio', 'Portafolio', 'Contacto'].map((item) => (
                        <a key={item} href="#" style={{
                            fontWeight: 600,
                            color: '#1a1a1a',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            transition: 'all 0.3s'
                        }}>
                            {item}
                        </a>
                    ))}
                </nav>
            </header>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', position: 'sticky', top: '5rem', right: '2rem', zIndex: 100 }}>
                {/* Botón Solicitar */}
                <RequestButton
                    href="/contacto?design=Consulta por diseño Minimalista Tech"
                    label="Solicitar Diseño"
                    style="minimal"
                />
            </div>
            {/* Hero */}
            <section style={{
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                padding: '4rem 2rem',
                background: 'linear-gradient(135deg, #fff5f7 0%, #ffb703 20%, #fb5607 40%, #ff006e 60%, #8338ec 80%, #3a86ff 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradient 15s ease infinite',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <style>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>

                <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: '3rem',
                        borderRadius: '2rem',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                    }}>
                        <h1 style={{
                            fontSize: '3.5rem',
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            color: '#1a1a1a'
                        }}>
                            Creatividad Sin <span style={{ color: '#ff006e' }}>Límites</span>
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#666',
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}>
                            Diseño audaz, colores vibrantes y experiencias que cautivan. Para marcas que se atreven a ser diferentes.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <button style={{
                                padding: '1rem 2rem',
                                background: 'linear-gradient(135deg, #ff006e, #8338ec)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '1rem',
                                fontSize: '1rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                Explorar
                            </button>
                            <button style={{
                                padding: '1rem 2rem',
                                backgroundColor: 'white',
                                color: '#ff006e',
                                border: '3px solid #ff006e',
                                borderRadius: '1rem',
                                fontSize: '1rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                Saber Más
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section style={{ padding: '6rem 2rem', backgroundColor: '#f5f5f5' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: '2.75rem',
                        fontWeight: 900,
                        textAlign: 'center',
                        marginBottom: '4rem',
                        color: '#1a1a1a'
                    }}>
                        ¿Qué hacemos?
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            {
                                icon: '🎨',
                                title: 'Diseño Creativo',
                                desc: 'Visuals impactantes que dejan huella',
                                color: '#ff006e'
                            },
                            {
                                icon: '⚡',
                                title: 'Desarrollo Rápido',
                                desc: 'Tecnología moderna y performante',
                                color: '#8338ec'
                            },
                            {
                                icon: '🚀',
                                title: 'Estrategia Digital',
                                desc: 'Crecimiento acelerado garantizado',
                                color: '#3a86ff'
                            },
                            {
                                icon: '💡',
                                title: 'Innovación',
                                desc: 'Ideas revolucionarias para tu marca',
                                color: '#ffb703'
                            }
                        ].map((service, idx) => (
                            <div key={idx} style={{
                                padding: '2rem',
                                backgroundColor: 'white',
                                borderRadius: '1.5rem',
                                border: '3px solid transparent',
                                borderTop: `5px solid ${service.color}`,
                                transition: 'all 0.3s',
                                cursor: 'pointer',
                                textAlign: 'center'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', color: service.color }}>
                                    {service.title}
                                </h3>
                                <p style={{ color: '#666', fontSize: '0.95rem' }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Showcase */}
            <section style={{ padding: '6rem 2rem', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: '2.75rem',
                        fontWeight: 900,
                        textAlign: 'center',
                        marginBottom: '4rem',
                        color: '#1a1a1a'
                    }}>
                        Proyectos que Alucinan
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { name: 'StartUp Tech', color: '#ff006e' },
                            { name: 'Agencia Creativa', color: '#8338ec' },
                            { name: 'E-Commerce Fuego', color: '#ffb703' }
                        ].map((project, idx) => (
                            <div key={idx} style={{
                                height: '400px',
                                background: `linear-gradient(135deg, ${project.color}40 0%, ${project.color} 100%)`,
                                borderRadius: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                border: `3px solid ${project.color}`
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 900,
                                    color: 'white',
                                    textAlign: 'center',
                                    position: 'relative',
                                    zIndex: 10,
                                    textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                                }}>
                                    {project.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section style={{
                padding: '6rem 2rem',
                background: 'linear-gradient(135deg, #ff006e, #8338ec)',
                color: 'white',
                borderRadius: '2rem',
                margin: '4rem 2rem'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
                        {[
                            { number: '150+', label: 'Proyectos Creados' },
                            { number: '98%', label: 'Clientes Satisfechos' },
                            { number: '45', label: 'Premios Ganados' }
                        ].map((stat, idx) => (
                            <div key={idx}>
                                <div style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem' }}>
                                    {stat.number}
                                </div>
                                <p style={{ fontSize: '1rem', opacity: 0.95 }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{
                padding: '6rem 2rem',
                textAlign: 'center',
                backgroundColor: '#fff5f7'
            }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    marginBottom: '1.5rem',
                    color: '#1a1a1a'
                }}>
                    Tu marca merece brillar
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: '#666',
                    marginBottom: '2rem',
                    maxWidth: '500px',
                    margin: '0 auto',
                }}>
                    Vamos a crear algo extraordinario juntos
                </p>
                <button style={{
                    padding: '1.25rem 3rem',
                    background: 'linear-gradient(135deg, #ff006e, #8338ec)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '1rem',
                    fontSize: '1rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    transition: 'all 0.3s'
                }}>
                    ¡Comenzar Proyecto!
                </button>
            </section>

            {/* Footer */}
            <footer style={{
                padding: '2rem',
                backgroundColor: '#1a1a1a',
                color: 'white',
                textAlign: 'center',
                fontSize: '0.875rem'
            }}>
                <p>© 2026 VIBE CREATIVO. Diseño Audaz, Resultados Reales</p>
            </footer>
        </div>
    );
};
