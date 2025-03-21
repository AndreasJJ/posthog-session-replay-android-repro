module.exports = {
  "expo": {
    "name": "posthog-android-repro",
    "slug": "posthog-android-repro",
    "version": "1.0.0",
    "orientation": "portrait",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.andreasjj.posthogandroidrepro"
    },
    "android": {
      "adaptiveIcon": {
        "backgroundColor": "#ffffff"
      },
      "package": "com.andreasjj.posthogandroidrepro"
    },
    "plugins": [
      [
        'expo-splash-screen',
        {
          image: './1024.png',
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
          imageWidth: 100
        }
      ],
      "expo-router"
    ],
    "experiments": {
      "typedRoutes": true
    }
  }
}
