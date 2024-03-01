import './App.css';
import { One } from "./components/One";
import { Two } from "./components/Two";
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const metaTag = (name, content) => {
  if (content) return <meta property={name} content={content} />;
};

function App() {
  const metaTitle='Orchard';
  const metaKeywords='Orchard website';
  const ogType='website';
  const ogUrl='url';
  const ogImage='url';

  return (
    <>
      <header>
        <title>{metaTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={'Orchard'} />
        <meta name="description" content={'Orchard Desciption'} />
        <meta property="og:description" content={'Orchard Desciption'} />
        {metaTag('keywords', metaKeywords)}

        {/* OpenGraph tags for Facebook and LinkedIn */}
        {metaTag('og:type', ogType)}
        {metaTag('og:url', ogUrl)}
        {metaTag('og:image', ogImage)}

        {/* Twitter Card tags 
        Title: 70 chars
        Description: 200 chars
        Image: 280x150px, up to 1MB
        */}
        {metaTag('twitter:card', 'twitterCardType')}
        {metaTag('twitter:site', 'twitterSite')}
        {metaTag('twitter:creator', 'twitterCreator')}
        {metaTag('twitter:title', metaTitle)}
        {metaTag('twitter:description', 'twitterDescription')}
        {metaTag('twitter:image', 'twitterImage')}
        <Header/>
      </header>
      <main>
        <One/>
        <Two/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
