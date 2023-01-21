import { Header } from '../Header';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className='max-w-[1920px] min-h-screen m-auto py-10 px-12 text-zinc-700'>
      <Header />
      {children}
      <div className='fixed bottom-0 left-0 bg-gray-900 w-full text-white'>i&apos;m a footer</div>
    </main>
  );
};
