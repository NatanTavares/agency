type NavLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  activeLink: boolean;
  label: string;
};

export const NavLink: React.FC<NavLinkProps> = ({
  activeLink,
  label,
  ...rest
}) => {
  return (
    <div className='relative'>
      <a {...rest} className="text-lg font-medium">{label}</a>
      {activeLink && (
        <div className='absolute w-full h-[2px] mt-2.5 bg-zinc-600 rounded-full' />
      )}
    </div>
  );
};
