# Expo Router Jest renderRouter possible bug

Run `npm run test` to see the test fail.

Go to `/utils/test-utils.tsx` and uncomment `//updateRouterState();` on line 58, and run the test again `npm run test` and it will pass. 