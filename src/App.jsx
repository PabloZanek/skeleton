import React from 'react';
import Header from './components/app/Header';
import { QueryProvider } from './contexts/QueryProvider';
import './styles/base.css';

const App = () => {
  console.log('algo');
  return (
    <QueryProvider>
      <div className="h-screen w-screen overflow-hidden px-4">
        <Header />
      </div>
    </QueryProvider>
  );
};

export default App;
