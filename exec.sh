#!/bin/bash

max_retries=3
retry_count=0
echo "いくぞー"

while [ $retry_count -lt $max_retries ]; do
  echo "$((retry_count + 1)) !..."

  command="ts-node /home/latte02/test/hello.ts $retry_count"
  $command
  exit_code=$?

  if [ $exit_code -eq 0 ]; then
    echo "Success!"
    break
  else
    retry_count=$((retry_count + 1))
    echo "Retry
    $retry_count/$max_retries..."
  fi
done

if [ $retry_count -eq $max_retries ]; then
  echo "Failed after $max_retries attempts."
fi
