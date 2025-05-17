import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '@/context/AuthContext'
import { Button } from '@/components/ui/button'
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations'
import { useToast } from '@/components/ui/use-toast'

const Topbar = () => {
  const { user, isAuthenticated, setIsAuthenticated, setUser } = useUserContext();
  const { mutate: signOut } = useSignOutAccount();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsAuthenticated(false);
      setUser({
        id: "",
        name: "",
        username: "",
        email: "",
        imageUrl: "",
        bio: "",
      });
      navigate("/sign-in");
      toast({ title: "Signed out successfully" });
    } catch (error) {
      console.error(error);
      toast({ 
        variant: "destructive",
        title: "Failed to sign out. Please try again." 
      });
    }
  };

  return (
    <header className='w-full flex text-center justify-between' style = {{ marginTop:'1rem' }}>
        <div className="flex" style={{ listStyle: 'none' }}>
          <h2 className="flex items-center transform transition duration-200 hover:scale-110" style = {{ marginBottom:'5px' }}>
            <a href='/'>
            <img src='/assets/icons/bg-light.png' alt='logo' className='h-9 w-9 object-cover'/>
            </a>
            <Link to="/" className="text-black hover:text-primary-500 text-2xl" style={{ marginLeft: '1vw'}}><b>BudgetCure</b></Link>
          </h2>
          <h2 className="flex items-center">
            <Link to="/hospitals" className="text-black hover:text-primary-500 transform transition duration-200 hover:scale-110" style={{ marginLeft: '4vw'}}>Hospitals</Link>
            <Link to="/specialities" className="text-black hover:text-primary-500 transform transition duration-200 hover:scale-110" style={{ marginLeft: '3vw'}}>Specialities</Link>
          </h2>
        </div>
        <div className="flex items-center gap-4" style={{ listStyle: 'none' }}>
          {isAuthenticated ? (
            <>
              <span className="text-black font-medium">{user.name}</span>
              <Link to="/profile">
                <img 
                  src={user.imageUrl || '/assets/images/profile2.png'} 
                  alt='profile' 
                  className='h-8 w-8 object-cover rounded-full'
                />
              </Link>
              <Button 
                variant="ghost" 
                className="text-black hover:text-primary-500"
                onClick={handleSignOut}
              >
                Logout
              </Button>
            </>
          ) : (
            <Link to="/sign-in">
              <Button variant="ghost" className="text-black hover:text-primary-500">
                Login
              </Button>
            </Link>
          )}
        </div>
    </header>
  )
}

export default Topbar