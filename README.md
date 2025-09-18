# MTB Telemetry — Starter Project

This archive contains a minimal but functional starter project for the MTB Telemetry Desktop App.

## What's included
- Electron main process (electron-main.js)
- React renderer skeleton (renderer/src)
- Flask backend for processing (server/backend.py)
- Utility processing functions (utils/processing.py)
- Minimal package.json and README

## Quick setup (Windows / macOS / Linux)
1. Install Node.js (LTS), Python 3.10+, and ffmpeg available in PATH.
2. Unzip and open a terminal in the project folder.
3. Install Node deps:
   - `npm install` (root)  || if problems, run `npm install` in `renderer` separately.
4. Install Python deps:
   - `pip install flask numpy scipy`
5. Start the app (development):
   - `npm run py` (starts Flask on port 5001)
   - in another terminal: `cd renderer && npm start` (starts React dev server on :3000)
   - in another terminal: `electron .`

## Notes
- This is a starter scaffold designed for non-programmers to hand to a developer or to follow step-by-step.
- The `renderer` contains example React components for import, calibration and sync.

## Next steps I can do for you
- Build a packaged executable for Windows/macOS/Linux and provide download.
- Create a guided installer with automated dependency checks.
- Expand the React UI into polished production-ready screens.
