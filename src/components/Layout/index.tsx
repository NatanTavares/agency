import { Header } from '../Header';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className='max-w-[1920px] min-h-screen m-auto py-10 px-12'>
      <Header />
      {children}
      <div>i'm a footer</div>
    </main>
  );
};
