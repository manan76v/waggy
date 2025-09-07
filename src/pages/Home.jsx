import React from 'react'
import HeroSection from '../components/HeroSection'
import CategoriesSection from '../components/CategoriesSection'
import ClothingSection from '../components/ClothingSection'
import FoodiesSection from '../components/FoodiesSection'
import TestimonialSection from '../components/TestimonialSection'
import RegisterSection from '../components/RegisterSection'
import BlogSection from '../components/BlogSection'
import ServicesSection from '../components/ServicesSection'
import InstagramSection from '../components/InstagramSection'

const Home = () => {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ClothingSection />
      <FoodiesSection />
      <TestimonialSection />
      <RegisterSection />
      <BlogSection />
      <ServicesSection />
      <InstagramSection />
    </main>
  )
}

export default Home