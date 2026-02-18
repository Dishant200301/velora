import { ReactNode } from 'react';

interface GradientBadgeProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
}

/**
 * GradientBadge Component
 * A badge with gradient border matching the Framer design
 * Variants:
 * - primary: Orange -> Red -> Black -> Blue gradient
 * - secondary: Orange -> Blue gradient (existing style)
 */
const GradientBadge = ({ children, variant = 'primary', className = '' }: GradientBadgeProps) => {
    const gradientStyles = {
        // Framer-inspired gradient: Orange -> Red -> Black -> Blue
        primary: 'linear-gradient(90deg, rgb(105, 51, 0) 0%, rgb(128, 30, 0) 32.88%, rgb(0, 0, 0) 54.05%, rgb(0, 105, 166) 100%)',
        // Existing gradient style
        secondary: 'linear-gradient(135deg, hsl(14 80% 53%), hsl(217 91% 60%))'
    };

    return (
        <div
            className={`inline-block rounded-full p-[1.5px] ${className}`}
            style={{
                background: gradientStyles[variant]
            }}
        >
            <div className="bg-black rounded-[16px] px-4 py-2">
                <p className="text-xs font-medium uppercase tracking-wider text-white">
                    {children}
                </p>
            </div>
        </div>
    );
};

export default GradientBadge;
