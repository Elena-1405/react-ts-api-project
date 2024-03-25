import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../src/components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import SignIn from './components/pages/signIn/signIn';
import Layout from './components/layout/layout';
import SignUp from './components/pages/signUp/signUp';
import NotFound from './components/pages/notFoundPage/notFound';

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Layout />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/sigup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
