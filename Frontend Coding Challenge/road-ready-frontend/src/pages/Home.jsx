import React from 'react'
import heroBg from '../assets/hero-bg.jpg';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HomeReview from '../components/HomeReview';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <Services />
      <HomeReview />
    </>
  )
}

export default Home