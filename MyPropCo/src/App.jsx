import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchForm from './components/SearchFrom'
import MainBodyText from './components/MainBodyText'
import FeaturedCarousel from './components/FeaturedCarousel'
import ContentAds from './components/ContentAds'
import FooterInfo from './components/FooterInfo'
import { contentData } from './data/data'
import './App.css'

export default function App() {

  const contentCards = (props) => {
    return props.map(item => (
      <ContentAds
        key={item.id}
        image={item.image}
        title={item.title}
        text={item.text}
      />
    ))
  }

  const content = contentCards(contentData)

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
        <div className='content__wrapper'>
          {content}
        </div>

      </main>
      <footer>
        <FooterInfo></FooterInfo>
      </footer>
    </>
  )
}
