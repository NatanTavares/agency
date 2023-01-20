type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <button
      className='min-w-[169px] px-5 py-2 bg-zinc-500 rounded-full hover:opacity-75'
      {...rest}
    >
      <span className='text-white font-medium'>{label}</span>
    </button>
  );
};
