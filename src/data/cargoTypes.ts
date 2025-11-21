/**
 * Cargo type definitions
 * Modify this file to add new cargo types or adjust multipliers
 */

import { CargoType } from '@/lib/types';

export const cargoTypes: CargoType[] = [
  {
    id: 'food-dry',
    name: 'Food Aid (Dry Goods)',
    description: 'Grains, pulses, flour, and other dry food items',
    costMultiplier: 1.0,
  },
  {
    id: 'food-canned',
    name: 'Canned/Packaged Food',
    description: 'Ready-to-eat meals, canned goods',
    costMultiplier: 1.1,
  },
  {
    id: 'medical-general',
    name: 'Medical Supplies (General)',
    description: 'Bandages, basic medical equipment, non-temperature sensitive',
    costMultiplier: 1.2,
  },
  {
    id: 'medical-cold-chain',
    name: 'Medical Supplies (Cold Chain)',
    description: 'Vaccines, temperature-sensitive medicines',
    specialRequirements: 'Requires refrigerated transport and continuous temperature monitoring',
    costMultiplier: 1.8,
    requiresSpecialVehicle: true,
  },
  {
    id: 'nfi-shelter',
    name: 'NFI - Shelter Materials',
    description: 'Tarpaulins, tents, blankets, sleeping mats',
    costMultiplier: 1.0,
  },
  {
    id: 'nfi-hygiene',
    name: 'NFI - Hygiene Kits',
    description: 'Soap, sanitation supplies, hygiene items',
    costMultiplier: 1.0,
  },
  {
    id: 'nfi-kitchen',
    name: 'NFI - Kitchen Sets',
    description: 'Cooking utensils, pots, pans, plates',
    costMultiplier: 1.1,
  },
  {
    id: 'water-equipment',
    name: 'WASH Equipment',
    description: 'Water containers, purification equipment, pumps',
    costMultiplier: 1.2,
  },
  {
    id: 'education',
    name: 'Education Materials',
    description: 'School supplies, textbooks, teaching materials',
    costMultiplier: 1.0,
  },
  {
    id: 'equipment-general',
    name: 'Equipment & Tools',
    description: 'General tools and equipment',
    costMultiplier: 1.1,
  },
  {
    id: 'equipment-heavy',
    name: 'Heavy Equipment',
    description: 'Generators, construction equipment, large machinery',
    costMultiplier: 1.4,
  },
];

// Helper functions
export function getCargoById(id: string): CargoType | undefined {
  return cargoTypes.find(cargo => cargo.id === id);
}

export function getStandardCargo(): CargoType[] {
  return cargoTypes.filter(cargo => !cargo.requiresSpecialVehicle);
}

export function getSpecialCargo(): CargoType[] {
  return cargoTypes.filter(cargo => cargo.requiresSpecialVehicle);
}