import '../styles/index.css'

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import '../styles/custom.nprogress.css'; //styles of nprogress//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return ( 
      <div>
        
        <div style={{fontFamily: 'Rubik'}} className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-center text-white text-sm md:text-lg">
          <h1>This is a beta version of ScanTag not for public use (v.DEV.0.100). <a href="/beta" style={{textDecorationLine:'underline'}}>Learn More</a> </h1> 
        </div>

        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
