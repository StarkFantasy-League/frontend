
"use client";

type ButtonVariant = 'primary' | 'secondary' | 'blank';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;   // 'primary', 'secondary', or 'blank'
  size?: ButtonSize;         // 'small', 'medium', or 'large'
  onClick?: React.MouseEventHandler<HTMLButtonElement>; 
  children: React.ReactNode; // Button content (text or components)
  width?: string;            // Optional width (override default if needed)
  height?: string;           // Optional height (override default if needed)
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary', // Default to 'primary'
  size = 'medium',     // Default to 'medium' size
  onClick,             // Function to handle the click event
  children,            // Button text or content
  width ='130px',     // Default to '130px' if width not provided
  height = '50px'     // Default to '50px' if height not provided
}) => {

  const baseStyles = 'transition-all duration-300 ease-in-out rounded-xl text-xl';

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-[#F54900] text-white hover:bg-[#FE9A00] border border-[#F54900]',
    secondary: 'bg-[#312C85] text-white hover:bg-[#372AAC] border border-[#151ECB] ',
    blank: 'bg-transparent text-[#FFFFFF] border border-[#FFFFFF] hover:bg-[#FFFFF] hover:text-[#0F172B]',
  };

  const sizeStyles: Record<ButtonSize, { width: string; height: string }> = {
    small: { width: 'w-[104px]', height: 'h-[40px]' },  // 80% of 130px and 50px
    medium: { width: 'w-[130px]', height: 'h-[50px]' }, // Default size
    large: { width: 'w-[156px]', height: 'h-[60px]' }   // 120% of 130px and 50px
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;

  return (
    <button
    className={`${buttonStyles} ${sizeStyles[size].width} ${sizeStyles[size].height}`}
      onClick={onClick}
      style={{ width, height}}
    >
      {children} 
    </button>
  );
};

export default Button;