
"use client";
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'blank';

type ButtonProps = {
  variant?: ButtonVariant;          
  onClick?: React.MouseEventHandler<HTMLButtonElement>; 
  children: React.ReactNode;        
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',     
  className = "",
  onClick,            
  children          
}) => {

  return (
    <button
     className={clsx(
            'transition-all duration-300 ease-in-out rounded-lg border text-white w-[120px] py-2 text-xl', 
            variant === 'primary' && 'bg-[#F54900] hover:bg-[#FE9A00] border-[#F54900]',
            variant === 'secondary'  &&  'bg-[#312C85] hover:bg-[#372AAC] border-[#151ECB] ',
            variant === 'blank' &&  'bg-transparent border-[#FFFFFF] hover:bg-[#FFFFF] hover:text-[#0F172B]',
            className
          )}
      onClick={onClick}
    >
      {children} 
    </button>
  );
};

export default Button;