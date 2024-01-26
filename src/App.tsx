import { Suspense, lazy, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LoadingIndicator from './components/LoadingIndicator';
import MainPage from './pages/MainPage';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import ProductDetailPage from './pages/ProductDetailPage';

// const MainPage = lazy(() => import('./pages/MainPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));

function ScrollToTop(): null {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 5분에 한번씩 상태를 업데이트 합니다.
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  const { pathname } = window.location;

  const isRootPath = pathname === '/';

  if (isRootPath) {
    window.location.href = '/0';
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="App h-screen">
        <Header />
        <main>
          <QueryParamProvider adapter={ReactRouter6Adapter}>
            <Suspense fallback={<LoadingIndicator />}>
              <ScrollToTop />
              <Routes>
                <Route path="/:category?" element={<MainPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/products/:productId" element={<ProductDetailPage />} />
              </Routes>
            </Suspense>
          </QueryParamProvider>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
