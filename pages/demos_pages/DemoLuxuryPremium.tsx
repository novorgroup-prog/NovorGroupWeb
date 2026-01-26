import React from 'react';
import { RequestButton } from '../../components/RequestButton';

export const DemoLuxuryPremium: React.FC = () => {

    return (
        <div style={{
            backgroundColor: '#0f0e0e',
            color: '#e8e8e8',
            fontFamily: 'Georgia, "Times New Roman", serif'
        }}>

            {/* Navigation */}
            <nav style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(15, 14, 14, 0.95)',
                borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
                color: '#e8e8e8'
            }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#d4af37' }}>LUXE</h1>
                <div style={{ display: 'flex', gap: '3rem', fontSize: '0.875rem', fontWeight: 500 }}>
                    <a href="#" style={{ color: '#e8e8e8', textDecoration: 'none', letterSpacing: '1px' }}>INICIO</a>
                    <a href="#" style={{ color: '#e8e8e8', textDecoration: 'none', letterSpacing: '1px' }}>SERVICIOS</a>
                    <a href="#" style={{ color: '#e8e8e8', textDecoration: 'none', letterSpacing: '1px' }}>CONTACTO</a>
                </div>
            </nav>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', position: 'sticky', top: '5rem', right: '2rem', zIndex: 100 }}>
                {/* Botón Solicitar */}
                <RequestButton
                    href="/contacto?design=Consulta por diseño Luxury Premium"
                    label="Solicitar Diseño"
                    style="minimal"
                />
            </div>
            {/* Hero */}
            <section style={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem 2rem',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2520 100%)',
                textAlign: 'center',
                borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
                <div>
                    <p style={{ fontSize: '0.875rem', color: '#d4af37', letterSpacing: '3px', marginBottom: '1rem', fontWeight: 500 }}>BIENVENIDO</p>
                    <h1 style={{
                        fontSize: '4rem',
                        fontWeight: 400,
                        lineHeight: 1.2,
                        marginBottom: '1.5rem',
                        letterSpacing: '-1px'
                    }}>
                        Elegancia en <span style={{ color: '#d4af37' }}>Cada Detalle</span>
                    </h1>
                    <p style={{
                        fontSize: '1.125rem',
                        color: '#bbb',
                        lineHeight: 1.8,
                        maxWidth: '600px',
                        margin: '0 auto',
                        marginBottom: '3rem',
                        fontStyle: 'italic'
                    }}>
                        Soluciones de lujo y sofisticación para marcas que demandan excelencia absoluta
                    </p>
                    <button style={{
                        padding: '1rem 3rem',
                        backgroundColor: '#d4af37',
                        color: '#0f0e0e',
                        border: 'none',
                        borderRadius: 0,
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        fontFamily: 'Georgia, serif'
                    }}>
                        SOLICITAR CONSULTA
                    </button>
                </div>
            </section>

            {/* Services */}
            <section style={{ padding: '8rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 400,
                        textAlign: 'center',
                        marginBottom: '5rem',
                        letterSpacing: '-1px'
                    }}>
                        Nuestros Servicios
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        {[
                            { num: '01', title: 'Identidad Visual', desc: 'Diseño de marca exclusivo y diferenciador' },
                            { num: '02', title: 'Desarrollo Premium', desc: 'Código impecable y rendimiento excepcional' },
                            { num: '03', title: 'Estrategia Digital', desc: 'Posicionamiento como líder de mercado' }
                        ].map((service, idx) => (
                            <div key={idx} style={{
                                borderTop: '2px solid #d4af37',
                                paddingTop: '2rem'
                            }}>
                                <p style={{
                                    fontSize: '2rem',
                                    color: '#d4af37',
                                    fontWeight: 300,
                                    marginBottom: '1rem',
                                    letterSpacing: '2px'
                                }}>
                                    {service.num}
                                </p>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem' }}>
                                    {service.title}
                                </h3>
                                <p style={{ color: '#999', fontSize: '0.95rem', lineHeight: 1.7 }}>
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Preview */}
            <section style={{
                padding: '8rem 2rem',
                backgroundColor: '#1a1a1a',
                borderTop: '1px solid rgba(212, 175, 55, 0.2)',
                borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 400,
                        textAlign: 'center',
                        marginBottom: '5rem',
                        letterSpacing: '-1px'
                    }}>
                        Trabajos Destacados
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                        {['Proyecto A', 'Proyecto B', 'Proyecto C'].map((project, idx) => (
                            <div key={idx} style={{
                                aspectRatio: '1',
                                backgroundColor: '#2a2520',
                                borderRadius: 0,
                                border: '1px solid rgba(212, 175, 55, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)';
                                    e.currentTarget.style.backgroundColor = '#332d25';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                                    e.currentTarget.style.backgroundColor = '#2a2520';
                                }}>
                                <span style={{ color: '#d4af37', fontSize: '1.25rem', fontWeight: 400 }}>
                                    {project}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '8rem 2rem', textAlign: 'center' }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: 400,
                    marginBottom: '2rem',
                    letterSpacing: '-1px'
                }}>
                    Hablemos de tu visión
                </h2>
                <p style={{ color: '#999', marginBottom: '3rem', fontSize: '1.1rem' }}>
                    Contacta con nuestro equipo para una consulta personalizada
                </p>
                <button style={{
                    padding: '1rem 3rem',
                    backgroundColor: '#d4af37',
                    color: '#0f0e0e',
                    border: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    cursor: 'pointer',
                    fontFamily: 'Georgia, serif'
                }}>
                    INICIAR CONVERSACIÓN
                </button>
            </section>

            {/* Footer */}
            <footer style={{
                padding: '2rem',
                backgroundColor: '#000',
                textAlign: 'center',
                borderTop: '1px solid rgba(212, 175, 55, 0.2)',
                color: '#666',
                fontSize: '0.875rem'
            }}>
                <p>© 2026 LUXE PREMIUM. Diseño y Estrategia Digital</p>
            </footer>
        </div>
    );
};
