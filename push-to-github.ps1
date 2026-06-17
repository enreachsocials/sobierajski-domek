Set-Location "C:\Users\ewago\OneDrive\Pulpit\VERITY STUDIO ALL DOCUMENTS\Sobierajski Domek"

# Wyczysc stary .git jesli uszkodzony
if (Test-Path ".git") {
    Remove-Item ".git" -Recurse -Force
}

# Init
git init
git branch -M main

git config user.email "enreach.socials@gmail.com"
git config user.name "Wero"

git add .
git commit -m "Initial commit - sobie Rajski Domek website"

# Stworz repo na GitHub i wypchaj
gh repo create sobierajski-domek --private --source=. --remote=origin --push

Write-Host ""
Write-Host "Gotowe! Sprawdz: https://github.com/$(gh api user --jq .login)/sobierajski-domek"
Read-Host "Nacisnij Enter zeby zamknac"
