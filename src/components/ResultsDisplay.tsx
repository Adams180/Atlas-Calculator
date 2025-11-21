/**
 * Calculation results display component
 */

'use client';

import { CalculationResult } from '@/lib/types';
import { Clock, DollarSign, AlertTriangle, CheckCircle, TruckIcon, Package } from 'lucide-react';
import { getCityById } from '@/data/cities';
import { formatCurrency, formatTime } from '@/lib/calculations';
import { CONTENT, LABELS } from '@/config/constants';

interface Props {
  result: CalculationResult;
  onExportPDF: () => void;
  onNewCalculation: () => void;
}

export default function ResultsDisplay({ result, onExportPDF, onNewCalculation }: Props) {
  const originCity = getCityById(result.route.origin);
  const destCity = getCityById(result.route.destination);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2">
          {originCity?.name} → {destCity?.name}
        </h2>
        <div className="flex items-center gap-4 text-primary-100">
          <span className="flex items-center gap-1">
            <TruckIcon className="w-4 h-4" />
            {result.route.distance} {LABELS.distance}
          </span>
          <span>•</span>
          <span>{LABELS.roadConditions[result.route.roadCondition]}</span>
        </div>
      </div>

      {/* Time Estimates Card */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-primary-600" />
          <h3 className="text-lg font-semibold text-gray-900">
            {CONTENT.calculator.results.timeTitle}
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">
              {CONTENT.calculator.results.timeBest}
            </div>
            <div className="text-2xl font-bold text-green-600">
              {formatTime(result.estimatedTime.best)}
            </div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">
              {CONTENT.calculator.results.timeTypical}
            </div>
            <div className="text-2xl font-bold text-blue-600">
              {formatTime(result.estimatedTime.typical)}
            </div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">
              {CONTENT.calculator.results.timeWorst}
            </div>
            <div className="text-2xl font-bold text-orange-600">
              {formatTime(result.estimatedTime.worst)}
            </div>
          </div>
        </div>
      </div>

      {/* Cost Breakdown Card */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-primary-600" />
          <h3 className="text-lg font-semibold text-gray-900">
            {CONTENT.calculator.results.costTitle}
          </h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">{CONTENT.calculator.results.costFuel}</span>
            <span className="font-medium">{formatCurrency(result.estimatedCost.fuel)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">{CONTENT.calculator.results.costVehicle}</span>
            <span className="font-medium">{formatCurrency(result.estimatedCost.vehicle)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">{CONTENT.calculator.results.costDriver}</span>
            <span className="font-medium">{formatCurrency(result.estimatedCost.driver)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">{CONTENT.calculator.results.costOverhead}</span>
            <span className="font-medium">{formatCurrency(result.estimatedCost.overhead)}</span>
          </div>
          <div className="flex justify-between pt-4 mt-2 border-t-2 border-gray-300">
            <span className="font-bold text-lg text-gray-900">
              {CONTENT.calculator.results.costTotal}
            </span>
            <span className="font-bold text-2xl text-primary-600">
              {formatCurrency(result.estimatedCost.total)}
            </span>
          </div>
        </div>
      </div>

      {/* Cargo & Vehicle Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Package className="w-4 h-4 text-gray-600" />
            <span className="font-medium text-gray-900">Cargo Type</span>
          </div>
          <p className="text-gray-700">{result.cargo.name}</p>
          {result.cargo.description && (
            <p className="text-sm text-gray-600 mt-1">{result.cargo.description}</p>
          )}
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TruckIcon className="w-4 h-4 text-gray-600" />
            <span className="font-medium text-gray-900">Vehicle Type</span>
          </div>
          <p className="text-gray-700">{result.vehicle.name}</p>
          <p className="text-sm text-gray-600 mt-1">
            Capacity: {result.vehicle.capacity.toLocaleString()} kg
          </p>
        </div>
      </div>

      {/* Recommendations */}
      {result.recommendations.length > 0 && (
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold text-green-900">
              {CONTENT.calculator.results.recommendationsTitle}
            </h3>
          </div>
          <ul className="space-y-2">
            {result.recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-2 text-green-800">
                <span className="text-green-600 mt-1">✓</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Risk Factors */}
      {result.riskFactors.length > 0 && (
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <h3 className="text-lg font-semibold text-orange-900">
              {CONTENT.calculator.results.riskFactorsTitle}
            </h3>
          </div>
          <ul className="space-y-2">
            {result.riskFactors.map((risk, i) => (
              <li key={i} className="flex items-start gap-2 text-orange-800">
                <span className="text-orange-600 mt-1">⚠</span>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onExportPDF}
          className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors"
        >
          {CONTENT.calculator.results.exportButton}
        </button>
        <button
          onClick={onNewCalculation}
          className="flex-1 border-2 border-primary-600 text-primary-600 py-3 px-6 rounded-lg font-medium hover:bg-primary-50 transition-colors"
        >
          {CONTENT.calculator.results.newCalculationButton}
        </button>
      </div>
    </div>
  );
}