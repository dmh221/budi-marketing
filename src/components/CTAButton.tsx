interface CTAButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function CTAButton({
  label,
  onClick,
  href,
  variant = 'primary',
  className = ''
}: CTAButtonProps) {
  const baseStyles = "font-semibold py-3 px-8 rounded-full transition-transform duration-200 hover:scale-105 active:scale-95";

  const variantStyles = {
    primary: "bg-budi-lime text-white",
    secondary: "border-2 border-budi-lime text-budi-lime hover:bg-budi-lime/10"
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedStyles}
    >
      {label}
    </button>
  );
}
