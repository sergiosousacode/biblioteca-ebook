#!/usr/bin/env bash

set -e

echo "Iniciando validação do projeto..."

npm run build

npm test -- --watch=false

echo "Validação concluída."