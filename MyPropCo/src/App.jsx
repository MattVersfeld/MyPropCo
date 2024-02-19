import NavbarTop from './components/NavbarTop'
import 'bootstrap/dist/css/bootstrap.css';
import Hero from './components/Hero'
import SearchForm from './components/SearchFrom'
import MainBodyText from './components/MainBodyText'
import FeaturedCarousel from './components/FeaturedCarousel'
import ContentAds from './components/ContentAds'
import FooterInfo from './components/FooterInfo'
import './App.css'

export default function App() {

  /**
   * Bonus question: feel free to add any amount in the console log below
   */
  function propData(num) {
    let list = []

    for (let i = 0; i <= num - 1; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        list.push('PropData')
      } else if (i % 3 === 0) {
        list.push('Prop')
      } else if (i % 5 === 0) {
        list.push('Data')
      } else {
        list.push(i.toString())
      }
    }
    return list
  }

  console.log(propData(50))

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
