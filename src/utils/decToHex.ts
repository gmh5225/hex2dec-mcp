/**
 * Convert a decimal number to a hexadecimal string
 * @param dec Decimal number
 * @returns Converted hexadecimal string
 */
export function decToHex(dec: number): string {
  // Validate input is a valid number
  if (isNaN(dec) || !Number.isInteger(dec)) {
    throw new Error('Input must be an integer');
  }
  
  // Use toString method to convert to hexadecimal and convert to uppercase
  return dec.toString(16).toUpperCase();
} 