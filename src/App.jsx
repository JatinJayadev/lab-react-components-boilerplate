import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import Header from './components/Header';
import Body from './components/Body';
import { imageData } from './components/imageData';

function App() {
  return (
    <div>

      <Header />
      <Body data={imageData} />

      {/* adding footer component */}
      <GallaryFooter />
    </div>
  )
}

export default App;
