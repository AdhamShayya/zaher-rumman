// app/screens/CollectionPage.tsx
'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { theme } from '../../shared';
import { menuCategories } from '../data/menuData';

function CollectionPage() {
  const { t, i18n } = useTranslation('default');
  const isRTL = i18n.language === 'ar';

  // Get category emoji/icon
  const getCategoryIcon = (id: string) => {
    const icons: { [key: string]: string } = {
      'cold-appetizers': '🥗',
      'salads': '🥙',
      'hot-appetizers': '🍲',
      'sandwiches': '🥪',
      'main-dishes': '🍽️',
      'soups': '🍜',
      'desserts': '🍰'
    };
    return icons[id] || '🍴';
  };

  // Get gradient colors for each category
  const getCategoryGradient = (index: number) => {
    const gradients = [
      'linear-gradient(135deg, #027380 0%, #20A3A4 100%)',
      'linear-gradient(135deg, #E31F55 0%, #F56B8A 100%)',
      'linear-gradient(135deg, #0F4C75 0%, #3282B8 100%)',
      'linear-gradient(135deg, #FF6B6B 0%, #FFB347 100%)',
      'linear-gradient(135deg, #6A0572 0%, #A239CA 100%)',
      'linear-gradient(135deg, #16A085 0%, #1ABC9C 100%)',
      'linear-gradient(135deg, #D35400 0%, #E67E22 100%)',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="collection-page">
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center text-center px-5 py-[80px] mb-[60px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/landscape/sofra.jpg)',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-[800px]">
          <h1 className="text-[42px] md:text-[56px] mb-[20px] text-white font-bold leading-tight animate-fade-in drop-shadow-2xl">
            {t('collectionPage.title')}
          </h1>
          <p className="text-[18px] md:text-[22px] text-white/90 mb-[30px] drop-shadow-lg">
            {t('collectionPage.description')}
          </p>
          <div className="w-[100px] h-[4px] bg-white mx-auto rounded"></div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <div className="max-w-[1400px] mx-auto px-5 pb-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {menuCategories.map((category, index) => (
            <Link 
              key={category.id}
              href={`/collections/${category.id}`}
              className="group"
            >
              <div 
                className="relative rounded-[20px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{ minHeight: '320px' }}
              >
                {/* Background Gradient */}
                <div 
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background: theme.colors.darkBlue,
                  }}
                />
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-[30px] text-center">
                  {/* Icon */}
                  <div className="text-[80px] mb-[20px] drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    {getCategoryIcon(category.id)}
                  </div>
                  
                  {/* Category Name */}
                  <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-[12px] drop-shadow-lg">
                    {isRTL ? category.nameAr : category.nameEn}
                  </h2>
                  
                  {/* Category Description */}
                  <p className="text-[16px] text-white/90 mb-[20px] leading-relaxed">
                    {isRTL ? category.descriptionAr : category.descriptionEn}
                  </p>
                  
                  {/* Items Count Badge */}
                  <div className="inline-flex items-center gap-[8px] bg-white/20 backdrop-blur-sm px-[20px] py-[10px] rounded-full">
                    <svg className="w-[20px] h-[20px] text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-bold text-[16px]">
                      {category.items.length} {isRTL ? 'أطباق' : 'Items'}
                    </span>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className={`${isRTL ? 'left-[20px]' : 'right-[20px]' } absolute bottom-[28px] bg-white/30 backdrop-blur-sm w-[45px] h-[45px] rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:translate-x-[5px] group-hover:bg-white/50`}>
                    <svg className="w-[24px] h-[24px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                    </svg>
                  </div>
                </div>

                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-[10%] left-[10%] w-[60px] h-[60px] bg-white rounded-full blur-2xl"></div>
                  <div className="absolute bottom-[20%] right-[15%] w-[80px] h-[80px] bg-white rounded-full blur-2xl"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-[#027380] to-[#20A3A4] py-[80px] px-5 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[48px] mb-[20px] text-white font-bold">
            {isRTL ? 'لم تجد ما تبحث عنه؟' : "Can't Find What You're Looking For?"}
          </h2>
          <p className="text-[18px] md:text-[22px] mb-[40px] text-white/90">
            {isRTL ? 'تواصل معنا وسنساعدك في إيجاد الطبق المثالي' : "Contact us and we'll help you find the perfect dish"}
          </p>
          <button className="bg-white text-[#027380] border-none px-[40px] py-[16px] rounded-full cursor-pointer text-[18px] font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            {isRTL ? 'اتصل بنا' : 'Contact Us'}
          </button>
        </div>
      </section>
    </div>
  );
}

export default CollectionPage;
