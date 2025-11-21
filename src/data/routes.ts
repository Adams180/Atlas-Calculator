/**
 * Route definitions for Cameroon
 * This is extensive - add routes as you collect data
 * 
 * IMPORTANT DATA COLLECTION NOTES:
 * - Get distance from Google Maps or actual transport companies
 * - Time estimates should come from real driver experience
 * - Security levels based on current situation reports
 * - Checkpoint numbers from driver interviews
 */

import { Route } from '@/lib/types';

export const routes: Route[] = [
  // ============================================
  // DOUALA ROUTES (Major port city)
  // ============================================
  {
    id: 'douala-yaounde',
    origin: 'douala',
    destination: 'yaounde',
    distance: 250,
    roadCondition: 'paved',
    drySeasonTime: 4,
    rainySeasonTime: 5,
    securityLevel: 'low',
    checkpoints: 2,
    notes: 'Main highway, well-maintained, heavy traffic near cities',
  },
  {
    id: 'douala-buea',
    origin: 'douala',
    destination: 'buea',
    distance: 70,
    roadCondition: 'paved',
    drySeasonTime: 1.5,
    rainySeasonTime: 2,
    securityLevel: 'low',
    checkpoints: 1,
  },
  {
    id: 'douala-limbe',
    origin: 'douala',
    destination: 'limbe',
    distance: 75,
    roadCondition: 'paved',
    drySeasonTime: 1.5,
    rainySeasonTime: 2,
    securityLevel: 'low',
    checkpoints: 1,
  },
  {
    id: 'douala-kribi',
    origin: 'douala',
    destination: 'kribi',
    distance: 160,
    roadCondition: 'paved',
    drySeasonTime: 3,
    rainySeasonTime: 4,
    securityLevel: 'low',
    checkpoints: 2,
  },
  {
    id: 'douala-kumba',
    origin: 'douala',
    destination: 'kumba',
    distance: 130,
    roadCondition: 'mixed',
    drySeasonTime: 3,
    rainySeasonTime: 4.5,
    securityLevel: 'medium',
    checkpoints: 3,
    notes: 'Some sections affected by security situation',
  },
  
  // ============================================
  // YAOUNDÉ ROUTES (Capital city)
  // ============================================
  {
    id: 'yaounde-bafoussam',
    origin: 'yaounde',
    destination: 'bafoussam',
    distance: 280,
    roadCondition: 'paved',
    drySeasonTime: 5,
    rainySeasonTime: 7,
    securityLevel: 'low',
    checkpoints: 3,
  },
  {
    id: 'yaounde-bertoua',
    origin: 'yaounde',
    destination: 'bertoua',
    distance: 350,
    roadCondition: 'mixed',
    drySeasonTime: 7,
    rainySeasonTime: 10,
    securityLevel: 'medium',
    checkpoints: 4,
    notes: 'Some unpaved sections, delays possible in rainy season',
  },
  {
    id: 'yaounde-ebolowa',
    origin: 'yaounde',
    destination: 'ebolowa',
    distance: 170,
    roadCondition: 'paved',
    drySeasonTime: 3,
    rainySeasonTime: 4,
    securityLevel: 'low',
    checkpoints: 2,
  },
  {
    id: 'yaounde-mbalmayo',
    origin: 'yaounde',
    destination: 'mbalmayo',
    distance: 50,
    roadCondition: 'paved',
    drySeasonTime: 1,
    rainySeasonTime: 1.5,
    securityLevel: 'low',
    checkpoints: 1,
  },
  
  // ============================================
  // NGAOUNDÉRÉ - NORTH CORRIDOR
  // ============================================
  {
    id: 'ngaoundere-garoua',
    origin: 'ngaoundere',
    destination: 'garoua',
    distance: 280,
    roadCondition: 'paved',
    drySeasonTime: 5,
    rainySeasonTime: 6,
    securityLevel: 'medium',
    checkpoints: 3,
  },
  {
    id: 'garoua-maroua',
    origin: 'garoua',
    destination: 'maroua',
    distance: 220,
    roadCondition: 'paved',
    drySeasonTime: 4,
    rainySeasonTime: 5,
    securityLevel: 'high',
    checkpoints: 5,
    notes: 'Security concerns in Far North region',
  },
  {
    id: 'maroua-kousseri',
    origin: 'maroua',
    destination: 'kousseri',
    distance: 130,
    roadCondition: 'paved',
    drySeasonTime: 2.5,
    rainySeasonTime: 3,
    securityLevel: 'high',
    checkpoints: 4,
    notes: 'Border area, additional security considerations',
  },
  
  // ============================================
  // WEST REGION ROUTES
  // ============================================
  {
    id: 'bafoussam-bamenda',
    origin: 'bafoussam',
    destination: 'bamenda',
    distance: 75,
    roadCondition: 'paved',
    drySeasonTime: 2,
    rainySeasonTime: 3,
    securityLevel: 'high',
    checkpoints: 4,
    notes: 'Security situation variable',
  },
  {
    id: 'bafoussam-foumban',
    origin: 'bafoussam',
    destination: 'foumban',
    distance: 70,
    roadCondition: 'paved',
    drySeasonTime: 1.5,
    rainySeasonTime: 2,
    securityLevel: 'low',
    checkpoints: 1,
  },
  
  // ADD MORE ROUTES AS YOU COLLECT DATA
  // Use this template for new routes:
  /*
  {
    id: 'origin-destination',
    origin: 'city_id',
    destination: 'city_id',
    distance: 0,  // km
    roadCondition: 'paved' | 'unpaved' | 'mixed',
    drySeasonTime: 0,  // hours
    rainySeasonTime: 0,  // hours
    securityLevel: 'low' | 'medium' | 'high',
    checkpoints: 0,
    notes: 'Any special considerations',
  },
  */
];

// Helper functions
export function findRoute(origin: string, destination: string): Route | null {
  // Try direct route
  let route = routes.find(
    r => r.origin === origin && r.destination === destination
  );
  
  // Try reverse route
  if (!route) {
    route = routes.find(
      r => r.origin === destination && r.destination === origin
    );
  }
  
  return route || null;
}

export function getRouteById(id: string): Route | undefined {
  return routes.find(r => r.id === id);
}

export function getRoutesFromCity(cityId: string): Route[] {
  return routes.filter(r => r.origin === cityId || r.destination === cityId);
}

export function getAllOrigins(): string[] {
  return Array.from(new Set(routes.map(r => r.origin)));
}

export function getAllDestinations(): string[] {
  return Array.from(new Set(routes.map(r => r.destination)));
}