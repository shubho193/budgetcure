import * as z from "zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import { useToast } from "@/components/ui/use-toast";

import { useSignInAccount } from "@/lib/react-query/queriesAndMutations";
import { SigninValidation } from "@/lib/validation";
import { useUserContext } from "@/context/AuthContext";


const SigninForm = () => {
  const { toast } = useToast()
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserloading } = useUserContext();
  
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { mutateAsync : signInAccount} = useSignInAccount();

  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    try {
      const session = await signInAccount({
        email: values.email,
        password: values.password,
      });

      if (!session) {
        return toast({
          variant: "destructive",
          title: "Sign in failed",
          description: "Please check your credentials and try again."
        });
      }

      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        form.reset();
        navigate('/');
      } else {
        return toast({
          variant: "destructive",
          title: "Authentication failed",
          description: "Unable to verify your session. Please try again."
        });
      }
    } catch (error: any) {
      console.error("Sign in error:", error);
      return toast({
        variant: "destructive",
        title: "Sign in failed",
        description: error?.message || "Please check your credentials and try again."
      });
    }
  }


  return (
    <Form {...form}>
      {/* <div className="relative right-1/4 h-5/6 bg-primary-500 w-[2px]"></div> */}

      <div className="flex-col w-[70%]">
        <img src="/assets/icons/bg-light.png" alt="logo"  className='h-12 w-12'/>

        <h2 className="h1-bold pt-4">Log in to your account</h2>
        <p className="text-black text-s pt-3 text-[14px]"> Welcome back! Please enter your details.</p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full mt-5">

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email address" type="email" className="shad-input" {...field} />
                </FormControl>
                {form.formState.errors.email && (
                  <FormMessage className="text-red-500">{form.formState.errors.email.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter password" type="password" className="shad-input" {...field} />
                </FormControl>
                {form.formState.errors.password && (
                  <FormMessage className="text-red-500">{form.formState.errors.password.message}</FormMessage>
                )}
              </FormItem>
            )}
          />


          <Button className="shad-button_primary mt-2" type="submit">
            {isUserloading ? (
              <div className="flex-center gap-2">
                <Loader />Loading...
              </div>
            ) : "Log in"}
          </Button>

          <p className="text-small-regular text-black text-center mt-1">
            Don't have an account?
            <Link to = "/sign-up" className="text-primary-500 text-small-semibold ml-1">Sign up</Link>
          </p>

        </form>
        <p className="text-black text-xs pt-4 flex justify-center space-x-1"> By continuing, you accept our <u className="inline-block mx-1">Terms of Service</u> and <u className="inline-block mx-1">Privacy Policy</u>.</p>
      </div>
    </Form>

  )
}

export default SigninForm