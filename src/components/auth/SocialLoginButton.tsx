import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';

interface SocialLoginButtonProps extends ButtonProps {
  providerName: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  providerName,
  icon,
  onClick,
  className,
  ...props
}) => {
  console.log("Rendering SocialLoginButton for provider:", providerName);

  return (
    <Button
      variant="outline"
      className={`w-full flex items-center justify-center gap-2 ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon}
      <span>Sign in with {providerName}</span>
    </Button>
  );
};

export default SocialLoginButton;