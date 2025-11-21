/**
 * Validation functions for forms and inputs
 */

import { z } from 'zod';
import { CalculatorInput } from './types';

/**
 * Zod schema for calculator input validation
 */
export const calculatorInputSchema = z.object({
  origin: z.string().min(1, 'Origin is required'),
  destination: z.string().min(1, 'Destination is required'),
  cargoType: z.string().min(1, 'Cargo type is required'),
  weight: z.number()
    .positive('Weight must be greater than 0')
    .max(25000, 'Weight cannot exceed 25,000 kg'),
  isUrgent: z.boolean(),
  season: z.enum(['dry', 'rainy']),
}).refine(
  (data) => data.origin !== data.destination,
  {
    message: 'Origin and destination cannot be the same',
    path: ['destination'],
  }
);

/**
 * Validate calculator input
 */
export function validateCalculatorInput(input: CalculatorInput): {
  valid: boolean;
  errors: Record<string, string>;
} {
  try {
    calculatorInputSchema.parse(input);
    return { valid: true, errors: {} };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach((err) => {
        if (err.path.length > 0) {
          errors[err.path[0] as string] = err.message;
        }
      });
      return { valid: false, errors };
    }
    return { valid: false, errors: { general: 'Validation failed' } };
  }
}