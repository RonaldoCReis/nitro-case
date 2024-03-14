import { PropsWithChildren } from 'react';
import { cn } from '../../utils/cn';

interface SectionTitleProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLHeadingElement> {}

const SectionTitle = ({ children, className, ...props }: SectionTitleProps) => {
  return (
    <h1
      {...props}
      className={cn(
        'uppercase tracking-wide text-lg py-4 text-primary text-center font-bold',
        className
      )}
    >
      {children}
    </h1>
  );
};

export default SectionTitle;
