import { Routes, Route } from 'react-router-dom';

import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from "@/components/ui/toaster";
import Search from './_root/pages/Search';
import Profile from './_root/pages/Profile';
import AIIMS from './_root/pages/hospitals/AIIMS';
import HospitalUploader from './_root/pages/HospitalDB';

const App = () => {
  return (
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
        </Route>
        <Route element={<Search />}>
          <Route path="/search" element={<Search />} />
        </Route>
        <Route element={<Profile />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<AIIMS />}>
          <Route path="/aiims" element={<AIIMS />} />
        </Route>
        <Route element={<HospitalUploader />}>
          <Route path="/hsupload" element={<HospitalUploader />} />
        </Route>

      </Routes>
      <Toaster />
    </main>
  )
}

export default App