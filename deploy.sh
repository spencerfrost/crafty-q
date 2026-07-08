#!/bin/bash
set -e

PROJECT_ROOT=$(pwd)
TARGET_DIR="/var/www/crafty-q"
PM2_APP_NAME="crafty-q"

echo "🚀 Starting deployment for Crafty Q..."

echo "Checking git status..."
git checkout main
git pull origin main

echo "📦 Installing dependencies..."
npm ci

echo "🏗️ Building production bundle..."
npm run build

echo "🚚 Syncing build to $TARGET_DIR..."
sudo mkdir -p "$TARGET_DIR"
sudo rsync -av --delete \
  --exclude='node_modules' \
  --exclude='.git' \
  "$PROJECT_ROOT/" "$TARGET_DIR/"

echo "📦 Installing production dependencies in $TARGET_DIR..."
cd "$TARGET_DIR"
sudo npm ci --omit=dev

echo "🔄 Reloading PM2 application: $PM2_APP_NAME"
pm2 reload ecosystem.config.js --only "$PM2_APP_NAME" || pm2 start ecosystem.config.js --only "$PM2_APP_NAME"

echo "✅ Crafty Q deployment complete! Live at https://roz.mrspinn.ca"
