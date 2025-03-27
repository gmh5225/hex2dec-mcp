#!/usr/bin/env node
/**
 * Hex2Dec MCP Server
 *
 * This file implements a Model Context Protocol (MCP) server that provides conversion between
 * hexadecimal and decimal numbers. Each tool accepts input and returns the converted result.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { hexToDec } from "./utils/hexToDec.js";
import { decToHex } from "./utils/decToHex.js";
// Initialize MCP server with name and version
const server = new McpServer({
    name: "hex2dec",
    version: "1.0.0",
    description: "Hexadecimal and Decimal conversion tools"
});
/**
 * Hexadecimal to Decimal operation
 * Converts a hexadecimal string to a decimal number
 */
server.tool("hex_to_dec", "Convert hexadecimal string to decimal number", {
    hex: z.string().describe("Hexadecimal string to convert")
}, async ({ hex }) => {
    try {
        const result = hexToDec(hex);
        return {
            content: [{ type: "text", text: `${result}` }]
        };
    }
    catch (error) {
        return {
            content: [{ type: "text", text: `Error: ${error.message}` }]
        };
    }
});
/**
 * Decimal to Hexadecimal operation
 * Converts a decimal number to a hexadecimal string
 */
server.tool("dec_to_hex", "Convert decimal number to hexadecimal string", {
    dec: z.number().describe("Decimal number to convert")
}, async ({ dec }) => {
    try {
        const result = decToHex(dec);
        return {
            content: [{ type: "text", text: `${result}` }]
        };
    }
    catch (error) {
        return {
            content: [{ type: "text", text: `Error: ${error.message}` }]
        };
    }
});
// Initialize server transport and connect
const transport = new StdioServerTransport();
await server.connect(transport);
