import { Patter03 } from '../../../../assets/patterns/patter-03';
import { IconCard } from '../IconCard';

export const ServicesSection: React.FC = () => {
  return (
    <div className='relative max-w-[1440px] mx-auto mt-8 pt-96'>
      <Patter03 className='absolute top-0 opacity-90' />

      <h3 className='subtitle'>Provided Services by Roots</h3>
      <p className='paraph max-w-xl'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry&apos;s standard
      </p>

      <div className='grid grid-cols-3 gap-y-20 mx-auto mt-24'>
        <IconCard
          title='Website Development'
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's"
          icon={<></>}
        />
        <IconCard
          title='Application Development'
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's"
          icon={<></>}
        />
        <IconCard
          title='UI/UX Design'
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's"
          icon={<></>}
        />
        <IconCard
          title='Digital Marketing'
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's"
          icon={<></>}
        />
        <IconCard
          title='SEO Backlinks'
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's"
          icon={<></>}
        />
        <IconCard
          title='Website Development'
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's"
          icon={<></>}
        />
      </div>
    </div>
  );
};
