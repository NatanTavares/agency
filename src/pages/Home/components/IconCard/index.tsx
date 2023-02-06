type IconCardProps = {
  title: string;
  content: string;
  icon: React.ReactElement;
};

export const IconCard: React.FC<IconCardProps> = ({ content, icon, title }) => {
  return (
    <div className='relative max-w-[464px]'>
      <div className='absolute left-7 -top-12 w-[100px] h-[100px] rounded-full border border-zinc-200 bg-zinc-100 shadow'>
        {icon}
      </div>

      <div className='w-full h-full px-5 pt-16 pb-10 border border-zinc-100 bg-white shadow-md'>
        <strong className='font-medium text-xl'>{title}</strong>

        <p className='text-base mt-3'>{content}</p>
      </div>
    </div>
  );
};
