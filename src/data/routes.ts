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

// src/data/routes.ts

import { Route, SecurityLevel, RoadCondition } from '@/lib/types';
// ... existing imports and route array ...

/**
 * Helper to determine the worst security level between two legs
 */
function getWorstSecurity(l1: SecurityLevel, l2: SecurityLevel): SecurityLevel {
  const levels = ['low', 'medium', 'high'];
  const i1 = levels.indexOf(l1);
  const i2 = levels.indexOf(l2);
  return levels[Math.max(i1, i2)] as SecurityLevel;
}

/**
 * Helper to determine combined road condition
 */
function getCombinedRoadCondition(c1: RoadCondition, c2: RoadCondition): RoadCondition {
  if (c1 === 'unpaved' || c2 === 'unpaved') return 'unpaved';
  if (c1 === 'mixed' || c2 === 'mixed') return 'mixed';
  return 'paved';
}

export function findRoute(origin: string, destination: string): Route | null {
  // 1. Try to find a DIRECT route first (Preferred)
  let directRoute = routes.find(
    r => (r.origin === origin && r.destination === destination) ||
         (r.origin === destination && r.destination === origin)
  );

  if (directRoute) return directRoute;

  // 2. If no direct route, look for a 2-LEG route via a HUB
  // We look for a city 'X' where Origin->X AND X->Destination exist
  
  // Get all routes connected to origin
  const originRoutes = routes.filter(r => r.origin === origin || r.destination === origin);
  
  for (const leg1 of originRoutes) {
    // Determine the hub city (the end of leg 1)
    const hub = leg1.origin === origin ? leg1.destination : leg1.origin;
    
    // Find a route from Hub -> Destination
    const leg2 = routes.find(
      r => (r.origin === hub && r.destination === destination) ||
           (r.origin === destination && r.destination === hub)
    );

    if (leg2) {
      // FOUND A CONNECTING ROUTE! 
      // Now we synthesize a new "Route" object combining the data
      
      // Transfer Penalty: Add 4 hours for transloading/resting at the hub
      const TRANSFER_TIME_PENALTY = 4; 

      return {
        id: `${origin}-${hub}-${destination}`,
        origin: origin,
        destination: destination,
        distance: leg1.distance + leg2.distance,
        
        // Combine road conditions (if any part is bad, the route is "mixed")
        roadCondition: getCombinedRoadCondition(leg1.roadCondition, leg2.roadCondition),
        
        // Sum times + penalty
        drySeasonTime: leg1.drySeasonTime + leg2.drySeasonTime + TRANSFER_TIME_PENALTY,
        rainySeasonTime: leg1.rainySeasonTime + leg2.rainySeasonTime + TRANSFER_TIME_PENALTY,
        
        // Take the worst security level of the two
        securityLevel: getWorstSecurity(leg1.securityLevel, leg2.securityLevel),
        
        // Sum checkpoints
        checkpoints: leg1.checkpoints + leg2.checkpoints,
        
        // Combine notes
        notes: `Multi-leg route via ${hub}. ${leg1.notes || ''} / ${leg2.notes || ''}`
      };
    }
  }

  // 3. If still nothing, return null
  return null;
}

const routes: Route[] = [
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
  
  // Add these to your routes const in src/data/routes.ts

  // ============================================
  // NORTHERN CORRIDOR (LONG HAUL)
  // ============================================
  
  // Yaoundé -> Ngaoundéré (The Gateway to the North)
  {
    id: 'yaounde-ngaoundere',
    origin: 'yaounde',
    destination: 'ngaoundere',
    distance: 850, // Via Bertoua/Garoua-Boulaï
    roadCondition: 'paved',
    drySeasonTime: 14, // Heavy truck time
    rainySeasonTime: 18,
    securityLevel: 'medium',
    checkpoints: 8,
    notes: 'Major corridor via East region. Road conditions generally good but high traffic.',
  },

  // Yaoundé -> Garoua (Direct Calculation)
  {
    id: 'yaounde-garoua',
    origin: 'yaounde',
    destination: 'garoua',
    distance: 1130, // Yaoundé -> Ngaoundéré -> Garoua
    roadCondition: 'paved',
    drySeasonTime: 19, 
    rainySeasonTime: 24,
    securityLevel: 'medium',
    checkpoints: 12,
    notes: 'Includes navigation of the Falaise de Ngaoundéré. Brake checks required.',
  },

  // Yaoundé -> Maroua (Far North)
  {
    id: 'yaounde-maroua',
    origin: 'yaounde',
    destination: 'maroua',
    distance: 1350,
    roadCondition: 'paved',
    drySeasonTime: 24, // Full day + driving
    rainySeasonTime: 30,
    securityLevel: 'high',
    checkpoints: 15,
    notes: 'High security vigilance required past Garoua.',
  },

  // Douala -> Ngaoundéré (Via Yaoundé bypass or Bafoussam)
  {
    id: 'douala-ngaoundere',
    origin: 'douala',
    destination: 'ngaoundere',
    distance: 1100,
    roadCondition: 'mixed',
    drySeasonTime: 20,
    rainySeasonTime: 26,
    securityLevel: 'medium',
    checkpoints: 10,
    notes: 'Calculated via Yarbang route.',
  },

  // Douala -> Garoua
  {
    id: 'douala-garoua',
    origin: 'douala',
    destination: 'garoua',
    distance: 1380,
    roadCondition: 'mixed',
    drySeasonTime: 25,
    rainySeasonTime: 32,
    securityLevel: 'medium',
    checkpoints: 14,
  },

  // ============================================
  // WESTERN / NORTH-WEST CONNECTIONS
  // ============================================

  // Douala -> Bafoussam (Crucial Hub)
  {
    id: 'douala-bafoussam',
    origin: 'douala',
    destination: 'bafoussam',
    distance: 270,
    roadCondition: 'paved',
    drySeasonTime: 5,
    rainySeasonTime: 6,
    securityLevel: 'low',
    checkpoints: 4,
    notes: 'Heavy truck traffic, mountainous sections.',
  },

  // Douala -> Bamenda
  {
    id: 'douala-bamenda',
    origin: 'douala',
    destination: 'bamenda',
    distance: 350,
    roadCondition: 'paved',
    drySeasonTime: 7,
    rainySeasonTime: 9,
    securityLevel: 'medium',
    checkpoints: 6,
    notes: 'Security situation variable in entry to NW.',
  },

  // Yaoundé -> Bamenda
  {
    id: 'yaounde-bamenda',
    origin: 'yaounde',
    destination: 'bamenda',
    distance: 360, // Via Bafoussam
    roadCondition: 'paved',
    drySeasonTime: 7,
    rainySeasonTime: 9,
    securityLevel: 'medium',
    checkpoints: 6,
  }
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