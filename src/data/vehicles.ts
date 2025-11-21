/**
 * Vehicle type definitions
 * Adjust costs and specifications here
 */

import { VehicleType } from '@/lib/types';

export const vehicles: VehicleType[] = [
  {
    id: 'pickup',
    name: 'Pickup Truck',
    capacity: 1500,  // kg
    costPerKm: 300,  // FCFA
    fuelConsumption: 12,  // liters per 100km
    minWeight: 0,
  },
  {
    id: 'light-truck',
    name: 'Light Truck (3 tons)',
    capacity: 3000,
    costPerKm: 400,
    fuelConsumption: 15,
    minWeight: 1000,
  },
  {
    id: 'medium-truck',
    name: 'Medium Truck (10 tons)',
    capacity: 10000,
    costPerKm: 600,
    fuelConsumption: 25,
    minWeight: 3000,
  },
  {
    id: 'heavy-truck',
    name: 'Heavy Truck (20 tons)',
    capacity: 20000,
    costPerKm: 800,
    fuelConsumption: 35,
    minWeight: 10000,
  },
  {
    id: 'refrigerated-small',
    name: 'Refrigerated Truck (Small)',
    capacity: 3000,
    costPerKm: 700,
    fuelConsumption: 18,
    minWeight: 0,
    specialCapabilities: ['refrigerated'],
  },
  {
    id: 'refrigerated-large',
    name: 'Refrigerated Truck (Large)',
    capacity: 10000,
    costPerKm: 1000,
    fuelConsumption: 30,
    minWeight: 3000,
    specialCapabilities: ['refrigerated'],
  },
  {
    id: '4x4-light',
    name: '4x4 Light Truck',
    capacity: 2000,
    costPerKm: 500,
    fuelConsumption: 16,
    minWeight: 0,
    specialCapabilities: ['4x4', 'off-road'],
  },
  {
    id: '4x4-heavy',
    name: '4x4 Heavy Truck',
    capacity: 8000,
    costPerKm: 900,
    fuelConsumption: 32,
    minWeight: 2000,
    specialCapabilities: ['4x4', 'off-road'],
  },
];

// Helper function to select appropriate vehicle
export function selectVehicleForCargo(
  weight: number, 
  requiresRefrigeration: boolean = false,
  requiresOffRoad: boolean = false
): VehicleType {
  // Filter vehicles based on requirements
  let suitableVehicles = vehicles.filter(v => {
    const meetsWeightRequirement = v.capacity >= weight && (v.minWeight || 0) <= weight;
    const meetsRefrigerationRequirement = !requiresRefrigeration || 
      (v.specialCapabilities?.includes('refrigerated') ?? false);
    const meetsOffRoadRequirement = !requiresOffRoad || 
      (v.specialCapabilities?.includes('4x4') ?? false);
    
    return meetsWeightRequirement && meetsRefrigerationRequirement && meetsOffRoadRequirement;
  });
  
  // Sort by capacity (smallest suitable vehicle)
  suitableVehicles.sort((a, b) => a.capacity - b.capacity);
  
  // Return smallest suitable vehicle or largest available if none match
  return suitableVehicles[0] || vehicles[vehicles.length - 1];
}

export function getVehicleById(id: string): VehicleType | undefined {
  return vehicles.find(v => v.id === id);
}