type CardProps = {
  epoch: number;
  title: string;
  content: string;
};

export const Card: React.FC<CardProps> = ({ content, epoch, title }) => {
  return (
    <div className='relative w-[600px] h-40'>
      <div className='w-full h-full pt-6 px-7 border border-zinc-100 bg-white shadow'>
        <div className='absolute -left-9 -top-9 flex items-center justify-center w-[72px] h-[72px] rounded-full border border-zinc-100 bg-white shadow'>
          <span className='text-4xl text-black font-bold'>{epoch}</span>
        </div>

        <h3 className='text-3xl font-medium'>{title}</h3>
        <p className='mt-4 text-xl'>{content}</p>
      </div>
    </div>
  );
};
