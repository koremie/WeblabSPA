import './App.css';
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainWrapper } from './App.styled';
import "antd/dist/antd.css";
import { Provider } from 'react-redux';
import store from '../Redux/Store';

function App() {
  return (
  <Provider store={store}>
    <MainWrapper>
      <Navigation />
      <Footer />
    </MainWrapper>
  </Provider>
)}

export default App;