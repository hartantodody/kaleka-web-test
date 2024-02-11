import { ReactNode } from "react";

export interface NavLinkProps {
  children: string;
  route: string;
  onClick?: () => void;
}

export interface PublicLayoutProps {
  children: ReactNode;
  headerText?: string;
}

export interface FetchProps<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export interface GeoMapProps {
  marker: ReactNode;
  loading: boolean;
  error: Error | null;
}

export interface DetailComponentProps {
  coordinates: string;
}

export interface DataProviderProps {
  children: ReactNode;
}

export interface CircleOptionsProps {
  color?: string;
  fillColor?: string;
  weight?: number;
}

export interface CircleMarkerProps {
  coordinates: number[];
  circleOptions?: CircleOptionsProps;
  handleDetailClick?: (coordinates: number[]) => void;
}
