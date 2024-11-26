import React from "react";
import { Provider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles";
import store from "./redux/store";
import Header from "./components/Header/Header";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import ChartsSection from "./components/ChartsSection/ChartsSection";
import DiagramsSection from "./components/DiagramsSection/DiagramsSection";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <CompanyInfo />
      <ChartsSection />
      <DiagramsSection />
      <Footer />
    </Provider>
  );
};

export default App;
