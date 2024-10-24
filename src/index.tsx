import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from '@mui/material';
import App from './Components/App/App';
import { theme } from './theme';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <ThemeProvider theme={theme()}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Router>
);
