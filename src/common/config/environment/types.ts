import { createContext } from "react";

// Only expose non-sensitive environment variables here
export type Environment = {
  baseApiUrl: string;
};

export const EnvironmentContext = createContext<Environment | undefined>(undefined);
