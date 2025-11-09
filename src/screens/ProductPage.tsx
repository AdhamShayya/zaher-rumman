// app/screens/ProductPage.tsx
'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { theme } from '../../shared';
import { useParams } from 'next/navigation';
import { getMenuItemById } from '../data/menuData';

function ProductPage() {
  const { t, i18n } = useTranslation('default');
  const isRTL = i18n.language === 'ar';
  const params = useParams();
  const productId = params?.productId ? parseInt(params.productId as string) : 1;
  const product = getMenuItemById(productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center p-8">
          <div className="text-8xl mb-6">😔</div>
          <h1 className="text-4xl font-bold text-[#027380] mb-4">
            {isRTL ? 'المنتج غير موجود' : 'Product Not Found'}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {isRTL ? 'عذراً، المنتج الذي تبحث عنه غير متوفر' : 'Sorry, the product you are looking for is not available'}
          </p>
          <Link href="/collections">
            <button className="bg-gradient-to-r from-[#027380] to-[#20A3A4] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              {isRTL ? 'العودة إلى القائمة' : 'Back to Menu'}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-page min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-5 pt-8 pb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#E31F55] transition-colors">
            {isRTL ? 'الرئيسية' : 'Home'}
          </Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-[#E31F55] transition-colors">
            {isRTL ? 'القائمة' : 'Menu'}
          </Link>
          <span>/</span>
          <span className="text-[#027380] font-semibold">
            {isRTL ? product.nameAr : product.nameEn}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-5 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Product Image Section */}
          <div className="space-y-6">
            <div className="relative rounded-[30px] overflow-hidden shadow-2xl group">
              <div className="aspect-square relative">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={isRTL ? product.nameAr : product.nameEn}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div 
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(135deg, #027380 0%, #20A3A4 100%)' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 flex items-center justify-center">
                      <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl text-center px-4">
                        {isRTL ? product.nameAr : product.nameEn}
                      </h2>
                    </div>
                  </>
                )}
                
                {/* Category Badge */}
                <div className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg z-10`}>
                  <span className="text-[#027380] font-bold text-sm">
                    {product.category}
                  </span>
                </div>

                {/* Price Badge */}
                <div className={`absolute bottom-6 ${isRTL ? 'right-6' : 'left-6'} bg-gradient-to-r from-[#E31F55] to-[#F56B8A] px-6 py-3 rounded-full shadow-xl z-10`}>
                  <span className="text-white font-bold text-2xl">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-2">🔥</div>
                <div className="text-sm text-gray-600 mb-1">{isRTL ? 'السعرات' : 'Calories'}</div>
                <div className="text-xl font-bold text-[#027380]">{product.calories}</div>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-2">📏</div>
                <div className="text-sm text-gray-600 mb-1">{isRTL ? 'الحجم' : 'Size'}</div>
                <div className="text-xl font-bold text-[#027380]">{product.size}</div>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-sm text-gray-600 mb-1">{isRTL ? 'التقييم' : 'Rating'}</div>
                <div className="text-xl font-bold text-[#027380]">4.8</div>
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            {/* Title & Description */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-[#027380] mb-4 leading-tight">
                {isRTL ? product.nameAr : product.nameEn}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500 text-2xl">⭐</span>
                  <span className="text-gray-600 font-semibold">4.8</span>
                  <span className="text-gray-400 text-sm">(120 {isRTL ? 'تقييم' : 'reviews'})</span>
                </div>
              </div>

              <div className="h-1 w-24 bg-gradient-to-r from-[#E31F55] to-[#F56B8A] rounded-full mb-6"></div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {isRTL ? product.descriptionAr : product.descriptionEn}
              </p>

              {/* Price Display */}
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl mb-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">{isRTL ? 'السعر' : 'Price'}</div>
                  <div className="text-4xl font-bold text-[#E31F55]">${product.price.toFixed(2)}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-1">{isRTL ? 'السعرات الحرارية' : 'Calories'}</div>
                  <div className="text-2xl font-bold text-[#027380]">{product.calories} {isRTL ? 'سعرة' : 'cal'}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
             
                 
                  <button className="flex bg-white border-2 border-[#027380] text-[#027380] py-4 rounded-2xl font-bold hover:bg-[#027380] hover:text-white transition-all duration-300 w-full items-center justify-center gap-2">
                    <span className="text-xl">📤</span>
                    <span>{isRTL ? 'مشاركة' : 'Share'}</span>
                  </button>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gradient-to-br from-[#027380] to-[#20A3A4] rounded-3xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">ℹ️</span>
                <span>{isRTL ? 'معلومات إضافية' : 'Additional Information'}</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <span className="font-semibold">{isRTL ? 'القسم:' : 'Category:'}</span>
                  <span className="text-white/90">{product.category}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <span className="font-semibold">{isRTL ? 'الحجم:' : 'Size:'}</span>
                  <span className="text-white/90">{product.size}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <span className="font-semibold">{isRTL ? 'متوفر:' : 'Available:'}</span>
                  <span className="text-green-300 font-bold">✓ {isRTL ? 'نعم' : 'Yes'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Menu CTA */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-50 py-16">
        <div className="max-w-[1400px] mx-auto px-5 text-center">
          <h3 className="text-3xl font-bold text-[#027380] mb-4">
            {isRTL ? 'استكشف المزيد من الأطباق' : 'Explore More Dishes'}
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            {isRTL ? 'اكتشف تشكيلتنا الواسعة من الأطباق الشهية' : 'Discover our wide selection of delicious dishes'}
          </p>
          <Link href="/collections">
            <button className="bg-gradient-to-r from-[#027380] to-[#20A3A4] text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              {isRTL ? 'عرض القائمة الكاملة' : 'View Full Menu'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;