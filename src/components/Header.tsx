// app/components/Header.tsx
'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

function Header({ initialLanguage }: { initialLanguage: string }) {
  const { t, i18n } = useTranslation('default');
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState(initialLanguage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = useCallback(async (lng: string) => {
    await i18n.changeLanguage(lng);
    setCurrentLang(lng);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lng;
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    }
  }, [i18n]);

  useEffect(() => {
    setMounted(true);
    setCurrentLang(i18n.language ?? 'en');
  }, [i18n.language]);

  useEffect(() => {
    if (mounted === true) {
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [currentLang, mounted]);

  const isEnglishDisabled = currentLang === 'en';
  const isArabicDisabled = currentLang === 'ar';

  // Use consistent layout direction based on current language
  const isRTL = currentLang === 'ar';
  
  return (
    <header className="px-5 py-[20px] bg-white shadow-md m-0">
      <div className={`max-w-[1200px] mx-auto flex justify-between items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Logo */}
        <Link href="/" className="no-underline">
          <div className={`flex items-center gap-[10px] ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <img 
              src="images/logo.png" 
              alt="Logo" 
              className="h-[35px] md:h-[40px]"
            />
            <span className="text-[14px] md:text-[16px] font-bold text-[#027380]">
              {isRTL ? 'زهر رمان' : 'ZAHER RUMMAN'}
            </span>
          </div>
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-[30px] h-[25px] bg-transparent border-none cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-full h-[3px] bg-[#027380] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-full h-[3px] bg-[#027380] my-[5px] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-full h-[3px] bg-[#027380] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className={`flex list-none gap-[20px] m-0 p-0 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <li>
              <Link href="/" className="no-underline text-[#027380] font-bold hover:text-[#E31F55] transition-colors">
                {t('navigation.home')}
              </Link>
            </li>
            <li>
              <Link href="/collections" className="no-underline text-[#027380] font-bold hover:text-[#E31F55] transition-colors">
                {t('navigation.collections')}
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Desktop Language Switcher */}
        <div className={`hidden md:flex gap-[8px] ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
          <button 
            onClick={() => changeLanguage('en')} 
            disabled={isEnglishDisabled}
            className={`px-[12px] md:px-[16px] py-[6px] md:py-[8px] border border-[#20A3A4] rounded cursor-pointer text-[14px] md:text-[16px] transition-all ${
              isEnglishDisabled 
                ? 'bg-[#20A3A4] text-white cursor-default' 
                : 'bg-white text-[#20A3A4] hover:bg-[#20A3A4] hover:text-white'
            }`}
          >
            English
          </button>
          <button 
            onClick={() => changeLanguage('ar')} 
            disabled={isArabicDisabled}
            className={`px-[12px] md:px-[16px] py-[6px] md:py-[8px] border border-[#20A3A4] rounded cursor-pointer text-[14px] md:text-[16px] transition-all ${
              isArabicDisabled 
                ? 'bg-[#20A3A4] text-white cursor-default' 
                : 'bg-white text-[#20A3A4] hover:bg-[#20A3A4] hover:text-white'
            }`}
          >
            عربية
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[300px] mt-[20px]' : 'max-h-0'}`}>
        <nav className="mb-[15px]">
          <ul className="flex flex-col list-none gap-[15px] m-0 p-0">
            <li>
              <Link 
                href="/" 
                className="block no-underline text-[#027380] font-bold py-[10px] border-b border-gray-200 hover:text-[#E31F55] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navigation.home')}
              </Link>
            </li>
            <li>
              <Link 
                href="/collections" 
                className="block no-underline text-[#027380] font-bold py-[10px] border-b border-gray-200 hover:text-[#E31F55] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navigation.collections')}
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Language Switcher */}
        <div className={`flex gap-[8px] ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
          <button 
            onClick={() => {
              changeLanguage('en');
              setMobileMenuOpen(false);
            }} 
            disabled={isEnglishDisabled}
            className={`flex-1 px-[16px] py-[8px] border border-[#20A3A4] rounded cursor-pointer transition-all ${
              isEnglishDisabled 
                ? 'bg-[#20A3A4] text-white cursor-default' 
                : 'bg-white text-[#20A3A4]'
            }`}
          >
            English
          </button>
          <button 
            onClick={() => {
              changeLanguage('ar');
              setMobileMenuOpen(false);
            }} 
            disabled={isArabicDisabled}
            className={`flex-1 px-[16px] py-[8px] border border-[#20A3A4] rounded cursor-pointer transition-all ${
              isArabicDisabled 
                ? 'bg-[#20A3A4] text-white cursor-default' 
                : 'bg-white text-[#20A3A4]'
            }`}
          >
            العربية
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;