@echo off
chcp 65001 >nul
echo.
echo ======================================
echo   sobie...Rajski Domek - Push to GitHub
echo ======================================
echo.

cd /d "C:\Users\ewago\OneDrive\Pulpit\VERITY STUDIO ALL DOCUMENTS\Sobierajski Domek"

REM Init git if not already
if not exist ".git" (
    git init
    git branch -m main
    echo [OK] Zainicjowano repozytorium git
) else (
    echo [OK] Repozytorium git juz istnieje
)

REM Configure git user if not set
git config user.email "enreach.socials@gmail.com"
git config user.name "Wero"

REM Add all files
git add .
echo [OK] Dodano wszystkie pliki

REM Commit
git commit -m "Initial commit - sobie...Rajski Domek website"
echo [OK] Commit gotowy

echo.
echo ======================================
echo  Podaj URL repozytorium GitHub:
echo  (np. https://github.com/TWOJ_LOGIN/sobierajski-domek.git)
echo ======================================
set /p REPO_URL="URL: "

git remote remove origin 2>nul
git remote add origin %REPO_URL%
git push -u origin main

echo.
if %errorlevel% == 0 (
    echo [OK] Wypchnięto na GitHub!
) else (
    echo [BLAD] Cos poszlo nie tak. Sprawdz URL i sprobuj ponownie.
)
echo.
pause
