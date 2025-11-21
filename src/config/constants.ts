/**
 * All static text content and labels
 * This allows easy translation or content updates without touching components
 */

export const CONTENT = {
  site: {
    name: 'Atlas',
    tagline: 'Infrastructure Intelligence for Africa',
    description: 'Calculate accurate delivery time and cost estimates for humanitarian supply chain operations across Cameroon',
  },
  
  calculator: {
    title: 'NGO Supply Chain Calculator',
    subtitle: 'Get instant, data-driven logistics estimates for your operations',
    
    form: {
      originLabel: 'Origin City',
      originPlaceholder: 'Select origin city...',
      destinationLabel: 'Destination City',
      destinationPlaceholder: 'Select destination city...',
      cargoTypeLabel: 'Cargo Type',
      cargoTypePlaceholder: 'Select cargo type...',
      weightLabel: 'Weight (kg)',
      weightPlaceholder: 'Enter cargo weight...',
      seasonLabel: 'Season',
      seasonDry: 'Dry Season',
      seasonRainy: 'Rainy Season',
      urgentLabel: 'Urgent Delivery',
      urgentDescription: '(+50% cost premium)',
      submitButton: 'Calculate Estimate',
      resetButton: 'Reset Form',
    },
    
    results: {
      title: 'Delivery Estimate',
      timeTitle: 'Delivery Time Estimates',
      timeBest: 'Best Case',
      timeTypical: 'Typical',
      timeWorst: 'Worst Case',
      costTitle: 'Cost Breakdown',
      costFuel: 'Fuel Cost',
      costVehicle: 'Vehicle Cost',
      costDriver: 'Driver Cost',
      costOverhead: 'Overhead',
      costTotal: 'Total Estimate',
      recommendationsTitle: 'Recommendations',
      riskFactorsTitle: 'Risk Factors',
      exportButton: 'Export as PDF',
      newCalculationButton: 'New Calculation',
    },
    
    errors: {
      routeNotFound: 'Route not found between selected cities. Please try different locations or contact us for custom route analysis.',
      invalidWeight: 'Please enter a valid weight greater than 0 kg.',
      sameLocation: 'Origin and destination cannot be the same.',
      generalError: 'An error occurred. Please try again or contact support.',
    },
  },
  
  about: {
    title: 'About Atlas',
    mission: 'Our mission is to make African infrastructure more efficient through data-driven intelligence.',
    description: 'The NGO Supply Chain Calculator is the first tool in our suite of infrastructure intelligence platforms.',
  },
  
  footer: {
    contact: 'Contact',
    email: 'adamou.ben@atlas.systems',
    location: 'Yaoundé, Cameroon',
    copyright: '© 2025 Atlas. All rights reserved.',
  },
};

export const LABELS = {
  // Unit labels
  currency: 'FCFA',
  weight: 'kg',
  distance: 'km',
  time: 'hours',
  
  // Road conditions
  roadConditions: {
    paved: 'Paved Road',
    unpaved: 'Unpaved Road',
    mixed: 'Mixed Conditions',
  },
  
  // Security levels
  securityLevels: {
    low: 'Low Risk',
    medium: 'Moderate Risk',
    high: 'High Risk',
  },
};