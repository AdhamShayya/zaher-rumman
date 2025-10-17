import initTranslations from '../app/i18n';
import TranslationsProvider from '../components/TranslationsProvider/TranslationsProvider';

export default async function withTranslationProvider(
  Component: any,
  props: any
) {
  const locale = 'en';

  const { resources } = await initTranslations(locale, ['default']);

  return (
    <TranslationsProvider locale={locale} resources={resources}>
      <Component {...props} />
    </TranslationsProvider>
  );
}
