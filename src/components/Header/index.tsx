import { MagnifyingGlass } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import i18n from '../../libs/i18n';
import { Button, IconButton } from '../Form';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  const changeLanguageAction = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
    // setSelectedLang(lang);
  };

  return (
    <header className='flex w-full items-center'>
      <h1 className='text-zinc-500 text-3xl font-bold'>Roots</h1>

      <div className='flex-1 px-20'>
        <Navigation />
      </div>

      <div className='flex gap-5'>
        <IconButton
          icon={MagnifyingGlass}
          onClick={() =>
            changeLanguageAction(i18n.language === 'en-US' ? 'pt-BR' : 'en-US')
          }
        />
        <Button label={t('global.get-quote')} />
      </div>
    </header>
  );
};
