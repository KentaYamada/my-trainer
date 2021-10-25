#
# Deploy firebase hosting script
# 
source ./.env.production
npm run build && firebase use $VUE_APP_FIREBASE_PROJECT_ID && firebase deploy --only hosting

