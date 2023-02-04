import { Header } from '../Header';
import { Footer } from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className='max-w-[1920px] min-h-screen m-auto pt-10 px-12 text-zinc-700'>
        <Header />
        {children}
      </main>
      <Footer />
    </>
  );
};
