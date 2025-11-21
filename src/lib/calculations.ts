/**
 * Core calculation engine for the supply chain calculator
 * All business logic for cost and time estimates
 */

import { 
  CalculatorInput, 
  CalculationResult, 
  Route,
  VehicleType,
  CargoType,
  TimeEstimate,
  CostBreakdown,
} from './types';
import { findRoute } from '@/data/routes';
import { selectVehicleForCargo, getVehicleById } from '@/data/vehicles';
import { getCargoById } from '@/data/cargoTypes';
import { currentCostFactors } from '@/data/costFactors';
import { LABELS } from '@/config/constants';

/**
 * Main calculation function
 * Takes user input and returns complete calculation result
 */
export function calculateDelivery(input: CalculatorInput): CalculationResult | null {
  // Find the route
  const route = findRoute(input.origin, input.destination);
  if (!route) {
    return null;
  }

  // Get cargo details
  const cargo = getCargoById(input.cargoType);
  if (!cargo) {
    return null;
  }

  // Select appropriate vehicle
  const requiresRefrigeration = cargo.specialRequirements?.toLowerCase().includes('refrigerat') ?? false;
  const requiresOffRoad = route.roadCondition === 'unpaved';
  const vehicle = selectVehicleForCargo(input.weight, requiresRefrigeration, requiresOffRoad);

  // Calculate time estimates
  const estimatedTime = calculateTimeEstimate(route, input.season, vehicle);

  // Calculate cost breakdown
  const estimatedCost = calculateCostBreakdown(
    route,
    vehicle,
    cargo,
    estimatedTime.typical,
    input.isUrgent
  );

  // Generate recommendations
  const recommendations = generateRecommendations(route, input, cargo, vehicle);

  // Generate risk factors
  const riskFactors = generateRiskFactors(route, input);

  return {
    estimatedTime,
    estimatedCost,
    route,
    vehicle,
    cargo,
    recommendations,
    riskFactors,
    calculatedAt: new Date().toISOString(),
  };
}

/**
 * Calculate time estimates (best, typical, worst case)
 */
function calculateTimeEstimate(
  route: Route,
  season: 'dry' | 'rainy',
  vehicle: VehicleType
): TimeEstimate {
  // Base time depends on season
  const baseTime = season === 'dry' ? route.drySeasonTime : route.rainySeasonTime;

  // Off-road vehicles are slower on paved roads but better on unpaved
  let vehicleAdjustment = 1.0;
  if (vehicle.specialCapabilities?.includes('4x4')) {
    vehicleAdjustment = route.roadCondition === 'paved' ? 1.1 : 0.9;
  }

  const adjustedBaseTime = baseTime * vehicleAdjustment;

  // Best case: optimal conditions (20% faster)
  const best = adjustedBaseTime * 0.8;

  // Typical: as calculated
  const typical = adjustedBaseTime;

  // Worst case: delays, traffic, weather (30% slower)
  const worst = adjustedBaseTime * 1.3;

  return {
    best: Math.round(best * 10) / 10,  // Round to 1 decimal
    typical: Math.round(typical * 10) / 10,
    worst: Math.round(worst * 10) / 10,
  };
}

/**
 * Calculate detailed cost breakdown
 */
function calculateCostBreakdown(
  route: Route,
  vehicle: VehicleType,
  cargo: CargoType,
  travelTimeHours: number,
  isUrgent: boolean
): CostBreakdown {
  // 1. Fuel cost
  const fuelCost = calculateFuelCost(route.distance, vehicle);

  // 2. Vehicle cost (wear and tear, maintenance per km)
  const vehicleCost = route.distance * vehicle.costPerKm;

  // 3. Driver cost
  const driverCost = calculateDriverCost(travelTimeHours);

  // 4. Apply cargo multiplier
  const cargoMultiplier = cargo.costMultiplier;
  const subtotal = (fuelCost + vehicleCost + driverCost) * cargoMultiplier;

  // 5. Overhead (insurance, permits, tolls)
  const overhead = subtotal * currentCostFactors.overheadPercentage;

  // 6. Apply urgency multiplier if needed
  const baseTotal = subtotal + overhead;
  const total = isUrgent ? baseTotal * currentCostFactors.urgencyMultiplier : baseTotal;

  return {
    fuel: Math.round(fuelCost),
    vehicle: Math.round(vehicleCost * cargoMultiplier),
    driver: Math.round(driverCost * cargoMultiplier),
    overhead: Math.round(overhead),
    total: Math.round(total),
  };
}

/**
 * Calculate fuel cost based on distance and vehicle consumption
 */
function calculateFuelCost(distance: number, vehicle: VehicleType): number {
  const litersNeeded = (distance / 100) * vehicle.fuelConsumption;
  return litersNeeded * currentCostFactors.fuelPricePerLiter;
}

/**
 * Calculate driver cost based on travel time
 */
function calculateDriverCost(hours: number): number {
  // Assume 8-hour driving days
  const daysNeeded = Math.ceil(hours / 8);
  return daysNeeded * currentCostFactors.driverDailyRate;
}

/**
 * Generate contextual recommendations
 */
function generateRecommendations(
  route: Route,
  input: CalculatorInput,
  cargo: CargoType,
  vehicle: VehicleType
): string[] {
  const recommendations: string[] = [];

  // Road condition recommendations
  if (route.roadCondition === 'unpaved' || route.roadCondition === 'mixed') {
    if (!vehicle.specialCapabilities?.includes('4x4')) {
      recommendations.push('Consider using a 4x4 vehicle for better handling on unpaved sections');
    }
    recommendations.push('Inspect vehicle thoroughly before departure, especially suspension and tires');
  }

  // Season-specific recommendations
  if (input.season === 'rainy') {
    if (route.roadCondition !== 'paved') {
      recommendations.push('Check road conditions immediately before departure - some routes may be impassable');
      recommendations.push('Allow extra time for potential detours or delays due to flooding');
    }
    recommendations.push('Ensure cargo is properly waterproofed and secured');
  }

  // Checkpoint recommendations
  if (route.checkpoints > 3) {
    recommendations.push('Prepare all documentation in advance to minimize checkpoint delays');
    recommendations.push('Ensure driver has valid permits and cargo manifests');
  }

  // Cargo-specific recommendations
  if (cargo.specialRequirements) {
    recommendations.push(cargo.specialRequirements);
  }

  if (cargo.requiresSpecialVehicle) {
    recommendations.push('Specialized vehicle required - ensure availability before confirming delivery');
  }

  // Security recommendations
  if (route.securityLevel === 'high') {
    recommendations.push('Consider security escort or travel in convoy');
    recommendations.push('Avoid night travel and inform relevant authorities of travel plans');
  } else if (route.securityLevel === 'medium') {
    recommendations.push('Travel during daylight hours when possible');
    recommendations.push('Stay in communication with base and check in at regular intervals');
  }

  // Distance recommendations
  if (route.distance > 400) {
    recommendations.push('Consider overnight stop for driver rest - factor into timeline');
    recommendations.push('Plan fuel stops in advance, especially in remote areas');
  }

  // Urgent delivery recommendations
  if (input.isUrgent) {
    recommendations.push('Coordinate closely with recipient for immediate offloading upon arrival');
    recommendations.push('Have backup vehicle/driver on standby in case of breakdown');
  }

  return recommendations;
}

/**
 * Generate risk factors
 */
function generateRiskFactors(
  route: Route,
  input: CalculatorInput
): string[] {
  const risks: string[] = [];

  // Security risks
  if (route.securityLevel === 'high') {
    risks.push('High security risk area - incidents reported regularly');
    risks.push('Potential for roadblocks or security incidents');
  } else if (route.securityLevel === 'medium') {
    risks.push('Moderate security concerns - maintain vigilance');
  }

  // Weather/season risks
  if (input.season === 'rainy') {
    risks.push('Rainy season increases risk of road flooding and closures');
    risks.push('Potential for landslides in mountainous areas');
    
    if (route.roadCondition === 'unpaved') {
      risks.push('Unpaved roads may become impassable during heavy rains');
    }
  }

  // Road condition risks
  if (route.roadCondition === 'unpaved') {
    risks.push('Unpaved roads increase vehicle breakdown risk');
    risks.push('Higher likelihood of cargo damage due to rough terrain');
  } else if (route.roadCondition === 'mixed') {
    risks.push('Variable road conditions may cause delays');
  }

  // Distance risks
  if (route.distance > 500) {
    risks.push('Long distance increases fatigue-related incident risk');
    risks.push('More fuel stops needed - plan for fuel availability');
  }

  // Checkpoint risks
  if (route.checkpoints > 5) {
    risks.push('Multiple checkpoints may cause significant delays');
    risks.push('Documentation issues could result in cargo detention');
  }

  return risks;
}

/**
 * Validate calculator input
 */
export function validateInput(input: CalculatorInput): string[] {
  const errors: string[] = [];

  if (!input.origin) {
    errors.push('Origin city is required');
  }

  if (!input.destination) {
    errors.push('Destination city is required');
  }

  if (input.origin === input.destination) {
    errors.push('Origin and destination cannot be the same');
  }

  if (!input.cargoType) {
    errors.push('Cargo type is required');
  }

  if (!input.weight || input.weight <= 0) {
    errors.push('Valid cargo weight is required');
  }

  if (input.weight > 25000) {
    errors.push('Weight exceeds maximum capacity (25,000 kg). Contact us for special arrangements');
  }

  return errors;
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return `${amount.toLocaleString()} ${LABELS.currency}`;
}

/**
 * Format time for display
 */
export function formatTime(hours: number): string {
  if (hours < 24) {
    return `${hours.toFixed(1)} ${LABELS.time}`;
  }
  
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;
  return `${days}d ${remainingHours.toFixed(1)}h`;
}