/**
 * PDF export functionality
 * Generates professional PDF estimates for sharing with stakeholders
 */

import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CalculationResult } from './types';
import { getCityById } from '@/data/cities';
import { formatCurrency, formatTime } from './calculations';
import { formatDateTime } from './utils';
import { CONTENT, LABELS } from '@/config/constants';
import { siteConfig } from '@/config/siteConfig';

export interface PDFExportOptions {
  includeRecommendations?: boolean;
  includeRiskFactors?: boolean;
  organizationName?: string;
  referenceNumber?: string;
}

/**
 * Generate PDF from calculation result
 */
export function generatePDF(
  result: CalculationResult,
  options: PDFExportOptions = {}
): void {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  let yPosition = 20;

  // ==========================================
  // HEADER
  // ==========================================
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(CONTENT.site.name, 20, yPosition);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(CONTENT.site.tagline, 20, yPosition + 6);
  
  yPosition += 15;

  // Horizontal line
  doc.setDrawColor(200, 200, 200);
  doc.line(20, yPosition, pageWidth - 20, yPosition);
  yPosition += 10;

  // ==========================================
  // DOCUMENT INFO
  // ==========================================
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Supply Chain Delivery Estimate', 20, yPosition);
  yPosition += 10;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  // Generate date
  doc.text(`Generated: ${formatDateTime(result.calculatedAt)}`, 20, yPosition);
  yPosition += 5;
  
  // Organization name if provided
  if (options.organizationName) {
    doc.text(`Organization: ${options.organizationName}`, 20, yPosition);
    yPosition += 5;
  }
  
  // Reference number if provided
  if (options.referenceNumber) {
    doc.text(`Reference: ${options.referenceNumber}`, 20, yPosition);
    yPosition += 5;
  }
  
  yPosition += 5;

  // ==========================================
  // ROUTE INFORMATION
  // ==========================================
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Route Information', 20, yPosition);
  yPosition += 8;

  const originCity = getCityById(result.route.origin);
  const destCity = getCityById(result.route.destination);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  const routeInfo = [
    [`Origin:`, `${originCity?.name} (${originCity?.region})`],
    [`Destination:`, `${destCity?.name} (${destCity?.region})`],
    [`Distance:`, `${result.route.distance} ${LABELS.distance}`],
    [`Road Condition:`, `${LABELS.roadConditions[result.route.roadCondition]}`],
    [`Security Level:`, `${LABELS.securityLevels[result.route.securityLevel]}`],
    [`Checkpoints:`, `${result.route.checkpoints}`],
  ];

  routeInfo.forEach(([label, value]) => {
    doc.text(label, 20, yPosition);
    doc.text(value, 70, yPosition);
    yPosition += 6;
  });

  yPosition += 5;

  // ==========================================
  // CARGO INFORMATION
  // ==========================================
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Cargo Information', 20, yPosition);
  yPosition += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  doc.text('Type:', 20, yPosition);
  doc.text(result.cargo.name, 70, yPosition);
  yPosition += 6;
  
  doc.text('Vehicle:', 20, yPosition);
  doc.text(result.vehicle.name, 70, yPosition);
  yPosition += 10;

  // ==========================================
  // TIME ESTIMATES TABLE
  // ==========================================
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Delivery Time Estimates', 20, yPosition);
  yPosition += 5;

  autoTable(doc, {
    startY: yPosition,
    head: [['Scenario', 'Estimated Time']],
    body: [
      ['Best Case', formatTime(result.estimatedTime.best)],
      ['Typical', formatTime(result.estimatedTime.typical)],
      ['Worst Case', formatTime(result.estimatedTime.worst)],
    ],
    theme: 'grid',
    headStyles: { fillColor: [59, 130, 246] },  // Use theme primary color
    margin: { left: 20, right: 20 },
  });

  yPosition = (doc as any).lastAutoTable.finalY + 10;

  // ==========================================
  // COST BREAKDOWN TABLE
  // ==========================================
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Cost Breakdown', 20, yPosition);
  yPosition += 5;

  autoTable(doc, {
    startY: yPosition,
    head: [['Cost Item', 'Amount']],
    body: [
      ['Fuel', formatCurrency(result.estimatedCost.fuel)],
      ['Vehicle', formatCurrency(result.estimatedCost.vehicle)],
      ['Driver', formatCurrency(result.estimatedCost.driver)],
      ['Overhead', formatCurrency(result.estimatedCost.overhead)],
    ],
    foot: [['TOTAL ESTIMATE', formatCurrency(result.estimatedCost.total)]],
    theme: 'grid',
    headStyles: { fillColor: [59, 130, 246] },
    footStyles: { fillColor: [59, 130, 246], fontStyle: 'bold' },
    margin: { left: 20, right: 20 },
  });

  yPosition = (doc as any).lastAutoTable.finalY + 10;

  // ==========================================
  // RECOMMENDATIONS (if included)
  // ==========================================
  if (options.includeRecommendations !== false && result.recommendations.length > 0) {
    // Check if we need a new page
    if (yPosition > 240) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Recommendations', 20, yPosition);
    yPosition += 8;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    result.recommendations.forEach((rec, index) => {
      // Check if we need a new page
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }

      const lines = doc.splitTextToSize(`${index + 1}. ${rec}`, pageWidth - 45);
      doc.text(lines, 25, yPosition);
      yPosition += (lines.length * 5) + 3;
    });

    yPosition += 5;
  }

  // ==========================================
  // RISK FACTORS (if included)
  // ==========================================
  if (options.includeRiskFactors !== false && result.riskFactors.length > 0) {
    // Check if we need a new page
    if (yPosition > 240) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Risk Factors', 20, yPosition);
    yPosition += 8;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    result.riskFactors.forEach((risk, index) => {
      // Check if we need a new page
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }

      const lines = doc.splitTextToSize(`⚠ ${risk}`, pageWidth - 45);
      doc.text(lines, 25, yPosition);
      yPosition += (lines.length * 5) + 3;
    });
  }

  // ==========================================
  // FOOTER
  // ==========================================
  const pageCount = (doc as any).internal.getNumberOfPages();
  
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(128, 128, 128);
    
    // Footer text
    doc.text(
      `${CONTENT.site.name} - ${CONTENT.site.tagline}`,
      20,
      doc.internal.pageSize.height - 15
    );
    
    doc.text(
      siteConfig.author.email,
      20,
      doc.internal.pageSize.height - 10
    );
    
    // Page number
    doc.text(
      `Page ${i} of ${pageCount}`,
      pageWidth - 40,
      doc.internal.pageSize.height - 10
    );
  }

  // ==========================================
  // SAVE PDF
  // ==========================================
  const fileName = `atlas-estimate-${originCity?.name}-${destCity?.name}-${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
}