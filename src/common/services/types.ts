import { createContext } from "react";

export type Services = {};

export const ServicesContext = createContext<Services | undefined>(undefined);
