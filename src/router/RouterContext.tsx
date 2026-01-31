import React, { createContext, useContext, useEffect, useState } from 'react';

interface RouterContextType {
    currentPath: string;
    navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(
        window.location.pathname || '/'
    );

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname || '/');
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const navigate = (path: string) => {
        if (path === currentPath) return;
        window.history.pushState({}, '', path);
        setCurrentPath(path);
        window.scrollTo(0, 0);
    };

    return (
        <RouterContext.Provider value={{ currentPath, navigate }}>
            {children}
        </RouterContext.Provider>
    );
};

export const useRouter = () => {
    const ctx = useContext(RouterContext);
    if (!ctx) {
        throw new Error('useRouter must be used inside <RouterProvider>');
    }
    return ctx;
};
