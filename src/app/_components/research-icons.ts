import { 
  BeakerIcon, ChartBarIcon, CubeTransparentIcon, ArrowsPointingOutIcon 
} from '@heroicons/react/24/outline';
import type { ForwardRefExoticComponent, SVGProps, RefAttributes } from 'react';

export type IconType = ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & { 
  title?: string; 
  titleId?: string; 
} & RefAttributes<SVGSVGElement>>;

export const icons: Record<string, IconType> = {
  "stochastic-control": BeakerIcon,
  "mean-field-games": ChartBarIcon,
  "market-microstructure": CubeTransparentIcon,
  "optimal-transport": ArrowsPointingOutIcon,
}; 