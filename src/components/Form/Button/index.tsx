import classNames from 'classNames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  outlined?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ label, outlined, ...rest }) => {
  return (
    <button
      className={classNames(
        'min-w-[162px] px-5 py-1.5 bg-zinc-500 rounded-full hover:opacity-75 border-2',
        {
          'bg-transparent border-zinc-500': outlined,
          'border-transparent': !outlined,
        },
      )}
      {...rest}
    >
      <span
        className={classNames('text-white font-medium', {
          'text-zinc-500': outlined,
        })}
      >
        {label}
      </span>
    </button>
  );
};
