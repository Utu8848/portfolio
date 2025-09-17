import React from 'react';
import Header from './components/Header';
import MyRoutes from './MyRoutes';
import Footer from './components/Footer';
import './global.css';

function App() {
  return (
      <div className="App">
        <Header />
        <main>
          <MyRoutes />
        </main>
        <Footer />
      </div>
  );
}

export default App;