import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
