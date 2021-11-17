import { BrowserRouter, Route } from 'react-router-dom';

import { FormStep } from './pages/FormStep';
import { Support } from './pages/Support';
import { List } from './pages/List';

export const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={FormStep} />
      <Route path="/support" component={Support} />
      <Route path="/list" component={List} />
    </BrowserRouter>
  );
}