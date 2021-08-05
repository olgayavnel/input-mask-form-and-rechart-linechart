import React, { useEffect } from 'react';
import FormComponent from './Pages/FormComponent/FormComponent';
import GlobalStyle from './styles/globalStyles';
import ChartComponent from './Pages/ChartComponent/ChartComponent.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <Router>
      <GlobalStyle />
      {/* For redirection */}
      <Switch>
        <Route path='/chart1'>
          <ChartComponent />
        </Route>
        <Route path='/form'>
          <FormComponent />
        </Route>
        <Route path='/'>
          <FormComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
