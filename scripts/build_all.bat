@echo off
echo Starte lokalen Build...

REM Prüfen, ob Node installiert ist
where node >nul 2>&1 || (echo Node.js nicht gefunden & exit /b 1)

REM Root-Abhängigkeiten installieren
npm ci

REM Renderer bauen
cd renderer
npm ci
npm run build
cd ..

REM Electron App für aktuelle Plattform bauen
npx electron-builder --publish never

echo Fertig! Artefakte liegen im dist\ Ordner
pause
