import { ParallaxProvider } from 'react-scroll-parallax'
import { NavLink, Route, Routes } from 'react-router'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import About from './components/about/about'
import Analysis from './components/analysis/analysis'
import Design from './components/design/design'
import Development from './components/development/development'
import Work from './components/work/work'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons/faBackward'

function App() {
  
  return (
    <>
      <ParallaxProvider>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/design" element={<Design />} />
          <Route path="/development" element={<Development />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<div className='p-20 flex flex-col items-center justify-center'>
              <p className='pb-12'>Page Not Found</p>
              <NavLink className="link-btn" to="/"><FontAwesomeIcon icon={faBackward} /> back</NavLink>
            </div>
          } />
        </Routes>
        <Footer />
      </ParallaxProvider>
    </>
  )
}

export default App
