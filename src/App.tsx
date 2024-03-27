import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../src/components/header/header';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { SignIn } from './components/pages/signIn/signIn';
import { Main } from './components/main/main';
import { SignUp } from './components/pages/signUp/signUp';
import { NotFound } from './components/pages/notFoundPage/notFound';

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
