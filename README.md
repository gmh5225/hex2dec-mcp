# Hex2Dec MCP Server

A simple MCP server that provides conversion between hexadecimal and decimal numbers. Mainly solving the problem of LLM hallucinations.

## Features

- `hex_to_dec`: Convert hexadecimal string to decimal number
- `dec_to_hex`: Convert decimal number to hexadecimal string

## Build
```bash
npm install && npm run build    # Build only
```

## Available Analysis Tools
- Hexadecimal to Decimal
- Decimal to Hexadecimal

## Configuration
Add the following configuration:
```json
{
  "mcpServers": {
    "hex2dec": {
      "command": "node",
      "args": [
        "/path/hex2dec-mcp/build/index.js"
      ]
    }
  }
}
```

## References

For more information about MCP servers, refer to the [Model Context Protocol documentation](https://modelcontextprotocol.io). 