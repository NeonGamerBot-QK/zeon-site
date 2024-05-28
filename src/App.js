import logo from './logo.png'
import './App.css'
import Footer from './Footer.js'
import './avataranimation.css'
import { useEffect, useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Tilt from 'react-parallax-tilt'
function CommingSoonPage () {
  // leave it here  for incase
  return <div className='ctp-latte App-header max-w-lg mx-auto transition-colors space-y-2 min-h-screen hero bg-opacity-40'>
    <header className='  container text-center pt-8 z-50 test-box bg-ctp-mauve rounded-lg '>
      <Tilt>
        <img src={logo} className='mx-auto' alt='logo' />
      </Tilt>
      <ScrollAnimation animateIn='fadeIn'>
        <b>Comming soon... (under theme rework)</b>
      </ScrollAnimation>
    </header>
  </div>
}
function App () {
  // let isZeonDetected = false;
  const [isZeonDetected, zeonDetected] = useState(false)
  useEffect(() => {
    const inter = setInterval(() => {
      const popoutEl = document.getElementById('zeon-popout')
      if (popoutEl && !isZeonDetected) {
        zeonDetected(true)
        // alert('i found zeon')
      }
    }, 50)

    return () => clearInterval(inter)
  }, [isZeonDetected])
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])
  return (
    // {/* <CommingSoonPage /> */ }
    <MainLayout />
  )
}
function MainLayout () {
  return (
    <div className={'ctp-mocha'}>
       <TopHero />
      <AboutZeon />
      <TheZeonsSpin />
      {/* <CommingSoonPage /> */}
    </div>
  )
}
function TopHero () {
  return (<div className='hero min-h-screen bg-base-300'>
    <ScrollAnimation animateIn='fadeIn'>
      <div className='hero-content flex-col lg:flex-row max-w-xl'>
        <div className='avatar'>
          <Tilt glareEnable={true} glareColor={"#f9e2af"}>
            <img src={logo} />
          </Tilt>
        </div>

        <div>
          {/* <ScrollAnimation animateIn="fadeIn"> */}

          <h1 className='text-5xl font-bold zeon-word' >Zeon</h1>
          {/* </ScrollAnimation> */}
          {/* <ScrollAnimation delay={4000} */}
          {/* animateIn='tada' initiallyVisible={true}> */}
          <p>Zeons an amazing guy</p>
          {/* </ScrollAnimation> */}
        </div>
      </div>
    </ScrollAnimation>
  </div>)
}
function AboutZeon () {
  return (<div className='min-h-screen bg-base-300'>
    <div className='md:pt-20 pt-10 md:pl-20 pl-5 text-left'>
      <ScrollAnimation animateIn='fadeIn'>
        <div >
          <h1 className='text-5xl font-bold'>Who is <span className='zeon-word'>Zeon</span>?</h1>
          <p className='py-6 flex-wrap text-wrap max-w-md' style={{ color: "#bac2de" }}>Zeon orignally  started out as a discord bot then continued to develop and got expanded to github to work on my repos as an app. </p>

          {/* <button className="btn btn-primary">Learn about him</button> */}
        </div>
      </ScrollAnimation>
    </div>
    <br />
    <br />
    <div className='md:pb-20 pb-10 md:pr-20  pr-5 text-right float-right'>
      <ScrollAnimation animateIn='fadeIn'>
        <div className='text-right place-items-end'>
          <h1 className='text-5xl font-bold'><span className='zeon-word'>Zeons</span> mangment.</h1>
          <p className='py-6 text-right text-wrap max-w-md' style={{ color: "#bac2de" }} >Zeon runs his mangment through github linting, and organizing my code on my repositorys to make sure there good. Zeon also currently runs my depoloyments running them through either the application or gh workflows under his token.</p>
          {     /* <button className="btn btn-primary">Button 2</button> */}
        </div>
        <br />
        <br />
      </ScrollAnimation>
    </div>
  </div>)
}
function TheZeonsSpin () {
  // ok i need to summon something that like spins the zeons or a grid with all the zeon sections
  // guess which one its gonna be ;-;
  return (
    <div className='pt-10 min-h-screen bg-base-300'>
      <div className='place-items-center md:grid gap-4 grid-cols-3'>
        <CardDisplay title={'Commissions'} description={<p>Zeon handles commissions in my discord by running a ticket system and managing my payments you can see the site <a href='https://saahild.com/commissions'>here</a></p>} />
        <div />
        <CardDisplay title={'Github'} description={<p>Zeon runs through a github app and sometimes a github action. Zeon lints my code and organizes and utilizes my functions within github. Zeon is not public and is a private application. </p>} />
        <div />
        <h1 className='md:text-center duration-1000 font-bold md:text-5xl text-2xl text-spin ' style={{ color: "#b4befe" }}>Zeons Features-></h1>
        <div />
        <CardDisplay title={'Chrome ext'} description={<p>Zeon is currently having a chrome extensoion made which will be private for me. Zeon will help me debugging and with my sites utilizing him with plugins and AI.</p>} />
        <div />
        <CardDisplay title={'Discord'} description={<p>Zeon helps me through a discord bot and runs automation. Zeon orignally started through this discord bot and then later the  other applications were made.Zeon is also a private bot on discord and is currently not open source.</p>} />
      </div>
    </div>
  )
}
function CardDisplay ({ title, description, buttons }) {
  return (
    <ScrollAnimation animateIn='fadeIn'>
      <div style={{ background: "#1e1e2e" }} className='card md:w-96 w-60 hover:bg-base-50 text-primary-content duration-700 transform md:hover:scale-125 md:m-5 md:float-none float-end mb-10 mr-20'>

        <div className='card-body text-white caret-emerald-900'>
          <h2 className='card-title text-white'>{ title}</h2>
          <p style={{ color: "#bac2de" }}>{description}</p>
          <div className='card-actions justify-end'>
            {buttons}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default App
