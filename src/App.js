import React, { useEffect } from 'react';
import FormComponent from './Components/FormComponent';
import GlobalStyle from './globalStyles';
import ChartComponent from './Components/ChartComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import InputComponent from './Components/InputComponent';

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <Router>
      <GlobalStyle />
      {/* For redirection */}
      <Switch>
        <Route path='/input'>
          <InputComponent />
        </Route>
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
