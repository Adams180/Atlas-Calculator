/**
 * Calculator input form component
 */

'use client';

import { useState } from 'react';
import { CalculatorInput } from '@/lib/types';
import { cities } from '@/data/cities';
import { cargoTypes } from '@/data/cargoTypes';
import { CONTENT } from '@/config/constants';

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
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
      {/* Origin and Destination Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Origin */}
        <div>
          <label 
            htmlFor="origin"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {CONTENT.calculator.form.originLabel}
          </label>
          <select
            id="origin"
            value={formData.origin}
            onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
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
        </div>

        {/* Destination */}
        <div>
          <label 
            htmlFor="destination"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {CONTENT.calculator.form.destinationLabel}
          </label>
          <select
            id="destination"
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
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
        </div>
      </div>

      {/* Cargo Type and Weight Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Cargo Type */}
        <div>
          <label 
            htmlFor="cargoType"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {CONTENT.calculator.form.cargoTypeLabel}
          </label>
          <select
            id="cargoType"
            value={formData.cargoType}
            onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
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
        </div>

        {/* Weight */}
        <div>
          <label 
            htmlFor="weight"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {CONTENT.calculator.form.weightLabel}
          </label>
          <input
            id="weight"
            type="number"
            value={formData.weight || ''}
            onChange={(e) => setFormData({ ...formData, weight: Number(e.target.value) })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder={CONTENT.calculator.form.weightPlaceholder}
            min="1"
            max="25000"
            required
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Season Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          {CONTENT.calculator.form.seasonLabel}
        </label>
        <div className="flex gap-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              value="dry"
              checked={formData.season === 'dry'}
              onChange={() => setFormData({ ...formData, season: 'dry' })}
              className="w-4 h-4 text-primary-600 focus:ring-primary-500"
              disabled={isLoading}
            />
            <span className="ml-2 text-gray-700">
              {CONTENT.calculator.form.seasonDry}
            </span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              value="rainy"
              checked={formData.season === 'rainy'}
              onChange={() => setFormData({ ...formData, season: 'rainy' })}
              className="w-4 h-4 text-primary-600 focus:ring-primary-500"
              disabled={isLoading}
            />
            <span className="ml-2 text-gray-700">
              {CONTENT.calculator.form.seasonRainy}
            </span>
          </label>
        </div>
      </div>

      {/* Urgent Delivery Checkbox */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <label className="flex items-start cursor-pointer">
          <input
            type="checkbox"
            checked={formData.isUrgent}
            onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
            className="w-5 h-5 text-primary-600 focus:ring-primary-500 mt-0.5"
            disabled={isLoading}
          />
          <div className="ml-3">
            <span className="text-sm font-medium text-gray-900">
              {CONTENT.calculator.form.urgentLabel}
            </span>
            <span className="text-sm text-gray-600 ml-2">
              {CONTENT.calculator.form.urgentDescription}
            </span>
          </div>
        </label>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Calculating...' : CONTENT.calculator.form.submitButton}
        </button>
        <button
          type="button"
          onClick={handleReset}
          disabled={isLoading}
          className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {CONTENT.calculator.form.resetButton}
        </button>
      </div>
    </form>
  );
}