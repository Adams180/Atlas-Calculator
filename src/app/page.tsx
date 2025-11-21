'use client';

import { useState } from 'react';

// ============================================
// TYPES
// ============================================
interface City {
  id: string;
  name: string;
  region: string;
}

interface CargoType {
  id: string;
  name: string;
  costMultiplier: number;
}

interface Route {
  origin: string;
  destination: string;
  distance: number;
  roadCondition: 'paved' | 'unpaved' | 'mixed';
  drySeasonTime: number;
  rainySeasonTime: number;
  securityLevel: 'low' | 'medium' | 'high';
  checkpoints: number;
}

interface CalculatorInput {
  origin: string;
  destination: string;
  cargoType: string;
  weight: number;
  isUrgent: boolean;
  season: 'dry' | 'rainy';
}

interface CalculationResult {
  estimatedTime: { best: number; typical: number; worst: number };
  estimatedCost: { fuel: number; vehicle: number; driver: number; overhead: number; total: number };
  route: Route;
  recommendations: string[];
  riskFactors: string[];
}

// ============================================
// DATA
// ============================================
const cities: City[] = [
  { id: 'douala', name: 'Douala', region: 'Littoral' },
  { id: 'yaounde', name: 'Yaoundé', region: 'Centre' },
  { id: 'bafoussam', name: 'Bafoussam', region: 'West' },
  { id: 'bamenda', name: 'Bamenda', region: 'Northwest' },
  { id: 'garoua', name: 'Garoua', region: 'North' },
  { id: 'maroua', name: 'Maroua', region: 'Far North' },
  { id: 'ngaoundere', name: 'Ngaoundéré', region: 'Adamawa' },
  { id: 'bertoua', name: 'Bertoua', region: 'East' },
  { id: 'buea', name: 'Buea', region: 'Southwest' },
  { id: 'kribi', name: 'Kribi', region: 'South' },
  { id: 'ebolowa', name: 'Ebolowa', region: 'South' },
  { id: 'kumba', name: 'Kumba', region: 'Southwest' },
  { id: 'limbe', name: 'Limbé', region: 'Southwest' },
  { id: 'nkongsamba', name: 'Nkongsamba', region: 'Littoral' },
];

const cargoTypes: CargoType[] = [
  { id: 'food-dry', name: 'Food Aid (Dry Goods)', costMultiplier: 1.0 },
  { id: 'medical', name: 'Medical Supplies', costMultiplier: 1.3 },
  { id: 'nfi', name: 'Non-Food Items (NFI)', costMultiplier: 1.0 },
  { id: 'equipment', name: 'Equipment & Tools', costMultiplier: 1.1 },
  { id: 'refrigerated', name: 'Refrigerated Goods', costMultiplier: 1.8 },
  { id: 'water-equipment', name: 'WASH Equipment', costMultiplier: 1.2 },
];

const routes: Route[] = [
  { origin: 'douala', destination: 'yaounde', distance: 250, roadCondition: 'paved', drySeasonTime: 4, rainySeasonTime: 5, securityLevel: 'low', checkpoints: 2 },
  { origin: 'douala', destination: 'buea', distance: 70, roadCondition: 'paved', drySeasonTime: 1.5, rainySeasonTime: 2, securityLevel: 'low', checkpoints: 1 },
  { origin: 'douala', destination: 'limbe', distance: 75, roadCondition: 'paved', drySeasonTime: 1.5, rainySeasonTime: 2, securityLevel: 'low', checkpoints: 1 },
  { origin: 'douala', destination: 'kribi', distance: 160, roadCondition: 'paved', drySeasonTime: 3, rainySeasonTime: 4, securityLevel: 'low', checkpoints: 2 },
  { origin: 'douala', destination: 'bafoussam', distance: 240, roadCondition: 'paved', drySeasonTime: 5, rainySeasonTime: 6, securityLevel: 'low', checkpoints: 3 },
  { origin: 'yaounde', destination: 'bafoussam', distance: 280, roadCondition: 'paved', drySeasonTime: 5, rainySeasonTime: 7, securityLevel: 'low', checkpoints: 3 },
  { origin: 'yaounde', destination: 'bertoua', distance: 350, roadCondition: 'mixed', drySeasonTime: 7, rainySeasonTime: 10, securityLevel: 'medium', checkpoints: 4 },
  { origin: 'yaounde', destination: 'ebolowa', distance: 170, roadCondition: 'paved', drySeasonTime: 3, rainySeasonTime: 4, securityLevel: 'low', checkpoints: 2 },
  { origin: 'yaounde', destination: 'ngaoundere', distance: 520, roadCondition: 'paved', drySeasonTime: 8, rainySeasonTime: 10, securityLevel: 'medium', checkpoints: 5 },
  { origin: 'ngaoundere', destination: 'garoua', distance: 280, roadCondition: 'paved', drySeasonTime: 5, rainySeasonTime: 6, securityLevel: 'medium', checkpoints: 3 },
  { origin: 'garoua', destination: 'maroua', distance: 220, roadCondition: 'paved', drySeasonTime: 4, rainySeasonTime: 5, securityLevel: 'high', checkpoints: 5 },
  { origin: 'bafoussam', destination: 'bamenda', distance: 75, roadCondition: 'paved', drySeasonTime: 2, rainySeasonTime: 3, securityLevel: 'high', checkpoints: 4 },
  { origin: 'douala', destination: 'kumba', distance: 130, roadCondition: 'mixed', drySeasonTime: 3, rainySeasonTime: 4.5, securityLevel: 'medium', checkpoints: 3 },
];

const costFactors = {
  fuelPricePerLiter: 650,
  driverDailyRate: 15000,
  overheadPercentage: 0.20,
  urgencyMultiplier: 1.5,
};

// ============================================
// FUNCTIONS
// ============================================
function findRoute(origin: string, destination: string): Route | null {
  let route = routes.find(r => r.origin === origin && r.destination === destination);
  if (!route) route = routes.find(r => r.origin === destination && r.destination === origin);
  return route || null;
}

function selectVehicle(weight: number) {
  if (weight <= 1500) return { name: 'Pickup Truck', costPerKm: 300, fuelConsumption: 12 };
  if (weight <= 3000) return { name: 'Light Truck (3t)', costPerKm: 400, fuelConsumption: 15 };
  if (weight <= 10000) return { name: 'Medium Truck (10t)', costPerKm: 600, fuelConsumption: 25 };
  return { name: 'Heavy Truck (20t)', costPerKm: 800, fuelConsumption: 35 };
}

function calculate(input: CalculatorInput): CalculationResult | null {
  const route = findRoute(input.origin, input.destination);
  if (!route) return null;

  const cargo = cargoTypes.find(c => c.id === input.cargoType);
  const mult = cargo?.costMultiplier || 1.0;
  const vehicle = selectVehicle(input.weight);

  const baseTime = input.season === 'dry' ? route.drySeasonTime : route.rainySeasonTime;
  
  const fuel = (route.distance / 100) * vehicle.fuelConsumption * costFactors.fuelPricePerLiter;
  const vehicleCost = route.distance * vehicle.costPerKm;
  const driver = Math.ceil(baseTime / 8) * costFactors.driverDailyRate;
  const subtotal = (fuel + vehicleCost + driver) * mult;
  const overhead = subtotal * costFactors.overheadPercentage;
  const total = input.isUrgent ? subtotal * costFactors.urgencyMultiplier + overhead : subtotal + overhead;

  const recommendations: string[] = [];
  const riskFactors: string[] = [];

  if (route.roadCondition !== 'paved') recommendations.push('Consider 4x4 vehicle for unpaved sections');
  if (input.season === 'rainy') recommendations.push('Check road conditions before departure');
  if (route.checkpoints > 3) recommendations.push('Prepare all documentation for checkpoints');
  if (route.securityLevel === 'high') {
    riskFactors.push('High security risk - consider armed escort');
    recommendations.push('Travel during daylight hours only');
  }
  if (route.securityLevel === 'medium') riskFactors.push('Moderate security concerns');
  if (input.season === 'rainy') riskFactors.push('Potential road flooding or delays');

  return {
    estimatedTime: {
      best: Math.round(baseTime * 0.8 * 10) / 10,
      typical: baseTime,
      worst: Math.round(baseTime * 1.3 * 10) / 10,
    },
    estimatedCost: {
      fuel: Math.round(fuel),
      vehicle: Math.round(vehicleCost),
      driver: Math.round(driver),
      overhead: Math.round(overhead),
      total: Math.round(total),
    },
    route,
    recommendations,
    riskFactors,
  };
}

function formatMoney(n: number): string {
  return n.toLocaleString() + ' FCFA';
}

function formatTime(h: number): string {
  return h < 24 ? `${h}h` : `${Math.floor(h/24)}d ${Math.round(h%24)}h`;
}

// ============================================
// MAIN COMPONENT
// ============================================
export default function Home() {
  const [form, setForm] = useState<CalculatorInput>({
    origin: '', destination: '', cargoType: '', weight: 0, isUrgent: false, season: 'dry'
  });
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    await new Promise(r => setTimeout(r, 500));

    if (form.origin === form.destination) {
      setError('Origin and destination cannot be the same.');
      setLoading(false);
      return;
    }

    const calc = calculate(form);
    if (calc) setResult(calc);
    else setError('Route not found. Try different cities.');
    setLoading(false);
  };

  const reset = () => {
    setForm({ origin: '', destination: '', cargoType: '', weight: 0, isUrgent: false, season: 'dry' });
    setResult(null);
    setError('');
  };

  const originCity = cities.find(c => c.id === result?.route.origin);
  const destCity = cities.find(c => c.id === result?.route.destination);

  // ============================================
  // STYLES (Inline to avoid Tailwind issues)
  // ============================================
  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    header: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #e5e7eb',
      padding: '16px 24px',
      position: 'sticky' as const,
      top: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none',
    },
    logoIcon: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '20px',
    },
    logoText: {
      fontSize: '20px',
      fontWeight: 700,
      color: '#111827',
    },
    main: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: 800,
      textAlign: 'center' as const,
      marginBottom: '16px',
      color: '#111827',
      lineHeight: 1.1,
    },
    heroGradient: {
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    heroSub: {
      fontSize: '18px',
      color: '#6b7280',
      textAlign: 'center' as const,
      marginBottom: '32px',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: '#eff6ff',
      color: '#1d4ed8',
      padding: '8px 16px',
      borderRadius: '50px',
      fontSize: '14px',
      fontWeight: 500,
      marginBottom: '24px',
    },
    card: {
      background: 'white',
      borderRadius: '24px',
      padding: '32px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
      border: '1px solid #f3f4f6',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 600,
      color: '#111827',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    sectionIcon: {
      fontSize: '24px',
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: 500,
      color: '#374151',
      marginBottom: '8px',
    },
    select: {
      width: '100%',
      padding: '14px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '16px',
      background: 'white',
      cursor: 'pointer',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    input: {
      width: '100%',
      padding: '14px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '16px',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    grid2: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
      marginBottom: '24px',
    },
    seasonCard: (active: boolean) => ({
      padding: '20px',
      border: `2px solid ${active ? '#3b82f6' : '#e5e7eb'}`,
      borderRadius: '16px',
      cursor: 'pointer',
      background: active ? '#eff6ff' : 'white',
      textAlign: 'center' as const,
      transition: 'all 0.2s',
    }),
    seasonEmoji: {
      fontSize: '32px',
      marginBottom: '8px',
    },
    seasonText: {
      fontWeight: 600,
      color: '#374151',
    },
    checkbox: {
      background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
      padding: '20px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '24px',
    },
    btnPrimary: {
      flex: 1,
      padding: '16px 24px',
      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    btnSecondary: {
      padding: '16px 24px',
      background: 'white',
      color: '#374151',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: 600,
      cursor: 'pointer',
    },
    error: {
      background: '#fef2f2',
      border: '1px solid #fecaca',
      color: '#dc2626',
      padding: '16px',
      borderRadius: '12px',
      marginBottom: '16px',
    },
    resultHeader: {
      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      color: 'white',
      padding: '24px',
      borderRadius: '20px',
      marginBottom: '20px',
    },
    resultTitle: {
      fontSize: '28px',
      fontWeight: 700,
      marginBottom: '8px',
    },
    timeGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '12px',
      marginBottom: '20px',
    },
    timeCard: (color: string) => ({
      background: color,
      padding: '20px',
      borderRadius: '16px',
      textAlign: 'center' as const,
    }),
    costRow: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '16px',
      background: '#f9fafb',
      borderRadius: '12px',
      marginBottom: '8px',
    },
    totalRow: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      background: 'linear-gradient(135deg, #eff6ff, #f3e8ff)',
      borderRadius: '16px',
      marginTop: '16px',
    },
    alertSuccess: {
      background: '#f0fdf4',
      border: '1px solid #bbf7d0',
      padding: '20px',
      borderRadius: '16px',
      marginBottom: '16px',
    },
    alertWarning: {
      background: '#fffbeb',
      border: '1px solid #fde68a',
      padding: '20px',
      borderRadius: '16px',
      marginBottom: '16px',
    },
    footer: {
      background: '#111827',
      color: '#9ca3af',
      padding: '48px 24px',
      marginTop: '80px',
      textAlign: 'center' as const,
    },
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <a href="/" style={styles.logo}>
          <div style={styles.logoIcon}>A</div>
          <span style={styles.logoText}>Atlas</span>
        </a>
        <nav style={{ display: 'flex', gap: '24px' }}>
          <a href="/" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>Calculator</a>
          <a href="/about" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>About</a>
        </nav>
      </header>

      {/* Main */}
      <main style={styles.main}>
        {!result ? (
          <>
            {/* Hero */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div style={styles.badge}>
                <span style={{ width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%' }}></span>
                Free Tool for Humanitarian Organizations
              </div>
              <h1 style={styles.heroTitle}>
                NGO Supply Chain<br />
                <span style={styles.heroGradient}>Calculator</span>
              </h1>
              <p style={styles.heroSub}>
                Get instant, data-driven delivery time and cost estimates for humanitarian operations across Cameroon.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a' }}>✓ Real data</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a' }}>✓ Instant estimates</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a' }}>✓ Always free</span>
              </div>
            </div>

            {/* Error */}
            {error && <div style={styles.error}>⚠️ {error}</div>}

            {/* Form */}
            <div style={styles.card}>
              <form onSubmit={handleSubmit}>
                {/* Route */}
                <div style={styles.sectionTitle}><span style={styles.sectionIcon}>📍</span> Route Information</div>
                <div style={styles.grid2}>
                  <div>
                    <label style={styles.label}>Origin City *</label>
                    <select
                      style={styles.select}
                      value={form.origin}
                      onChange={e => setForm({...form, origin: e.target.value})}
                      required
                    >
                      <option value="">Select origin...</option>
                      {cities.map(c => <option key={c.id} value={c.id}>{c.name} ({c.region})</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={styles.label}>Destination City *</label>
                    <select
                      style={styles.select}
                      value={form.destination}
                      onChange={e => setForm({...form, destination: e.target.value})}
                      required
                    >
                      <option value="">Select destination...</option>
                      {cities.map(c => <option key={c.id} value={c.id}>{c.name} ({c.region})</option>)}
                    </select>
                  </div>
                </div>

                {/* Cargo */}
                <div style={styles.sectionTitle}><span style={styles.sectionIcon}>📦</span> Cargo Details</div>
                <div style={styles.grid2}>
                  <div>
                    <label style={styles.label}>Cargo Type *</label>
                    <select
                      style={styles.select}
                      value={form.cargoType}
                      onChange={e => setForm({...form, cargoType: e.target.value})}
                      required
                    >
                      <option value="">Select cargo type...</option>
                      {cargoTypes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={styles.label}>Weight (kg) *</label>
                    <input
                      type="number"
                      style={styles.input}
                      value={form.weight || ''}
                      onChange={e => setForm({...form, weight: Number(e.target.value)})}
                      placeholder="Enter weight..."
                      min="1"
                      required
                    />
                  </div>
                </div>

                {/* Options */}
                <div style={styles.sectionTitle}><span style={styles.sectionIcon}>⚙️</span> Additional Options</div>
                
                <label style={styles.label}>Season</label>
                <div style={styles.grid2}>
                  <div style={styles.seasonCard(form.season === 'dry')} onClick={() => setForm({...form, season: 'dry'})}>
                    <div style={styles.seasonEmoji}>☀️</div>
                    <div style={styles.seasonText}>Dry Season</div>
                  </div>
                  <div style={styles.seasonCard(form.season === 'rainy')} onClick={() => setForm({...form, season: 'rainy'})}>
                    <div style={styles.seasonEmoji}>🌧️</div>
                    <div style={styles.seasonText}>Rainy Season</div>
                  </div>
                </div>

                <div style={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={form.isUrgent}
                    onChange={e => setForm({...form, isUrgent: e.target.checked})}
                    style={{ width: '20px', height: '20px', marginTop: '2px' }}
                  />
                  <div>
                    <strong>Urgent Delivery</strong>
                    <div style={{ color: '#92400e', fontSize: '14px' }}>Priority handling with +50% cost premium</div>
                  </div>
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button type="submit" style={styles.btnPrimary} disabled={loading}>
                    {loading ? '⏳ Calculating...' : '🧮 Calculate Estimate'}
                  </button>
                  <button type="button" style={styles.btnSecondary} onClick={reset}>Reset</button>
                </div>
              </form>
            </div>

            {/* How It Works */}
            <div style={{ ...styles.card, marginTop: '24px' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '32px', fontSize: '24px', fontWeight: 700 }}>How It Works</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', textAlign: 'center' }}>
                <div>
                  <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', borderRadius: '16px', color: 'white', fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>1</div>
                  <h3 style={{ fontWeight: 600, marginBottom: '4px' }}>Enter Details</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px' }}>Select origin, destination, cargo type</p>
                </div>
                <div>
                  <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', borderRadius: '16px', color: 'white', fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>2</div>
                  <h3 style={{ fontWeight: 600, marginBottom: '4px' }}>Get Estimates</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px' }}>Receive time and cost calculations</p>
                </div>
                <div>
                  <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', borderRadius: '16px', color: 'white', fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>3</div>
                  <h3 style={{ fontWeight: 600, marginBottom: '4px' }}>Plan Accordingly</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px' }}>Use recommendations to optimize</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Results */
          <>
            {/* Header */}
            <div style={styles.resultHeader}>
              <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '8px' }}>✅ Calculation Complete</div>
              <div style={styles.resultTitle}>{originCity?.name} → {destCity?.name}</div>
              <div style={{ opacity: 0.9 }}>
                {result.route.distance} km • {result.route.roadCondition} road • {result.route.checkpoints} checkpoints
              </div>
            </div>

            {/* Time Estimates */}
            <div style={styles.card}>
              <div style={styles.sectionTitle}><span style={styles.sectionIcon}>⏱️</span> Delivery Time Estimates</div>
              <div style={styles.timeGrid}>
                <div style={styles.timeCard('#f0fdf4')}>
                  <div style={{ fontSize: '14px', color: '#16a34a', marginBottom: '4px' }}>Best Case</div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: '#15803d' }}>{formatTime(result.estimatedTime.best)}</div>
                </div>
                <div style={styles.timeCard('#eff6ff')}>
                  <div style={{ fontSize: '14px', color: '#2563eb', marginBottom: '4px' }}>Typical</div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: '#1d4ed8' }}>{formatTime(result.estimatedTime.typical)}</div>
                </div>
                <div style={styles.timeCard('#fffbeb')}>
                  <div style={{ fontSize: '14px', color: '#d97706', marginBottom: '4px' }}>Worst Case</div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: '#b45309' }}>{formatTime(result.estimatedTime.worst)}</div>
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div style={{ ...styles.card, marginTop: '16px' }}>
              <div style={styles.sectionTitle}><span style={styles.sectionIcon}>💰</span> Cost Breakdown</div>
              <div style={styles.costRow}>
                <span>⛽ Fuel Cost</span>
                <strong>{formatMoney(result.estimatedCost.fuel)}</strong>
              </div>
              <div style={styles.costRow}>
                <span>🚚 Vehicle Cost</span>
                <strong>{formatMoney(result.estimatedCost.vehicle)}</strong>
              </div>
              <div style={styles.costRow}>
                <span>👤 Driver Cost</span>
                <strong>{formatMoney(result.estimatedCost.driver)}</strong>
              </div>
              <div style={styles.costRow}>
                <span>📋 Overhead</span>
                <strong>{formatMoney(result.estimatedCost.overhead)}</strong>
              </div>
              <div style={styles.totalRow}>
                <span style={{ fontSize: '18px', fontWeight: 700 }}>Total Estimate</span>
                <span style={{ fontSize: '28px', fontWeight: 700, color: '#1d4ed8' }}>{formatMoney(result.estimatedCost.total)}</span>
              </div>
            </div>

            {/* Recommendations */}
            {result.recommendations.length > 0 && (
              <div style={{ ...styles.alertSuccess, marginTop: '16px' }}>
                <div style={{ fontWeight: 700, color: '#15803d', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ✅ Recommendations
                </div>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#166534' }}>
                  {result.recommendations.map((r, i) => <li key={i} style={{ marginBottom: '6px' }}>{r}</li>)}
                </ul>
              </div>
            )}

            {/* Risk Factors */}
            {result.riskFactors.length > 0 && (
              <div style={{ ...styles.alertWarning, marginTop: '16px' }}>
                <div style={{ fontWeight: 700, color: '#b45309', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ⚠️ Risk Factors
                </div>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#92400e' }}>
                  {result.riskFactors.map((r, i) => <li key={i} style={{ marginBottom: '6px' }}>{r}</li>)}
                </ul>
              </div>
            )}

            {/* New Calculation Button */}
            <button style={{ ...styles.btnPrimary, width: '100%', marginTop: '24px' }} onClick={reset}>
              ➕ New Calculation
            </button>
          </>
        )}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '24px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>Atlas</div>
          <p style={{ marginBottom: '24px' }}>Infrastructure Intelligence for Africa</p>
          <p style={{ fontSize: '14px' }}>
            adamou.ben@atlas.systems • Yaoundé, Cameroon
          </p>
          <p style={{ fontSize: '12px', marginTop: '24px', color: '#6b7280' }}>
            © {new Date().getFullYear()} Atlas. Built with purpose in Cameroon.
          </p>
        </div>
      </footer>
    </div>
  );
}