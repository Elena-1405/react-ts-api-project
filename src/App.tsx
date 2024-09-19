 import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Header } from '../src/components/header/header';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { SignIn } from './components/pages/signIn/signIn';
import { SignUp } from './components/pages/signUp/signUp';
import { NotFound } from './components/pages/notFoundPage/notFound';
import { Search } from './components/search/search';
import { RoutePaths } from './consts/consts';
import { ErrorFallback } from './components/pages/errorPage/errorFallback';
import { Loading } from './components/loading/loading';

const LazyFavoritesList = lazy(() => import('./components/favoritesList/favoritesList'));
const LazyMovieCard = lazy(() => import('./components/movieCard/movieCard'));
const LazyMain = lazy(() => import('./components/main/main'));

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
              <Suspense fallback={<Loading />}>
                <LazyMain />
              </Suspense>
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
          path={`${RoutePaths.MOVIECARD}/:id`}
          element={
            <ErrorBoundary fallback={<ErrorFallback />}>
              <Suspense fallback={<Loading />}>
                <LazyMovieCard />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path={RoutePaths.FAVORITES}
          element={
            <ErrorBoundary fallback={<ErrorFallback />}>
              <Suspense fallback={<Loading />}>
                <LazyFavoritesList />
              </Suspense>
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
