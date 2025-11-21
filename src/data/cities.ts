/**
 * City data for Cameroon
 * Add or modify cities here - no need to touch component code
 */

import { City } from '@/lib/types';

export const cities: City[] = [
  // Littoral Region
  {
    id: 'douala',
    name: 'Douala',
    region: 'Littoral',
  },
  {
    id: 'edea',
    name: 'Edéa',
    region: 'Littoral',
  },
  {
    id: 'nkongsamba',
    name: 'Nkongsamba',
    region: 'Littoral',
  },
  
  // Centre Region
  {
    id: 'yaounde',
    name: 'Yaoundé',
    region: 'Centre',
  },
  {
    id: 'mbalmayo',
    name: 'Mbalmayo',
    region: 'Centre',
  },
  {
    id: 'obala',
    name: 'Obala',
    region: 'Centre',
  },
  
  // West Region
  {
    id: 'bafoussam',
    name: 'Bafoussam',
    region: 'West',
  },
  {
    id: 'foumban',
    name: 'Foumban',
    region: 'West',
  },
  {
    id: 'dschang',
    name: 'Dschang',
    region: 'West',
  },
  
  // Northwest Region
  {
    id: 'bamenda',
    name: 'Bamenda',
    region: 'Northwest',
  },
  {
    id: 'kumbo',
    name: 'Kumbo',
    region: 'Northwest',
  },
  
  // Southwest Region
  {
    id: 'buea',
    name: 'Buea',
    region: 'Southwest',
  },
  {
    id: 'kumba',
    name: 'Kumba',
    region: 'Southwest',
  },
  {
    id: 'limbe',
    name: 'Limbé',
    region: 'Southwest',
  },
  
  // South Region
  {
    id: 'ebolowa',
    name: 'Ebolowa',
    region: 'South',
  },
  {
    id: 'kribi',
    name: 'Kribi',
    region: 'South',
  },
  {
    id: 'sangmelima',
    name: 'Sangmélima',
    region: 'South',
  },
  
  // East Region
  {
    id: 'bertoua',
    name: 'Bertoua',
    region: 'East',
  },
  {
    id: 'batouri',
    name: 'Batouri',
    region: 'East',
  },
  
  // Adamawa Region
  {
    id: 'ngaoundere',
    name: 'Ngaoundéré',
    region: 'Adamawa',
  },
  {
    id: 'meiganga',
    name: 'Meiganga',
    region: 'Adamawa',
  },
  
  // North Region
  {
    id: 'garoua',
    name: 'Garoua',
    region: 'North',
  },
  {
    id: 'guider',
    name: 'Guider',
    region: 'North',
  },
  
  // Far North Region
  {
    id: 'maroua',
    name: 'Maroua',
    region: 'Far North',
  },
  {
    id: 'kousseri',
    name: 'Kousséri',
    region: 'Far North',
  },
  {
    id: 'mokolo',
    name: 'Mokolo',
    region: 'Far North',
  },
];

// Helper function to get city by ID
export function getCityById(id: string): City | undefined {
  return cities.find(city => city.id === id);
}

// Helper function to get cities by region
export function getCitiesByRegion(region: string): City[] {
  return cities.filter(city => city.region === region);
}

// Get all unique regions
export function getRegions(): string[] {
  return Array.from(new Set(cities.map(city => city.region))).sort();
}