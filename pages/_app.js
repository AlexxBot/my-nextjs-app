import { wrapper } from '../store';
//import '../styles/globals.css'

//import "../styles/main.scss";
import "../styles/main.scss"

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);
