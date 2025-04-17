import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Calculates a percentage from a number and a total
 * @param value The value to calculate percentage for
 * @param total The total value that represents 100%
 * @param decimals The number of decimal places to round to (default: 2)
 * @returns The calculated percentage
 */
export function calculatePercentage(value: number | undefined, total: number | undefined, decimals: number = 2): number {
  if (!value) {
    return 0
  }

  if (!total) {
    return 0
  }

  if (total === 0) {
    return 0; // Avoid division by zero
  }

  const percentage = (value / total) * 100;
  return Number(percentage.toFixed(decimals));
}

/**
 * Formats a list of strings with proper comma and "and" formatting
 * @param strings Any number of strings to format
 * @returns A properly formatted string (e.g., "one, two, and three")
 */
export function formatList(...strings: string[]): string {
  // Filter out empty strings
  const filteredStrings = strings.filter(str => str.trim() !== '');

  // Handle special cases
  if (filteredStrings.length === 0) {
    return '';
  }

  if (filteredStrings.length === 1) {
    return filteredStrings[0];
  }

  if (filteredStrings.length === 2) {
    return `${filteredStrings[0]} and ${filteredStrings[1]}`;
  }

  // For 3 or more items, format with commas and "and"
  const lastItem = filteredStrings.pop();
  return `${filteredStrings.join(', ')}, and ${lastItem}`;
}