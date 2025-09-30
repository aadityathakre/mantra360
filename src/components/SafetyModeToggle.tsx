import React, { useState } from 'react';
import { Shield, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SafetyModeToggle = () => {
  const [safetyMode, setSafetyMode] = useState(true);

  const toggleSafetyMode = () => {
    setSafetyMode(!safetyMode);
  };

  return (
    <Button
      variant="sacred"
      onClick={toggleSafetyMode}
      className="gap-2 h-9 px-3"
    >
      {safetyMode ? (
        <>
          <ShieldCheck className="h-4 w-4" />
          <span className="hidden sm:inline">Safety Mode</span>
        </>
      ) : (
        <>
          <Shield className="h-4 w-4" />
          <span className="hidden sm:inline">Safety Off</span>
        </>
      )}
    </Button>
  );
};