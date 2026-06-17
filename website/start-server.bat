@echo off
echo.
echo  =============================================
echo   sobie...Rajski Domek - Lokalny serwer
echo  =============================================
echo.
echo  Uruchamiam serwer na http://localhost:8080
echo  Nacisnij Ctrl+C aby zatrzymac.
echo.
cd /d "%~dp0"
start "" "http://localhost:8080"
python -m http.server 8080
pause
