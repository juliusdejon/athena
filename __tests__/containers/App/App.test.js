import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import App from 'containers/App';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
