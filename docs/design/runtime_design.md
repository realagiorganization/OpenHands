# Runtime Building Procedure Design

## PyInstaller Approach

### Overview

The PyInstaller approach simplifies the runtime building procedure by:

1. Using PyInstaller to bundle the action_execution_server and all its dependencies into a standalone binary
2. Packaging Playwright's Chromium browser in a portable way
3. Copying only the binary and browser components to the target runtime image
4. Eliminating the need to install Python and other dependencies in the target image

### Benefits

1. **Smaller Image Size**: Only the binary and browser components are needed, not all Python dependencies
2. **Faster Builds**: No need to install Python and dependencies in the target image
3. **Better Compatibility**: The binary should work on any Linux distribution with compatible glibc
4. **Simplified Maintenance**: Easier to update the binary independently of the base image

### Implementation

The implementation consists of three main components:

1. **PyInstaller Binary Builder**: Uses PyInstaller to bundle the action_execution_server and its dependencies
2. **Browser Packager**: Extracts and packages the Playwright browser for use with the binary
3. **Docker Image Builder**: Creates a minimal Docker image with the binary and browser components

### Usage

To build a runtime image using the PyInstaller approach:

```bash
python runtime_build_pyinstaller.py --base-image ubuntu:22.04
```

This will:
1. Build the PyInstaller binary
2. Package the Playwright browser
3. Create a Docker image with the binary and browser components