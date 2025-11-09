// app/screens/HomePage.tsx
'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getFeaturedItems } from '../data/menuData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function HomePage() {
  const { t, i18n } = useTranslation('default');
  const params = useParams();
  const locale = params?.locale as string || 'en';
  const isRTL = i18n.language === 'ar';
  
  // Get featured dishes from menu data
  const featuredDishes = getFeaturedItems();

  // Hero images for swiper
  const heroImages = [
    '/images/landscape/landscape-5.jpg',
    '/images/landscape/landscape-4.jpg',
    '/images/landscape/landscape-3.jpg',
    '/images/landscape/landscape-2.jpg',
  ];

  return (
    <div className="home-page">
      {/* Hero Section with Swiper */}
      <section className="hero relative min-h-[600px] w-full">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-[600px]"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full flex items-center justify-center text-center px-5 py-10"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="max-w-[800px]">
                  <h1 className="text-[48px] md:text-[50px] mb-5 font-bold text-white leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    {t('homePage.welcomeMessage')}
                  </h1>
                  <p className="text-[20px] md:text-[28px] mb-10 text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    {t('homePage.subtitle')}
                  </p>
                  <div className="flex gap-5 justify-center flex-wrap">
                    <Link href="/collections/breakfast">
                      <button className="bg-[#E31F55] text-white border-none px-10 py-[18px] text-[19px] rounded-full cursor-pointer font-bold uppercase tracking-wider shadow-lg hover:translate-y-[-2px] hover:shadow-xl hover:bg-[#027380] transition-all duration-300">
                        {isRTL ? 'الإفطار' : 'Breakfast'}
                      </button>
                    </Link>
                    <Link href="/collections">
                      <button className="bg-[#027380] text-white border-none px-10 py-[18px] text-[19px] rounded-full cursor-pointer font-bold uppercase tracking-wider shadow-lg hover:translate-y-[-2px] hover:shadow-xl hover:bg-[#E31F55] transition-all duration-300">
                        {isRTL ? 'القائمة الرئيسية' : 'Main Menu'}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Quick Stats Section */}
      <section className="bg-white py-[60px] px-5 shadow-sm">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div>
            <div className="text-[48px] font-bold text-[#E31F55] mb-[10px]">
              50+
            </div>
            <div className="text-[18px] text-[#555]">
              {isRTL ? 'أطباق مميزة' : 'Signature Dishes'}
            </div>
          </div>
          <div>
            <div className="text-[48px] font-bold text-[#E31F55] mb-[10px]">
              15+
            </div>
            <div className="text-[18px] text-[#555]">
              {isRTL ? 'سنوات من الخبرة' : 'Years Experience'}
            </div>
          </div>
          <div>
            <div className="text-[48px] font-bold text-[#E31F55] mb-[10px]">
              5K+
            </div>
            <div className="text-[18px] text-[#555]">
              {isRTL ? 'عملاء سعداء' : 'Happy Customers'}
            </div>
          </div>
          <div>
            <div className="text-[48px] font-bold text-[#E31F55] mb-[10px]">
              100%
            </div>
            <div className="text-[18px] text-[#555]">
              {isRTL ? 'مكونات طازجة' : 'Fresh Ingredients'}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-[80px] px-5 max-w-[1200px] mx-auto ">
        <div className="text-center mb-[60px]">
          <h2 className="text-[32px] md:text-[48px] mb-[15px] text-[#027380] font-bold">
            {t('homePage.featuredDishes')}
          </h2>
          <div className="w-[80px] h-[4px] bg-[#E31F55] mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {featuredDishes.map(dish => (
            <Link 
              key={dish.id}
              href={`/${locale}/products/${dish.id}`}
              className="block h-full"
            >
              <div 
                className="rounded-[15px] overflow-hidden shadow-lg hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-300 cursor-pointer bg-white h-full flex flex-col"
              >
                <div 
                  className="h-[250px] flex items-center justify-center text-white text-[22px] font-bold relative overflow-hidden flex-shrink-0"
                >
                  {dish.image ? (
                    <>
                      <img 
                        src={dish.image} 
                        alt={isRTL ? dish.nameAr : dish.nameEn}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                    </>
                  ) : (
                    <div 
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(135deg, #A9D7D6 0%, #20A3A4 100%)' }}
                    ></div>
                  )}
                  <div 
                    className={`absolute top-[15px] bg-[#E75B6A] text-white px-[15px] py-[8px] rounded-full text-[14px] font-bold z-10 ${isRTL ? 'left-[15px]' : 'right-[15px]'}`}
                  >
                    ${dish.price.toFixed(2)}
                  </div>
                </div>
                <div className="p-[25px] flex flex-col flex-grow">
                  <h3 className="mb-[12px] text-[#027380] text-[22px] font-bold">
                    {isRTL ? dish.nameAr : dish.nameEn}
                  </h3>
                  <p className="mb-3 text-[#666] leading-relaxed text-[15px] flex-grow">
                    {isRTL ? dish.descriptionAr : dish.descriptionEn}
                  </p>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-[24px] font-bold text-[#E31F55]">
                      ${dish.price.toFixed(2)}
                    </span>
                    <span className="text-[14px] text-[#999]">
                      {dish.calories} {isRTL ? 'سعرة' : 'cal'}
                    </span>
                  </div>
                  <button className="bg-[#E31F55] text-white border-none px-6 py-3 rounded-lg cursor-pointer w-full text-[16px] font-bold hover:bg-[#027380] transition-all duration-300">
                    {t('menu.viewDetails')} →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#f8f9fa] py-[80px] px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-[60px]">
            <h2 className="text-[32px] md:text-[48px] mb-[15px] text-[#027380] font-bold">
              {isRTL ? 'لماذا تختارنا' : 'Why Choose Us'}
            </h2>
            <div className="w-[80px] h-[4px] bg-[#E31F55] mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center p-[30px] bg-white rounded-[15px] shadow-md">
              <div className="text-[48px] mb-5 text-[#E31F55]">
                🍽️
              </div>
              <h3 className="text-[22px] mb-[15px] text-[#027380] font-bold">
                {isRTL ? 'وصفات أصيلة' : 'Authentic Recipes'}
              </h3>
              <p className="text-[#666] leading-relaxed">
                {isRTL ? 'وصفات تقليدية متوارثة عبر الأجيال' : 'Traditional recipes passed down through generations'}
              </p>
            </div>
            
            <div className="text-center p-[30px] bg-white rounded-[15px] shadow-md">
              <div className="text-[48px] mb-5 text-[#E31F55]">
                ✨
              </div>
              <h3 className="text-[22px] mb-[15px] text-[#027380] font-bold">
                {isRTL ? 'مكونات طازجة' : 'Fresh Ingredients'}
              </h3>
              <p className="text-[#666] leading-relaxed">
                {isRTL ? 'نستخدم فقط أفضل وأجود المكونات الطازجة' : 'We use only the finest and freshest ingredients'}
              </p>
            </div>
            
            <div className="text-center p-[30px] bg-white rounded-[15px] shadow-md">
              <div className="text-[48px] mb-5 text-[#E31F55]">
                👨‍🍳
              </div>
              <h3 className="text-[22px] mb-[15px] text-[#027380] font-bold">
                {isRTL ? 'طهاة خبراء' : 'Expert Chefs'}
              </h3>
              <p className="text-[#666] leading-relaxed">
                {isRTL ? 'فريق من أمهر الطهاة ذوي الخبرة الواسعة' : 'Team of skilled chefs with extensive experience'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About & Info Section */}
      <section 
        className="py-[80px] px-5 text-white"
        style={{ background: 'linear-gradient(135deg, #A9D7D6 0%, #20A3A4 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
          <div className="bg-white/10 p-[30px] rounded-[15px]" style={{ backdropFilter: 'blur(10px)' }}>
            <h2 className="mb-5 text-[28px] font-bold">
              {t('homePage.aboutUs')}
            </h2>
            <p className="leading-relaxed text-[17px]">
              {t('homePage.aboutText')}
            </p>
          </div>
          <div className="bg-white/10 p-[30px] rounded-[15px]" style={{ backdropFilter: 'blur(10px)' }}>
            <h2 className="mb-5 text-[28px] font-bold">
              ⏰ {t('homePage.hours')}
            </h2>
            <p className="mb-[10px] text-[17px]">
              {t('homePage.hoursWeekdays')}
            </p>
            <p className="text-[17px]">
              {t('homePage.hoursWeekend')}
            </p>
          </div>
          <div className="bg-white/10 p-[30px] rounded-[15px]" style={{ backdropFilter: 'blur(10px)' }}>
            <h2 className="mb-5 text-[28px] font-bold">
              📍 {t('homePage.location')}
            </h2>
            <p className="leading-relaxed text-[17px]">
              {t('homePage.address')}
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#027380] text-white py-[80px] px-5 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[32px] md:text-[48px] mb-5 font-bold">
            {isRTL ? 'جاهز لتجربة طعامنا؟' : 'Ready to Experience Our Food?'}
          </h2>
          <p className="text-[19px] mb-10 text-[#ddd]">
            {isRTL ? 'احجز طاولتك الآن واستمتع بتجربة طعام لا تُنسى' : 'Book your table now and enjoy an unforgettable dining experience'}
          </p>
          <div className="flex gap-5 justify-center flex-wrap">
            <Link href="/collections">
              <button className="bg-white text-[#027380] border-none px-10 py-[18px] text-[18px] rounded-full cursor-pointer font-bold shadow-lg hover:translate-y-[-2px] hover:shadow-xl transition-all duration-300">
                {isRTL ? 'استعرض القائمة' : 'View Menu'}
              </button>
            </Link>
            <button className="bg-transparent text-white border-2 border-white px-10 py-[18px] text-[18px] rounded-full cursor-pointer font-bold hover:bg-white hover:text-[#027380] transition-all duration-300">
              {isRTL ? 'اتصل بنا' : 'Contact Us'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;