import { ReactNode } from "react";

export interface NavLinkProps {
  children: string;
  route: string;
  onClick?: () => void;
}

export interface PublicLayoutProps {
  children: ReactNode;
}

export interface FetchProps<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}
