'use client';

import { useState } from 'react';
import { CalculatorInput } from '@/lib/types';
import { cities } from '@/data/cities';
import { cargoTypes } from '@/data/cargoTypes';
import { CONTENT } from '@/config/constants';
import Button from './ui/Button';
import Input from './ui/Input';
import Card from './ui/card';

interface Props {
  onCalculate: (input: CalculatorInput) => void;
  isLoading?: boolean;
}

export default function CalculatorForm({ onCalculate, isLoading = false }: Props) {
  const [formData, setFormData] = useState<CalculatorInput>({
    origin: '',
    destination: '',
    cargoType: '',
    weight: 0,
    isUrgent: false,
    season: 'dry',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(formData);
  };

  const handleReset = () => {
    setFormData({
      origin: '',
      destination: '',
      cargoType: '',
      weight: 0,
      isUrgent: false,
      season: 'dry',
    });
  };

  return (
    <Card variant="glass" className="animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Form Header */}
        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Enter Shipment Details
          </h2>
          <p className="text-gray-600">
            Fill in the information below to get your instant estimate
          </p>
        </div>

        {/* Route Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Route Information</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Origin */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {CONTENT.calculator.form.originLabel}
                <span className="text-error-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.origin}
                  onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400"
                  required
                  disabled={isLoading}
                >
                  <option value="">{CONTENT.calculator.form.originPlaceholder}</option>
                  {cities.map(city => (
                    <option key={city.id} value={city.id}>
                      {city.name} ({city.region})
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Destination */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {CONTENT.calculator.form.destinationLabel}
                <span className="text-error-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400"
                  required
                  disabled={isLoading}
                >
                  <option value="">{CONTENT.calculator.form.destinationPlaceholder}</option>
                  {cities.map(city => (
                    <option key={city.id} value={city.id}>
                      {city.name} ({city.region})
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cargo Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Cargo Details</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Cargo Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {CONTENT.calculator.form.cargoTypeLabel}
                <span className="text-error-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.cargoType}
                  onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400"
                  required
                  disabled={isLoading}
                >
                  <option value="">{CONTENT.calculator.form.cargoTypePlaceholder}</option>
                  {cargoTypes.map(cargo => (
                    <option key={cargo.id} value={cargo.id}>
                      {cargo.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Weight */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {CONTENT.calculator.form.weightLabel}
                <span className="text-error-500 ml-1">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={formData.weight || ''}
                  onChange={(e) => setFormData({ ...formData, weight: Number(e.target.value) })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  placeholder={CONTENT.calculator.form.weightPlaceholder}
                  min="1"
                  max="25000"
                  required
                  disabled={isLoading}
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <span className="text-gray-500 text-sm font-medium">kg</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Options Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-warning-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-warning-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Additional Options</h3>
          </div>

          {/* Season Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              {CONTENT.calculator.form.seasonLabel}
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className={`relative flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                formData.season === 'dry' 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-300 bg-white hover:border-gray-400'
              }`}>
                <input
                  type="radio"
                  value="dry"
                  checked={formData.season === 'dry'}
                  onChange={() => setFormData({ ...formData, season: 'dry' })}
                  className="sr-only"
                  disabled={isLoading}
                />
                <div className="text-center">
                  <svg className={`w-8 h-8 mx-auto mb-2 ${formData.season === 'dry' ? 'text-primary-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className={`font-medium ${formData.season === 'dry' ? 'text-primary-700' : 'text-gray-700'}`}>
                    {CONTENT.calculator.form.seasonDry}
                  </span>
                </div>
              </label>
              
              <label className={`relative flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                formData.season === 'rainy' 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-300 bg-white hover:border-gray-400'
              }`}>
                <input
                  type="radio"
                  value="rainy"
                  checked={formData.season === 'rainy'}
                  onChange={() => setFormData({ ...formData, season: 'rainy' })}
                  className="sr-only"
                  disabled={isLoading}
                />
                <div className="text-center">
                  <svg className={`w-8 h-8 mx-auto mb-2 ${formData.season === 'rainy' ? 'text-primary-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <span className={`font-medium ${formData.season === 'rainy' ? 'text-primary-700' : 'text-gray-700'}`}>
                    {CONTENT.calculator.form.seasonRainy}
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Urgent Delivery */}
          <div className="bg-gradient-to-r from-warning-50 to-orange-50 p-5 rounded-xl border border-warning-200">
            <label className="flex items-start cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={formData.isUrgent}
                  onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                  className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
                  disabled={isLoading}
                />
              </div>
              <div className="ml-4">
                <span className="text-base font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                  {CONTENT.calculator.form.urgentLabel}
                </span>
                <p className="text-sm text-gray-600 mt-1">
                  Priority delivery with {CONTENT.calculator.form.urgentDescription}
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isLoading}
            className="flex-1"
          >
            {isLoading ? 'Calculating...' : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {CONTENT.calculator.form.submitButton}
              </>
            )}
          </Button>
          <Button
            type="button"
            onClick={handleReset}
            variant="outline"
            size="lg"
            disabled={isLoading}
            className="sm:w-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {CONTENT.calculator.form.resetButton}
          </Button>
        </div>
      </form>
    </Card>
  );
}