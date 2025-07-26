---
name: file-lister
type: knowledge
version: 1.0.0
agent: CodeActAgent
triggers:
- file list
- manifest
- repository files
---

# Repository File Lister

This microagent lists all files in the repository, creates a manifest in the MANIFEST directory, and a summary in the SUMMARIES directory.

## Instructions

1. Recursively list all non-hidden files and directories in the repository, excluding those in .gitignore and hidden folders.
2. Create the MANIFEST directory at the repository root if it does not exist.
3. Write the list of file paths to MANIFEST/repository_manifest.txt, one per line.
4. Create the SUMMARIES directory at the repository root if it does not exist.
5. Write a summary of the repository structure and file type breakdown to SUMMARIES/repository_summary.txt.
6. Log any errors to MANIFEST/repository_file_lister_errors.txt.
