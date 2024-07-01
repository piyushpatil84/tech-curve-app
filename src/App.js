import './App.css';
import ResponsiveAppBar from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <header>
        <ResponsiveAppBar />
      </header>
      <main>
        <Sidebar />
      </main>
    </div>
  );
}

export default App;