import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Header } from '../src/components/header/header';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { SignIn } from './components/pages/signIn/signIn';
import { Main } from './components/main/main';
import { SignUp } from './components/pages/signUp/signUp';
import { NotFound } from './components/pages/notFoundPage/notFound';
import { Search } from './components/search/search';
import { MovieCard } from './components/movieCard/movieCard';
import { FavoritesList } from './components/favoritesList/favoritesList';
import { RoutePaths } from './consts/consts';
import { ErrorFallback } from './components/pages/errorPage/errorFallback';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path={RoutePaths.HOME} element={<Home />} />
        <Route path={RoutePaths.SIGNIN} element={<SignIn />} />
        <Route path={RoutePaths.SIGNUP} element={<SignUp />} />

        <Route
          path={RoutePaths.MAIN}
          element={
            <ErrorBoundary fallback={<ErrorFallback />}>
              <Main />
            </ErrorBoundary>
          }
        />

        <Route
          path={RoutePaths.SEARCH}
          element={
            <ErrorBoundary fallback={<ErrorFallback />}>
              <Search />
            </ErrorBoundary>
          }
        />
        <Route
          path={RoutePaths.MOVIECARD}
          element={
            <ErrorBoundary fallback={<ErrorFallback />}>
              <MovieCard />
            </ErrorBoundary>
          }
        />
        <Route
          path={RoutePaths.FAVORITES}
          element={
            <ErrorBoundary fallback={<ErrorFallback />}>
              <FavoritesList />
            </ErrorBoundary>
          }
        />
        <Route path={RoutePaths.NOTFOUND} element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
