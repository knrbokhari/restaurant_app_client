import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// scroll bar
import 'simplebar/src/simplebar.css';

// third-party
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

// apex-chart
import 'assets/third-party/apex-chart.css';

// project import
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from 'app/store';

// store to persit
const persistedStore = persistStore(store);

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistedStore}>
                <BrowserRouter basename="/">
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
