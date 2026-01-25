import { Route } from '@/constants';
import React from 'react';

interface RequestButtonProps {
    href: string;
    label?: string;
    style?: 'minimal' | 'luxury' | 'vibrant';
}

export const RequestButton: React.FC<RequestButtonProps> = ({
    href,
    label = 'Solicitar',
    style = 'minimal'
}) => {
    const getButtonStyles = () => {
        return {
            padding: '0.875rem 1.5rem',
            backgroundColor: '#0066ff',
            color: 'white',
            border: '2px solid white',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        };
    };

    const buttonStyles = getButtonStyles();

    return (
        <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            position: 'sticky',
            top: '2rem',
            right: '2rem',
            zIndex: 100,
         }}>
            <a href={Route.HOME}>
                <i className="fas fa-home"></i>
            </a>
            <a
                href={href}
                style={{
                    
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    textDecoration: 'none',
                    ...buttonStyles
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    if (style === 'luxury') {
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.5)';
                    } else if (style === 'vibrant') {
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 0, 110, 0.5)';
                    } else {
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 102, 255, 0.4)';
                    }
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    if (style === 'luxury') {
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
                    } else if (style === 'vibrant') {
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 0, 110, 0.3)';
                    } else {
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 102, 255, 0.3)';
                    }
                }}
            >
                {label}
            </a>
        </div>
    );
};
