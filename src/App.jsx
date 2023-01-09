// Components
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';
// SASS
import './styles/components/app.sass';

function App() {

  return (
    <div id="portfolio">
      <h1>Ramon Costa</h1>
      <SideBar />
      <MainContent />
    </div>
  )
}

export default App
