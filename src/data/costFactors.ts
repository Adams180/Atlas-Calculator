/**
 * Current cost factors
 * Update these regularly to reflect market prices
 * IMPORTANT: This is the main place to adjust pricing
 */

import { CostFactors } from '@/lib/types';

export const currentCostFactors: CostFactors = {
  // Current fuel price in FCFA per liter
  // Update this regularly based on market prices
  fuelPricePerLiter: 650,
  
  // Driver daily rate in FCFA
  // Assumes 8-hour driving day
  driverDailyRate: 15000,
  
  // Overhead percentage (insurance, permits, tolls, etc.)
  // 0.20 = 20% of base costs
  overheadPercentage: 0.20,
  
  // Multiplier for urgent deliveries
  // 1.5 = 50% premium for urgent requests
  urgencyMultiplier: 1.5,
  
  // Last time these factors were updated
  lastUpdated: '2025-11-15',
};

/**
 * Historical cost factors for tracking price changes
 * Useful for analyzing trends or rolling back to previous rates
 */
export const historicalCostFactors: Array<CostFactors & { effectiveDate: string }> = [
  {
    ...currentCostFactors,
    effectiveDate: '2025-11-15',
  },
  // Add previous cost factors here as they change
];

// Helper to get cost factors for a specific date (future feature)
export function getCostFactorsForDate(date: string): CostFactors {
  const factors = historicalCostFactors
    .filter(f => f.effectiveDate <= date)
    .sort((a, b) => b.effectiveDate.localeCompare(a.effectiveDate));
  
  return factors[0] || currentCostFactors;
}