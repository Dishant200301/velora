
import { cn } from "@/lib/utils";

export const GlowingEffect = ({
    glow = true,
    disabled = false,
}: {
    spread?: number;
    glow?: boolean;
    disabled?: boolean;
    proximity?: number;
    inactiveZone?: number;
    borderWidth?: number;
}) => {
    return (
        <div
            className={cn(
                "pointer-events-none absolute -inset-px hidden rounded-[inherit] md:block",
                glow && "opacity-100",
                disabled && "!hidden"
            )}
        >
            {/* Spinning Border Animation */}
            <div
                className="absolute inset-0 rounded-[inherit]"
                style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                }}
            >
                <div
                    className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]"
                    style={{
                        background:
                            "conic-gradient(from 0deg, transparent 0 340deg, #ff8918 360deg)",
                    }}
                />
            </div>

            {/* Bottom Gradient Line Glow Effect */}
            <div
                className="absolute bottom-0 left-[20%] right-[20%] h-[1px]"
                style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgb(162, 41, 4) 20%, rgb(255, 137, 24) 50%, rgb(162, 41, 4) 80%, transparent 100%)',
                    boxShadow: '0 0 10px 1px rgba(255, 137, 24, 0.5)',
                    filter: 'blur(0.5px)',
                    opacity: 0.8
                }}
            />
            <div
                className="absolute bottom-0 left-[30%] right-[30%] h-[2px]"
                style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgb(162, 41, 4) 25%, rgb(255, 137, 24) 50%, rgb(162, 41, 4) 75%, transparent 100%)',
                    filter: 'blur(0px)',
                    opacity: 1
                }}
            />

            {/* Subtle overall border fallback */}
            <div className="absolute inset-0 rounded-[inherit] border border-white/5"></div>
        </div>
    );
};
