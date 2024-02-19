import NavbarTop from './components/NavbarTop'
import 'bootstrap/dist/css/bootstrap.css';
import Hero from './components/Hero'
import SearchForm from './components/SearchFrom'
import MainBodyText from './components/MainBodyText'
import FeaturedCarousel from './components/FeaturedCarousel'
import ContentAds from './components/ContentAds'
import FooterInfo from './components/FooterInfo'
import FeaturedProp from './components/FeaturedProp';
import './App.css'

export default function App() {


  return (
    <>
      <header>
        <NavbarTop />
        <Hero></Hero>
        <SearchForm></SearchForm>
      </header>
      <main>
        <MainBodyText></MainBodyText>
        <FeaturedCarousel></FeaturedCarousel>
        <ContentAds />
      </main>
      <footer>
        <FooterInfo></FooterInfo>
      </footer>
    </>
  )
}
