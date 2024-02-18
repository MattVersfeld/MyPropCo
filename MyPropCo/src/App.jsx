import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchForm from './components/SearchFrom'
import MainBodyText from './components/MainBodyText'
import FeaturedProp from './components/FeaturedProp'
import FeaturedCarousel from './components/FeaturedCarousel'
import ContentAds from './components/ContentAds'
import FooterInfo from './components/FooterInfo'
import { featuredPropData } from './data/data'
import './App.css'

export default function App() {


  console.log(featuredPropData)



  return (
    <>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
        <SearchForm></SearchForm>
      </header>
      <main>
        <MainBodyText></MainBodyText>
        <FeaturedCarousel></FeaturedCarousel>
        <ContentAds></ContentAds>
      </main>
      <footer>
        <FooterInfo></FooterInfo>
      </footer>
    </>
  )
}
