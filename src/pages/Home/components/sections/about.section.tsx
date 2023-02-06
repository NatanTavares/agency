import { Patter02 } from '../../../../assets/patterns/patter-02';
import { Card } from '../Card';

export const AboutSection: React.FC = () => {
  return (
    <section className='flex justify-center items-center mt-72 h-[800px] gap-32'>
      <Patter02 className='absolute left-0 -rotate-45 -z-10' />

      <div className='flex flex-col gap-32 w-[792px]'>
        <Card
          epoch={1}
          title='Professional Support'
          content='It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.'
        />
        <div className='ml-auto'>
          <Card
            epoch={2}
            title='Awesome Design'
            content='It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.'
          />
        </div>
        <div className='ml-10'>
          <Card
            epoch={3}
            title='Planning & Executing'
            content='It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.'
          />
        </div>
      </div>

      <article className='max-w-lg'>
        <h3 className='subtitle'>About Roots</h3>

        <p className='paraph mt-5'>
          It is a long established fact that a reader will be by the readable content of a page.
        </p>

        <p className='paraph mt-5'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took
        </p>

        <button className='flex items-center mt-5 text-black font-medium text-lg hover:opacity-75'>
          Explore
          <div className='ml-2.5 w-10 h-0.5 bg-zinc-500' />
        </button>
      </article>
    </section>
  );
};
