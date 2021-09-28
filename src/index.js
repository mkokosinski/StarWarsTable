import DataProvider from 'context/dataContext'
import UiContextProvider from 'context/uiContext'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './components/root/App'

import './styles/index.css'

ReactDOM.render(
  <StrictMode>
    <DataProvider>
      <UiContextProvider>
        <App />
      </UiContextProvider>
    </DataProvider>
  </StrictMode>,
  document.getElementById('root'),
)
