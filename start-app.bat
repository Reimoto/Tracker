@echo off
echo Starting WeedTracker Application...

:: Start the backend server
cd backend
start cmd /k "npm install && npm run dev"

:: Go back to root and start frontend
cd ..
start cmd /k "npm install && npm run dev"

:: Wait for servers to start (adjust time if needed)
timeout /t 10 /nobreak

:: Open the website (default Vite port is 5173)
start http://localhost:5173

echo WeedTracker is starting up! The website will open automatically in a few seconds.
