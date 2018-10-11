#!/bin/bash

API="http://localhost:4741"
URL_PATH="/videos"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
--data '{
  "video": {
      "url": "'"${URL}"'",
      "title": "'"${TITLE}"'",
      "author": "'"${AUTHOR}"'",
      "views": "'"${VIEWS}"'",
      "uploadAt": "'"${UPLOADAT}"'",
      "converted": "'"${TRUE}"'"
  }
  }'

echo

# "uuid": "'"${UUID}"'",
