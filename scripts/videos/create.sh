#!/bin/bash

API="http://localhost:4741"
URL_PATH="/videos"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "video": {
      "video": {
        "id": "'"${ID}"'",
        "uuid": "'"${UUID}"'",
        "url": "'"${URL}"'",
        "title": "'"${TITLE}"'",
        "author": "'"${AUTHOR}"'",
        "views": "'"${VIEWS}"'",
        "uploadAt": "'"${UPLOADAT}"'",
        "converted": "'"${TRUE}"'"
    }
  }'

echo
