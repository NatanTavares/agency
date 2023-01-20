import { IconProps } from 'phosphor-react';

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  ...rest
}) => {
  return (
    <button
      className='w-10 h-10 bg-zinc-300 rounded-full hover:opacity-75 flex items-center justify-center'
      {...rest}
    >
      <span className='text-white'>
        <Icon size={20} />
      </span>
    </button>
  );
};
