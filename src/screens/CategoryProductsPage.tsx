// app/screens/CategoryProductsPage.tsx
'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { theme } from '../../shared';
import { MenuCategory } from '../data/menuData';

interface CategoryProductsPageProps {
  category: MenuCategory;
}

function CategoryProductsPage({ category }: CategoryProductsPageProps) {
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

  return (
    <div className="category-products-page">
      {/* Hero Section */}
      <section 
        className="relative min-h-[350px] flex items-center justify-center text-center px-5 py-[60px] mb-[60px]"
        style={{
          background: 'linear-gradient(135deg, #027380 0%, #20A3A4 100%)',
        }}
      >
        <div className="relative z-10 max-w-[900px]">
          {/* Back Button */}
          <Link 
            href="/collections"
            className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} flex items-center gap-[8px] text-white hover:text-white/80 transition-colors mb-[20px]`}
          >
            <svg className="w-[24px] h-[24px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
            </svg>
            <span className="text-[16px] font-semibold">{isRTL ? 'العودة إلى الفئات' : 'Back to Categories'}</span>
          </Link>

          {/* Category Icon */}
          <div className="text-[100px] mb-[2px] drop-shadow-2xl">
            {getCategoryIcon(category.id)}
          </div>
          
          {/* Category Name */}
          <h1 className="text-[42px] md:text-[56px] mb-[2px] text-white font-bold leading-tight">
            {isRTL ? category.nameAr : category.nameEn}
          </h1>
          
          {/* Category Description */}
          <p className="text-[18px] md:text-[22px] text-white/90 mb-[2px]">
            {isRTL ? category.descriptionAr : category.descriptionEn}
          </p>
          
          {/* Items Count */}
          <div className="inline-flex items-center gap-[8px] bg-white/20 backdrop-blur-sm px-[25px] py-[12px] rounded-full">
            <svg className="w-[24px] h-[24px] text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-bold text-[18px]">
              {category.items.length} {isRTL ? 'أطباق متوفرة' : 'Available Items'}
            </span>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-[15%] left-[8%] w-[120px] h-[120px] bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-[15%] right-[8%] w-[180px] h-[180px] bg-white rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Products Grid */}
      <div className="max-w-[1400px] mx-auto px-5 pb-[80px]">
        {category.items.length === 0 ? (
          <div className="text-center py-[60px]">
            <div className="text-[64px] mb-[20px]">🍽️</div>
            <h3 className="text-[28px] font-bold text-[#027380] mb-[10px]">
              {isRTL ? 'لا توجد أطباق متاحة حالياً' : 'No Items Available Yet'}
            </h3>
            <p className="text-[18px] text-[#666]">
              {isRTL ? 'يرجى التحقق مرة أخرى قريباً' : 'Please check back soon'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {category.items.map((item, index) => (
              <Link 
                key={item.id}
                href={`/products/${item.id}`}
                className="group"
              >
                <div 
                  className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Product Image */}
                  <div className="relative h-[220px] bg-gradient-to-br from-[#027380] to-[#20A3A4] overflow-hidden">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={isRTL ? item.nameAr : item.nameEn}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[80px]">
                        🍽️
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Calories Badge */}
                    <div className={`absolute top-[15px] ${isRTL ? 'left-[15px]' : 'right-[15px]'} bg-white/95 backdrop-blur-sm px-[12px] py-[6px] rounded-full text-[#027380] font-bold text-[14px] shadow-md`}>
                      {item.calories} {isRTL ? 'سعرة' : 'cal'}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col p-[25px] space-y-2">
                    {/* Product Name */}
                    <h3 className="text-[22px] font-bold text-[#027380]  group-hover:text-[#E31F55] transition-colors line-clamp-2">
                      {isRTL ? item.nameAr : item.nameEn}
                    </h3>
                    
                    {/* Product Description */}
                    <p className="text-[15px] text-[#666]  leading-relaxed line-clamp-3">
                      {isRTL ? item.descriptionAr : item.descriptionEn}
                    </p>
                    
                    {/* Price and Size */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[12px] text-[#999] mb-[4px]">
                          {isRTL ? 'الحجم:' : 'Size:'} {item.size}
                        </div>
                        <div className="text-[28px] font-bold text-[#E31F55]">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>
                      
                      {/* View Details Arrow */}
                      <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#027380] to-[#20A3A4] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <svg className="w-[24px] h-[24px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Additional Categories Section */}
      <section className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] py-[60px] px-5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] mb-[15px] text-[#027380] font-bold">
            {isRTL ? 'استكشف فئات أخرى' : 'Explore Other Categories'}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666] mb-[40px]">
            {isRTL ? 'اكتشف المزيد من الأطباق الشهية من قوائمنا الأخرى' : 'Discover more delicious dishes from our other menus'}
          </p>
          <Link href="/collections">
            <button className="bg-gradient-to-r from-[#027380] to-[#20A3A4] text-white border-none px-[40px] py-[16px] rounded-full cursor-pointer text-[18px] font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              {isRTL ? 'عرض جميع الفئات' : 'View All Categories'}
            </button>
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default CategoryProductsPage;
