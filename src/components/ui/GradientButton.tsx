import { ReactNode, ButtonHTMLAttributes } from 'react';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'primary' | 'secondary';
    fullWidth?: boolean;
    className?: string;
}

/**
 * GradientButton Component
 * A premium button with animated gradient effects and hover animations
 * Based on Framer design with blob, gradient, and blur effects
 * 
 * Sizes:
 * - sm: Small (py-2.5, text-sm) - For compact spaces
 * - md: Medium (py-3, text-base) - Default size
 * - lg: Large (py-3.5, text-lg) - For emphasis
 * - xl: Extra Large (py-4, text-xl) - For hero sections
 */
const GradientButton = ({
    children,
    size = 'md',
    variant = 'primary',
    fullWidth = false,
    className = '',
    type = 'button',
    ...props
}: GradientButtonProps) => {

    // Size configurations
    const sizeClasses = {
        sm: 'px-6 py-2.5 text-sm',
        md: 'px-8 py-3 text-base',
        lg: 'px-10 py-3.5 text-lg',
        xl: 'px-12 py-4 text-xl'
    };

    const gradients = {
        primary: 'linear-gradient(163deg, rgb(255, 137, 24) 28%, rgb(162, 41, 4) 54%, rgb(0, 0, 0) 68%, rgb(0, 152, 243) 100%)',
        secondary: 'linear-gradient(135deg, hsl(14 80% 53%), hsl(217 91% 60%))'
    };

    return (
        <button
            type={type}
            className={`
        relative overflow-hidden rounded-xl
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${sizeClasses[size]}
        font-medium
        transition-all duration-300
        
        active:scale-[0.98]
        group
        ${className}
      `}
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                boxShadow: 'rgba(255, 255, 255, 0.25) 0px -2px 4px 0px inset'
            }}
            {...props}
        >
            {/* Animated Blob Effect */}
            <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: 'radial-gradient(50% 50%, rgb(255, 255, 255) 52.88%, rgb(140, 54, 2) 100%)',
                    filter: 'blur(3px)',
                    transform: 'scale(0.8)',
                    transition: 'transform 0.5s ease'
                }}
            />

            {/* Gradient Border Layer with Neon Glow on Hover */}
            <div
                className="absolute inset-0 rounded-xl transition-all duration-500 group-hover:shadow-neon-glow"
                style={{
                    background: gradients[variant],
                    opacity: 1
                }}
            />

            {/* Black Fill Background */}
            <div
                className="absolute inset-0 rounded-xl"
                style={{
                    backgroundColor: '#000',
                    margin: '1px' // Creates border effect
                }}
            />

            {/* Text Wrapper with Slide Animation */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
                <div
                    className="text-slide-up overflow-hidden"
                    style={{
                        height: size === 'xl' ? '1.75rem' : size === 'lg' ? '1.5rem' : size === 'sm' ? '1rem' : '1.25rem'
                    }}
                >
                    <div className="text-slide-inner flex flex-col">
                        <span
                            className="flex items-center justify-center text-white whitespace-nowrap"
                            style={{
                                height: size === 'xl' ? '1.75rem' : size === 'lg' ? '1.5rem' : size === 'sm' ? '1rem' : '1.25rem'
                            }}
                        >
                            {children}
                        </span>
                        <span
                            className="flex items-center justify-center text-white whitespace-nowrap"
                            style={{
                                height: size === 'xl' ? '1.75rem' : size === 'lg' ? '1.5rem' : size === 'sm' ? '1rem' : '1.25rem'
                            }}
                        >
                            {children}
                        </span>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default GradientButton;
