#!/bin/bash

# Install `nc`
sudo apt update && sudo apt install netcat -y

# # Install ffmpeg
sudo apt install ffmpeg -y

# # Install yt-dlp
python3 -m pip install -U "yt-dlp[default]"

# Do common setup tasks
source .openhands/setup.sh
