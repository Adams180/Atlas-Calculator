'use client';

import { CalculationResult } from '@/lib/types';
import { Clock, DollarSign, AlertTriangle, CheckCircle, TruckIcon, Package, MapPin, Shield } from 'lucide-react';
import { getCityById } from '@/data/cities';
import { formatCurrency, formatTime } from '@/lib/calculations';
import { CONTENT, LABELS } from '@/config/constants';
import Button from './ui/Button';
import Card from './ui/card';

interface Props {
  result: CalculationResult;
  onExportPDF: () => void;
  onNewCalculation: () => void;
}

export default function ResultsDisplay({ result, onExportPDF, onNewCalculation }: Props) {
  const originCity = getCityById(result.route.origin);
  const destCity = getCityById(result.route.destination);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero Result Card */}
      <Card variant="glass" className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full blur-3xl opacity-30 -mr-32 -mt-32"></div>
        
        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-success-100 text-success-700 text-sm font-medium mb-4">
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Calculation Complete
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-primary-600" />
                {originCity?.name} → {destCity?.name}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <span className="flex items-center gap-2">
                  <TruckIcon className="w-4 h-4" />
                  {result.route.distance} {LABELS.distance}
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  {LABELS.roadConditions[result.route.roadCondition]}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Estimated Time</div>
              <div className="text-2xl font-bold text-primary-600">
                {formatTime(result.estimatedTime.typical)}
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Total Cost</div>
              <div className="text-2xl font-bold text-primary-600">
                {formatCurrency(result.estimatedCost.total)}
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Vehicle Type</div>
              <div className="text-lg font-semibold text-gray-900 truncate">
                {result.vehicle.name}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Time Estimates - Premium Card */}
      <Card variant="elevated" hover>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
            <Clock className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {CONTENT.calculator.results.timeTitle}
            </h3>
            <p className="text-sm text-gray-600">Based on current conditions and historical data</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-6 bg-gradient-to-br from-success-50 to-success-100/50 rounded-2xl border border-success-200 transform hover:scale-105 transition-transform duration-200">
            <div className="text-sm font-medium text-success-700 mb-2">
              {CONTENT.calculator.results.timeBest}
            </div>
            <div className="text-3xl font-bold text-success-600 mb-1">
              {formatTime(result.estimatedTime.best)}
            </div>
            <div className="text-xs text-success-600">Optimal conditions</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl border-2 border-primary-300 shadow-md transform hover:scale-105 transition-transform duration-200">
            <div className="text-sm font-medium text-primary-700 mb-2">
              {CONTENT.calculator.results.timeTypical}
            </div>
            <div className="text-3xl font-bold text-primary-600 mb-1">
              {formatTime(result.estimatedTime.typical)}
            </div>
            <div className="text-xs text-primary-600">Most likely</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-warning-50 to-warning-100/50 rounded-2xl border border-warning-200 transform hover:scale-105 transition-transform duration-200">
            <div className="text-sm font-medium text-warning-700 mb-2">
              {CONTENT.calculator.results.timeWorst}
            </div>
            <div className="text-3xl font-bold text-warning-600 mb-1">
              {formatTime(result.estimatedTime.worst)}
            </div>
            <div className="text-xs text-warning-600">With delays</div>
          </div>
        </div>
      </Card>

      {/* Cost Breakdown - Premium Card */}
      <Card variant="elevated" hover>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-accent-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {CONTENT.calculator.results.costTitle}
            </h3>
            <p className="text-sm text-gray-600">Transparent pricing with no hidden fees</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {[
            { label: CONTENT.calculator.results.costFuel, amount: result.estimatedCost.fuel, icon: '⛽' },
            { label: CONTENT.calculator.results.costVehicle, amount: result.estimatedCost.vehicle, icon: '🚚' },
            { label: CONTENT.calculator.results.costDriver, amount: result.estimatedCost.driver, icon: '👤' },
            { label: CONTENT.calculator.results.costOverhead, amount: result.estimatedCost.overhead, icon: '📋' },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center py-3 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <span className="text-gray-700 flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </span>
              <span className="font-semibold text-gray-900">{formatCurrency(item.amount)}</span>
            </div>
          ))}
          
          <div className="mt-6 pt-6 border-t-2 border-gray-200">
            <div className="flex justify-between items-center p-5 rounded-2xl bg-gradient-to-r from-primary-50 to-accent-50">
              <span className="font-bold text-xl text-gray-900">
                {CONTENT.calculator.results.costTotal}
              </span>
              <span className="font-bold text-3xl bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                {formatCurrency(result.estimatedCost.total)}
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Cargo & Vehicle Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card variant="default" hover>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
              <Package className="w-5 h-5 text-gray-600" />
            </div>
            <h4 className="font-semibold text-gray-900">Cargo Information</h4>
          </div>
          <p className="font-medium text-gray-900 mb-2">{result.cargo.name}</p>
          {result.cargo.description && (
            <p className="text-sm text-gray-600 leading-relaxed">{result.cargo.description}</p>
          )}
        </Card>
        
        <Card variant="default" hover>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
              <TruckIcon className="w-5 h-5 text-gray-600" />
            </div>
            <h4 className="font-semibold text-gray-900">Vehicle Information</h4>
          </div>
          <p className="font-medium text-gray-900 mb-2">{result.vehicle.name}</p>
          <div className="flex gap-4 text-sm text-gray-600">
            <span>Capacity: {result.vehicle.capacity.toLocaleString()} kg</span>
            <span>•</span>
            <span>{result.vehicle.fuelConsumption}L/100km</span>
          </div>
        </Card>
      </div>

      {/* Recommendations */}
      {result.recommendations.length > 0 && (
        <Card variant="glass" className="border-2 border-success-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-success-100 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-success-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-success-900">
                {CONTENT.calculator.results.recommendationsTitle}
              </h3>
              <p className="text-sm text-success-700">Follow these guidelines for a successful delivery</p>
            </div>
          </div>
          <ul className="space-y-3">
            {result.recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors">
                <div className="w-6 h-6 rounded-full bg-success-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-800 leading-relaxed">{rec}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Risk Factors */}
      {result.riskFactors.length > 0 && (
        <Card variant="glass" className="border-2 border-warning-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-warning-100 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-warning-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-warning-900">
                {CONTENT.calculator.results.riskFactorsTitle}
              </h3>
              <p className="text-sm text-warning-700">Be aware of these potential challenges</p>
            </div>
          </div>
          <ul className="space-y-3">
            {result.riskFactors.map((risk, i) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors">
                <div className="w-6 h-6 rounded-full bg-warning-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-warning-600 text-sm">⚠</span>
                </div>
                <span className="text-gray-800 leading-relaxed">{risk}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button
          onClick={onExportPDF}
          variant="primary"
          size="lg"
          className="flex-1"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {CONTENT.calculator.results.exportButton}
        </Button>
        <Button
          onClick={onNewCalculation}
          variant="outline"
          size="lg"
          className="flex-1"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          {CONTENT.calculator.results.newCalculationButton}
        </Button>
      </div>
    </div>
  );
}