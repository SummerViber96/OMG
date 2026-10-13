param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$Branch
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Host "Dong Cocos Creator (neu dang mo)..."
Get-Process CocosCreator -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 1
if (Get-Process CocosCreator -ErrorAction SilentlyContinue) {
    Write-Error "Khong tat duoc CocosCreator. Tat bang Task Manager roi chay lai."
    exit 1
}

Write-Host "Checkout $Branch ..."
git checkout $Branch
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# Drop generated caches so the next Creator open reimports cleanly for this branch.
foreach ($dir in @('library', 'temp')) {
    $path = Join-Path $root $dir
    if (Test-Path -LiteralPath $path) {
        Write-Host "Xoa $dir (Creator se import lai)..."
        cmd /c "rmdir /s /q `"$path`""
    }
}

Write-Host ""
Write-Host "Xong. Mo lai project trong Cocos Dashboard."
Write-Host "Lan dau sau doi nhanh: doi Assets import xong roi moi build."
