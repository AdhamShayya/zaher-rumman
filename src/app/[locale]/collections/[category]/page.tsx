import React from 'react';
import CategoryProductsPage from '../../../../screens/CategoryProductsPage';
import { menuCategories } from '../../../../data/menuData';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    category: string;
    locale: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  
  // Find the category from menuCategories
  const categoryData = menuCategories.find(cat => cat.id === category);
  
  // If category not found, return 404
  if (!categoryData) {
    notFound();
  }
  
  return <CategoryProductsPage category={categoryData} />;
}

// Generate static params for all categories
export async function generateStaticParams() {
  return menuCategories.map(category => ({
    category: category.id,
  }));
}

// Add metadata for better SEO
export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = params;
  const categoryData = menuCategories.find(cat => cat.id === category);
  
  if (!categoryData) {
    return {
      title: 'Category Not Found',
    };
  }
  
  return {
    title: `${categoryData.nameEn} - ZAHR RUMMAN`,
    description: categoryData.descriptionEn,
  };
}
