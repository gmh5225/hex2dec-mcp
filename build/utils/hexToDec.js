/**
 * Convert a hexadecimal string to a decimal number
 * @param hex Hexadecimal string (with or without 0x prefix)
 * @returns Converted decimal number
 */
export function hexToDec(hex) {
    // Remove 0x prefix if it exists
    const cleanHex = hex.toLowerCase().startsWith('0x') ? hex.slice(2) : hex;
    // Validate input is a valid hexadecimal string
    if (!/^[0-9A-Fa-f]+$/.test(cleanHex)) {
        throw new Error('Invalid hexadecimal string');
    }
    // Use parseInt for conversion with base 16
    return parseInt(cleanHex, 16);
}
