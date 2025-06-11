### REMOVE CREDENTIALS BEFORE COMMITING

```json
{
  "sse_servers": [],
  "stdio_servers": [
    {
      "name": "everything",
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-everything"
      ],
      "env": {}
    },
    {
      "name": "mcp-server-docker",
      "command": "uvx",
      "args": [
        "mcp-server-docker"
      ],
      "env": {}
    }
  ],
  "shttp_servers": []
}
```
