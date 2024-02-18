import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchForm from './components/SearchFrom'
import MainBodyText from './components/MainBodyText'
import FeaturedProp from './components/FeaturedProp'
import ContentAds from './components/ContentAds'
import FooterInfo from './components/FooterInfo'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
        <SearchForm></SearchForm>
      </header>
      <main>
        <MainBodyText></MainBodyText>
        <FeaturedProp></FeaturedProp>
        <ContentAds></ContentAds>
      </main>
      <footer>
        <FooterInfo></FooterInfo>
      </footer>
    </>
  )
}
