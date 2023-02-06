import { Patter01 } from '../../assets/patterns/patter-01';
import { Layout } from '../../components';
import { Button } from '../../components/Form';
import { AboutSection, ServicesSection } from './components/sections';

export const Home: React.FC = () => {
  return (
    <Layout>
      <div className='h-[700px]'>
        <Patter01 className='w-[70%] absolute right-0 -top-20 -z-10' />

        <div className='max-w-[580px] mt-56'>
          <h1 className='text-7xl font-bold'>
            A Digital Agency <span className='text-6xl font-thin'>& Solution.</span>
          </h1>
          <p className='text-2xl mt-3 mb-8'>To boost your business and sales with Roots</p>
          <Button label='Explore' outlined />
        </div>
      </div>

      <AboutSection />
      <ServicesSection />
    </Layout>
  );
};
