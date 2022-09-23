import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

import ThemeWrapper from './components/ThemeWrapper';
import ThemeProvider from './context/themeContext';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export function WrappedApp() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeWrapper>
    </ThemeProvider>
  );
}
