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
    },
    {
      "name": "mcp-youtube",
      "command": "npx",
      "args": [
        "-y",
        "@anaisbetts/mcp-youtube"
      ],
      "env": {}
    },
    {
      "name": "quran-api",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "--init",
        "-e",
        "VERBOSE_MODE=true",
        "quran-mcp-server"
      ],
    }
  ],
  "shttp_servers": []
}
```


### __THOSE SERVERS ARE BROKEN:__

```json
    [
      {
            "name": "youtube-transcript",
            "command": "npx",
            "args": [
                "-y",
                "@kimtaeyoon83/mcp-server-youtube-transcript"
            ],
            "env": {}
        },
    ]
```
