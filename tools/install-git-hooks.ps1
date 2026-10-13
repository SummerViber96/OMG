$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$src = Join-Path $root 'tools\post-checkout'
$dst = Join-Path $root '.git\hooks\post-checkout'
Copy-Item -LiteralPath $src -Destination $dst -Force
Write-Host "Installed .git/hooks/post-checkout"
Write-Host "Doi nhanh an toan: powershell -File tools/switch-branch.ps1 <ten-nhanh>"
