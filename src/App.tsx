import { LanguageProvider } from './context/LanguageProvider';
import Home from './pages/Home';

function App() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}

export default App;
