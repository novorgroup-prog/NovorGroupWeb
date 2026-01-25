import React from 'react';
import { RequestButton } from '../../components/RequestButton';

export const DemoMinimalTech: React.FC = () => {
    
    return (
        <div style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', color: '#1a1a1a', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', position: 'sticky', top: '1rem', right: '2rem', zIndex: 100 }}>
                {/* Botón Solicitar */}
                <RequestButton
                    href="/contacto?design=Consulta por diseño Minimalista Tech"
                    label="Solicitar Diseño"
                    style="minimal"
                />
            </div>
            {/* Hero */}
            <section style={{
                minHeight: '100vh',
                alignItems: 'center',
            }}>
                <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', padding: '2rem 2rem', width: '100%' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                                Soluciones Tech <span style={{ color: '#0066ff' }}>Minimalistas</span>
                            </h1>
                            <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2rem', lineHeight: 1.6 }}>
                                Diseño limpio, funcional y directo al punto. La tecnología sin ruido innecesario.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button style={{
                                    padding: '0.875rem 2rem',
                                    backgroundColor: '#0066ff',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '0.375rem',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}>
                                    Comenzar Ahora
                                </button>
                                <button style={{
                                    padding: '0.875rem 2rem',
                                    backgroundColor: 'transparent',
                                    color: '#0066ff',
                                    border: '2px solid #0066ff',
                                    borderRadius: '0.375rem',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}>
                                    Ver Más
                                </button>
                            </div>
                        </div>
                        <div style={{
                            backgroundColor: '#e9ecef',
                            borderRadius: '0.5rem',
                            padding: '3rem',
                            textAlign: 'center',
                            color: '#999'
                        }}>
                            <div style={{ fontSize: '4rem' }}>💻</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '6rem 2rem', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 700, textAlign: 'center', marginBottom: '4rem' }}>
                        Características Principales
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: '⚡', title: 'Velocidad', desc: 'Carga en milisegundos' },
                            { icon: '🔒', title: 'Seguridad', desc: 'Encriptación de datos' },
                            { icon: '📱', title: 'Responsivo', desc: 'Funciona en todos los dispositivos' },
                            { icon: '🔧', title: 'Personalizable', desc: 'Adapta cada detalle a tu marca' }
                        ].map((feature, idx) => (
                            <div key={idx} style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
                                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>{feature.title}</h3>
                                <p style={{ color: '#666', fontSize: '0.875rem' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '6rem 2rem', backgroundColor: '#f8f9fa' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 700, textAlign: 'center', marginBottom: '4rem' }}>
                        Planes Simples
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { name: 'Básico', price: '99', features: ['Hasta 5 páginas', 'Dominio incluido', 'SSL gratis'] },
                            { name: 'Pro', price: '199', features: ['Hasta 20 páginas', 'Dominio incluido', 'SSL gratis', 'Analytics'] },
                            { name: 'Enterprise', price: 'Consultar', features: ['Ilimitado', 'Todo incluido', 'Soporte 24/7'] }
                        ].map((plan, idx) => (
                            <div key={idx} style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #e9ecef',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>{plan.name}</h3>
                                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#0066ff', marginBottom: '1.5rem' }}>
                                    ${plan.price} <span style={{ fontSize: '0.75rem', color: '#666' }}>/mes</span>
                                </div>
                                <ul style={{ textAlign: 'left', marginBottom: '2rem', listStyle: 'none', padding: 0 }}>
                                    {plan.features.map((feature, fidx) => (
                                        <li key={fidx} style={{ padding: '0.5rem 0', borderBottom: '1px solid #f0f0f0', color: '#666' }}>
                                            ✓ {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button style={{
                                    width: '100%',
                                    padding: '0.875rem',
                                    backgroundColor: '#0066ff',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '0.375rem',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}>
                                    Elegir Plan
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '4rem 2rem', backgroundColor: '#0066ff', color: 'white', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>¿Listo para empezar?</h2>
                <p style={{ marginBottom: '2rem', opacity: 0.9 }}>Crea tu presencia online en minutos</p>
                <button style={{
                    padding: '1rem 2rem',
                    backgroundColor: 'white',
                    color: '#0066ff',
                    border: 'none',
                    borderRadius: '0.375rem',
                    fontWeight: 600,
                    fontSize: '1rem',
                    cursor: 'pointer'
                }}>
                    Comenzar Prueba Gratuita
                </button>
            </section>
        </div>
    );
};
