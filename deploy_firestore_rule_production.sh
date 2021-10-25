#
# Deploy firebase hosting script
# 
source ./.env.production
firebase use $VUE_APP_FIREBASE_PROJECT_ID && firebase deploy --only firestore:rules

