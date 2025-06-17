import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface AuthFormContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  title,
  description,
  children,
  className,
}) => {
  console.log("Rendering AuthFormContainer with title:", title);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 ${className}`}>
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
          {description && (
            <CardDescription className="mt-2">{description}</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthFormContainer;