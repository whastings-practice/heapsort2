if [ -z "$HEAPSORT_DEV" ]
then
  node --harmony index.js
else
  ./node_modules/nodemon/bin/nodemon.js --harmony index.js
fi
