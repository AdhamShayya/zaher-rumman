'use client';

import { I18nextProvider } from 'react-i18next';
import { createInstance } from 'i18next';
import { useMemo } from 'react';
import initTranslations from '../app/i18n';

export default function TranslationsProvider({
  children,
  locale,
  namespaces = [],
  resources,
}: {
  children: React.ReactNode;
  locale: string;
  namespaces?: string[];
  resources: Record<string, Record<string, string>>;
}) {
  const i18n = useMemo(() => {
    const instance = createInstance();
    initTranslations(locale, namespaces, instance, resources);
    return instance;
  }, [locale, namespaces, resources]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
