/**
 * Main calculator page
 */

'use client';

import { useState } from 'react';
import CalculatorForm from '@/components/CalculatorForm';
import ResultsDisplay from '@/components/ResultsDisplay';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalculatorInput, CalculationResult } from '@/lib/types';
import { calculateDelivery } from '@/lib/calculations';
import { generatePDF } from '@/lib/pdfExport';
import { CONTENT } from '@/config/constants';

export default function Home() {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string>('');
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = async (input: CalculatorInput) => {
    setIsCalculating(true);
    setError('');
    
    // Simulate brief calculation delay for UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const calculation = calculateDelivery(input);
    
    if (calculation) {
      setResult(calculation);
      setError('');
      // Scroll to results
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setError(CONTENT.calculator.errors.routeNotFound);
      setResult(null);
    }
    
    setIsCalculating(false);
  };

  const handleExportPDF = () => {
    if (result) {
      generatePDF(result, {
        includeRecommendations: true,
        includeRiskFactors: true,
      });
    }
  };

  const handleNewCalculation = () => {
    setResult(null);
    setError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          {!result && (
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {CONTENT.calculator.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {CONTENT.calculator.subtitle}
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg">
              <p className="font-medium">⚠️ {error}</p>
            </div>
          )}

          {/* Main Content */}
          {result ? (
            <ResultsDisplay
              result={result}
              onExportPDF={handleExportPDF}
              onNewCalculation={handleNewCalculation}
            />
          ) : (
            <CalculatorForm 
              onCalculate={handleCalculate}
              isLoading={isCalculating}
            />
          )}

          {/* Info Section */}
          {!result && (
            <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Enter Details</h3>
                  <p className="text-gray-600 text-sm">
                    Select origin, destination, cargo type, and weight
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Get Instant Estimates</h3>
                  <p className="text-gray-600 text-sm">
                    Receive data-driven time and cost calculations
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Plan Accordingly</h3>
                  <p className="text-gray-600 text-sm">
                    Use recommendations and export PDF for proposals
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}