import { useState, useEffect } from 'react';

function useCurrentBreakpoint(): string {
    const [currentBreakpoint, setCurrentBreakpoint] = useState<string>(() => getCurrentBreakpoint());

    useEffect(() => {
        function handleResize() {
            setCurrentBreakpoint(getCurrentBreakpoint());
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return currentBreakpoint;
}

function getCurrentBreakpoint(): string {
    const width = window.innerWidth;

    if (width >= Breakpoint.XL) {
        return 'xl';
    } else if (width >= Breakpoint.LG) {
        return 'lg';
    } else if (width >= Breakpoint.MD) {
        return 'md';
    } else if (width >= Breakpoint.SM) {
        return 'sm';
    } else {
        return 'xs';
    }
}

export { useCurrentBreakpoint };

const Breakpoint = {
    XS: 0,
    SM: 576,
    MD: 768,
    LG: 992,
    XL: 1200,
} as const;

export type Breakpoint = keyof typeof Breakpoint;
