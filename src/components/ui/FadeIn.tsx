import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils'; // Assuming this utility exists, based on other UI components

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    fullWidth?: boolean;
    viewportMargin?: string; // e.g., "-100px" to trigger earlier/later
}

const FadeIn: React.FC<FadeInProps> = ({
    children,
    className,
    delay = 0,
    direction = 'up',
    fullWidth = true,
    viewportMargin = '-50px'
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: viewportMargin,
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [viewportMargin]);

    const getDirectionStyles = () => {
        switch (direction) {
            case 'up':
                return 'translate-y-8';
            case 'down':
                return '-translate-y-8';
            case 'left':
                return 'translate-x-8';
            case 'right':
                return '-translate-x-8';
            case 'none':
            default:
                return '';
        }
    };

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all duration-1000 ease-out',
                isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${getDirectionStyles()}`,
                fullWidth ? 'w-full' : '',
                className
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default FadeIn;
