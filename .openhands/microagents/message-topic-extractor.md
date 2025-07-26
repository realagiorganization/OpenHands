---
name: message-topic-extractor
type: knowledge
version: 1.0.0
agent: CodeActAgent
triggers:
- message topic extraction
- extract messages by topic
- message binning
---

# Message Topic Extractor Microagent

This microagent scans files in the repository, identifies messages, determines their topics, and organizes messages into bins by topic.

## Instructions

1. **Scan Files for Messages**
   - Recursively scan all non-hidden files in the repository, excluding files and directories listed in `.gitignore`.
   - Identify and extract all messages. A message is any text block that appears to be a log, comment, user message, or communication (e.g., lines starting with `//`, `#`, `"""`, or containing phrases like "TODO", "NOTE", "Message:", etc.).

2. **Identify Topics**
   - Analyze the extracted messages to determine a list of topics. Topics are keywords or short phrases that summarize the main subject of each message (e.g., "error handling", "authentication", "UI feedback", "performance", etc.).
   - Create a file `MESSAGE_TOPICS/topics.txt` at the repository root containing the list of discovered topics, one per line.

3. **Bin Messages by Topic**
   - For each topic, create a file in `MESSAGE_BINS/` named `{topic}.txt` (sanitize topic names for filenames).
   - Write all messages related to that topic into the corresponding file, one message per line or block.
   - If a message fits multiple topics, include it in each relevant topic file.

4. **Output Structure**
   - `MESSAGE_TOPICS/topics.txt`: List of all discovered topics.
   - `MESSAGE_BINS/{topic}.txt`: All messages for each topic.

5. **Error Handling**
   - Log any errors encountered during scanning or extraction to `MESSAGE_BINS/message_extractor_errors.txt`.

## Example Output

**MESSAGE_TOPICS/topics.txt**
```
error handling
authentication
UI feedback
performance
```

**MESSAGE_BINS/error handling.txt**
```
# TODO: Add better error handling for file uploads
Message: Error occurred during login process
...
```

**MESSAGE_BINS/authentication.txt**
```
# NOTE: Authentication token expires after 1 hour
Message: User failed to authenticate
...
```

---

## Notes

- Do not include messages from hidden or ignored files/directories.
- If a message’s topic cannot be determined, place it in `MESSAGE_BINS/uncategorized.txt`.
- Use existing microagents (such as file-lister) to assist in file discovery and structure analysis if needed.
- Ensure all output directories exist before writing files.
