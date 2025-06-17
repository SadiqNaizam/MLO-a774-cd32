import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Mail, Lock, Eye, EyeOff, Github, Chrome } from 'lucide-react';

import AuthFormContainer from '@/components/auth/AuthFormContainer';
import SocialLoginButton from '@/components/auth/SocialLoginButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }).default("user@example.com"),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }).default("password123"),
  rememberMe: z.boolean().optional().default(false),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'user@example.com', // Default for easier testing
      password: 'password123',    // Default for easier testing
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log('Login form submitted:', data);
    setLoginError(null);
    // Simulate API call
    if (data.email === 'user@example.com' && data.password === 'password123') {
      toast.success('Login successful! Redirecting...');
      setTimeout(() => navigate('/app-home'), 1000);
    } else {
      setLoginError('Invalid email or password. Please try again.');
      toast.error('Invalid email or password.');
    }
  };

  console.log('LoginPage loaded');

  return (
    <AuthFormContainer title="Sign In to Your Account" description="Welcome back! Please enter your details.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {loginError && (
            <Alert variant="destructive">
              <AlertTitle>Login Failed</AlertTitle>
              <AlertDescription>{loginError}</AlertDescription>
            </Alert>
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <FormControl>
                    <Input id="email" type="email" placeholder="you@example.com" {...field} className="pl-10" />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password">Password</FormLabel>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <FormControl>
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      {...field}
                      className="pl-10 pr-10"
                    />
                  </FormControl>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox id="rememberMe" checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <Label htmlFor="rememberMe" className="font-normal">Remember me</Label>
                  </div>
                </FormItem>
              )}
            />
            <Button variant="link" asChild className="p-0 h-auto text-sm">
              <Link to="/forgot-password">Forgot password?</Link>
            </Button>
          </div>
          <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>
      </Form>
      <Separator className="my-6" />
      <div className="space-y-4">
        <SocialLoginButton
          providerName="Google"
          icon={<Chrome className="h-5 w-5" />}
          onClick={() => { console.log('Login with Google'); toast.info('Google login not implemented.'); }}
        />
        <SocialLoginButton
          providerName="GitHub"
          icon={<Github className="h-5 w-5" />}
          onClick={() => { console.log('Login with GitHub'); toast.info('GitHub login not implemented.'); }}
        />
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don't have an account?{' '}
        <Button variant="link" asChild className="p-0 h-auto">
          <Link to="/register">Sign up</Link>
        </Button>
      </p>
    </AuthFormContainer>
  );
};

export default LoginPage;