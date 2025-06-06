import * as React from "react";

export const Card = ({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`bg-white rounded-lg border border-gray-200 ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={className}>{children}</div>
);