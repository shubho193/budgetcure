import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './globals.css';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from "@/components/ui/toaster";
import { ErrorBoundary } from 'react-error-boundary';
import { Loader2 } from 'lucide-react';

// Lazy load components for better performance
const SigninForm = lazy(() => import('./_auth/forms/SigninForm'));
const SignupForm = lazy(() => import('./_auth/forms/SignupForm'));
const Home = lazy(() => import('./_root/pages').then(module => ({ default: module.Home })));
const Search = lazy(() => import('./_root/pages/Search'));
const Profile = lazy(() => import('./_root/pages/Profile'));
const AIIMS = lazy(() => import('./_root/pages/hospitals/AIIMS'));
const HospitalUploader = lazy(() => import('./_root/pages/HospitalDB'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
  </div>
);

// Error fallback component
const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
    <h2 className="text-2xl font-bold text-red-500">Something went wrong:</h2>
    <pre className="text-sm text-gray-500">{error.message}</pre>
    <button
      onClick={() => window.location.reload()}
      className="rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-600"
    >
      Try again
    </button>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingSpinner />}>
        <main className="flex h-screen">
          <Routes>
            {/* public routes */}
            <Route element={<AuthLayout />}>
              <Route path="/sign-in" element={<SigninForm />} />
              <Route path="/sign-up" element={<SignupForm />} />
            </Route>

            {/* private routes */}
            <Route element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/aiims" element={<AIIMS />} />
              <Route path="/hsupload" element={<HospitalUploader />} />
            </Route>

            {/* catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toaster />
        </main>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;