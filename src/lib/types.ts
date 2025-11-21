/**
 * TypeScript type definitions for the entire application
 * All interfaces and types should be defined here
 */

// ============================================
// CORE DATA TYPES
// ============================================

export interface City {
  id: string;
  name: string;
  region: string;
  lat?: number;  // For future mapping features
  lon?: number;
}

export interface Route {
  id: string;
  origin: string;  // City ID
  destination: string;  // City ID
  distance: number;  // kilometers
  roadCondition: RoadCondition;
  drySeasonTime: number;  // hours
  rainySeasonTime: number;  // hours
  securityLevel: SecurityLevel;
  checkpoints: number;
  notes?: string;  // Additional route information
}

export interface CargoType {
  id: string;
  name: string;
  description?: string;
  specialRequirements?: string;
  costMultiplier: number;  // 1.0 = standard, >1.0 = premium
  requiresSpecialVehicle?: boolean;
}

export interface VehicleType {
  id: string;
  name: string;
  capacity: number;  // kg
  costPerKm: number;  // FCFA
  fuelConsumption: number;  // liters per 100km
  minWeight?: number;  // Minimum weight to use this vehicle
  specialCapabilities?: string[];  // e.g., ['refrigerated', '4x4']
}

export interface CostFactors {
  fuelPricePerLiter: number;  // FCFA
  driverDailyRate: number;  // FCFA per day
  overheadPercentage: number;  // 0.20 = 20%
  urgencyMultiplier: number;  // 1.5 = 50% premium
  lastUpdated: string;  // ISO date string
}

// ============================================
// ENUMS AND CONSTANTS
// ============================================

export type RoadCondition = 'paved' | 'unpaved' | 'mixed';
export type SecurityLevel = 'low' | 'medium' | 'high';
export type Season = 'dry' | 'rainy';

// ============================================
// CALCULATOR INTERFACES
// ============================================

export interface CalculatorInput {
  origin: string;  // City ID
  destination: string;  // City ID
  cargoType: string;  // CargoType ID
  weight: number;  // kg
  isUrgent: boolean;
  season: Season;
}

export interface TimeEstimate {
  best: number;  // hours
  typical: number;  // hours
  worst: number;  // hours
}

export interface CostBreakdown {
  fuel: number;  // FCFA
  vehicle: number;  // FCFA
  driver: number;  // FCFA
  overhead: number;  // FCFA
  total: number;  // FCFA
}

export interface CalculationResult {
  estimatedTime: TimeEstimate;
  estimatedCost: CostBreakdown;
  route: Route;
  vehicle: VehicleType;
  cargo: CargoType;
  recommendations: string[];
  riskFactors: string[];
  calculatedAt: string;  // ISO date string
}

// ============================================
// FORM VALIDATION
// ============================================

export interface FormErrors {
  origin?: string;
  destination?: string;
  cargoType?: string;
  weight?: string;
  general?: string;
}

// ============================================
// PDF EXPORT
// ============================================

export interface PDFExportOptions {
  includeRecommendations: boolean;
  includeRiskFactors: boolean;
  includeRouteDetails: boolean;
  organizationName?: string;
  referenceNumber?: string;
}