import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../src/components/header/header';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { SignIn } from './components/pages/signIn/signIn';
import { Main } from './components/main/main';
import { SignUp } from './components/pages/signUp/signUp';
import { NotFound } from './components/pages/notFoundPage/notFound';
import { Search } from './components/search/search';
import { RoutePaths } from './shared/routePaths';

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path={RoutePaths.HOME} element={<Home />} />
        <Route path={RoutePaths.MAIN} element={<Main />} />
        <Route path={RoutePaths.SIGNIN} element={<SignIn />} />
        <Route path={RoutePaths.SIGNUP} element={<SignUp />} />
        <Route path={RoutePaths.SEARCH} element={<Search />} />
        <Route path={RoutePaths.NOTFOUND} element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
