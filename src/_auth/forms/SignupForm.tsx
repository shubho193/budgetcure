import * as z from "zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import { useToast } from "@/components/ui/use-toast";

import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queriesAndMutations";
import { SignupValidation } from "@/lib/validation";
import { useUserContext } from "@/context/AuthContext";


const SignupForm = () => {
  const { toast } = useToast()
  const navigate = useNavigate();
  const { checkAuthUser } = useUserContext();
  
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      username: "",
      email: '',
      password: '',
    },
  })

  const { mutateAsync: createUserAccount, isPending: isCreatingAccount } = useCreateUserAccount();
  const { mutateAsync: signInAccount } = useSignInAccount();

  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    try {
      // Step 1: Create the account
      const newUser = await createUserAccount(values);

      if(!newUser) {
        return toast({
          variant: "destructive",
          title: "Account creation failed",
          description: "Unable to create your account. Please try again."
        });
      }

      toast({
        title: "Account created successfully",
        description: "Your account has been created. Signing you in..."
      });

      // Step 2: Sign in the user
      const session = await signInAccount({
        email: values.email,
        password: values.password,
      });

      if(!session) {
        return toast({
          variant: "destructive",
          title: "Sign in failed",
          description: "Account created but unable to sign in. Please try signing in manually."
        });
      }

      // Step 3: Verify authentication
      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        form.reset();
        toast({
          title: "Welcome!",
          description: "You have been successfully signed in."
        });
        
        // Add a small delay before navigation to ensure the toast is visible
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        return toast({
          variant: "destructive",
          title: "Authentication failed",
          description: "Unable to verify your session. Please try signing in manually."
        });
      }
    } catch (error: any) {
      console.error("Sign up error:", error);
      return toast({
        variant: "destructive",
        title: "Sign up failed",
        description: error?.message || "An unexpected error occurred. Please try again."
      });
    }
  }


  return (
    <Form {...form}>
      {/* <div className="relative right-1/4 h-5/6 bg-primary-500 w-[2px]"></div> */}

      <div className="flex-col w-[70%]">
        <img src="/assets/icons/bg-light.png" alt="logo" className='h-12 w-12'/>

        <h2 className="h1-bold pt-4">Create account</h2>
        <p className="text-black text-s pt-3 text-[14px]"> Make sure your password is 8 or more characters and has the following :</p>
        <ul className="text-black text-s pt-3 text-[14px] list-inside">
          <li className="list-disc">An uppercase letter</li>
          <li className="list-disc">A lowercase letter</li>
          <li className="list-disc">A number</li>
          <li className="list-disc">A symbol</li>

        </ul>


        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full mt-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter name" type="text" className="shad-input" {...field} />
                </FormControl>
                {form.formState.errors.name && (
                  <FormMessage className="text-red-500">{form.formState.errors.name.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username" type="text" className="shad-input" {...field} />
                </FormControl>
                {form.formState.errors.username && (
                  <FormMessage className="text-red-500">{form.formState.errors.username.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

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

          <div className="flex">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-1/2">
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

          <FormField
            control={form.control}
            name="confirm"
            render={({ field }) => (
              <FormItem className="w-1/2 ml-2">
                <FormLabel className="text-black">Confirm password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter password" type="password" className="shad-input" {...field} />
                </FormControl>
                {form.formState.errors.confirm && (
                  <FormMessage className="text-red-500">{form.formState.errors.confirm.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
          </div>


          <Button className="shad-button_primary mt-2" type="submit">
            {isCreatingAccount ? (
              <div className="flex-center gap-2">
                <Loader />Loading...
              </div>
            ) : "Sign up"}
          </Button>

          <p className="text-small-regular text-black text-center mt-1">
            Already have an account?
            <Link to = "/sign-in" className="text-primary-500 text-small-semibold ml-1">Log in</Link>
          </p>
        </form>
        <p className="text-black text-xs pt-4 flex justify-center space-x-1"> By continuing, you accept our <u className="inline-block mx-1">Terms of Service</u> and <u className="inline-block mx-1">Privacy Policy</u>.</p>
      </div>
    </Form>

  )
}

export default SignupForm