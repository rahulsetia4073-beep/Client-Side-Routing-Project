
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy-loaded route components
const Home = lazy(() => import('./pages/Home'));
const Translator = lazy(() => import('./pages/Translator'));
const RandomContent = lazy(() => import('./pages/RandomContent'));
const ItemDetail = lazy(() => import('./pages/ItemDetail'));
const Profile = lazy(() => import('./pages/Profile'));
const ProfileDetails = lazy(() => import('./pages/ProfileDetails'));
const ProfileSettings = lazy(() => import('./pages/ProfileSettings'));
const NotFound = lazy(() => import('./pages/NotFound'));

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-wrapper">
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <div className="w-full">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/translator" element={<Translator />} />
              <Route path="/random" element={<RandomContent />} />
              <Route path="/item/:id" element={<ItemDetail />} />
              <Route path="/profile" element={<Profile />}>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
                <Route index element={<ProfileDetails />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 overflow-hidden">
          <AnimatedRoutes />
        </main>
        <footer className="bg-white border-t py-6 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Gemini Hub SPA. Enhanced Routing Demo.</p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
