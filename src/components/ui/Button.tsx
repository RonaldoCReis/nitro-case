import { PropsWithChildren } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps
  extends PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'w-full text-white bg-primary py-3 rounded-xl hover:bg-blue-900 font-bold',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
