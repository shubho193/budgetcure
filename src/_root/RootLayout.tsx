import { Outlet, Navigate } from 'react-router-dom'
import { useUserContext } from "@/context/AuthContext"

const RootLayout = () => {
  const { isAuthenticated } = useUserContext();

  // If not authenticated, redirect to sign-in
  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
}

export default RootLayout