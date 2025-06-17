import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Mail } from 'lucide-react';

import AuthFormContainer from '@/components/auth/AuthFormContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordPage: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    console.log('Forgot password form submitted:', data);
    // Simulate API call
    setMessage(`If an account with email ${data.email} exists, a password reset link has been sent.`);
    toast.info(`Password reset instructions sent to ${data.email} (if account exists).`);
    form.reset(); 
  };
  
  console.log('ForgotPasswordPage loaded');

  return (
    <AuthFormContainer title="Forgot Your Password?" description="Enter your email address and we'll send you a link to reset your password.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {message && (
            <Alert variant={message.startsWith("If an account") ? "default" : "destructive"}>
              <AlertTitle>{message.startsWith("If an account") ? "Check Your Email" : "Error"}</AlertTitle>
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email-forgot">Email Address</FormLabel>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <FormControl>
                    <Input id="email-forgot" type="email" placeholder="you@example.com" {...field} className="pl-10" />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Sending...' : 'Send Reset Link'}
          </Button>
        </form>
      </Form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Remember your password?{' '}
        <Button variant="link" asChild className="p-0 h-auto">
          <Link to="/login">Sign In</Link>
        </Button>
      </p>
    </AuthFormContainer>
  );
};

export default ForgotPasswordPage;