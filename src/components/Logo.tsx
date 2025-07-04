

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`font-bold text-2xl ${className}`}>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
        AXORA
      </span>
    </div>
  );
}