#!/bin/bash

API="http://localhost:4741"
URL_PATH="/videos"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --header "Authorization: Bearer ${TOKEN}" \
  --request DELETE \

echo
