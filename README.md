# posthog-session-replay-android-repro

Built with Expo 52. To reproduce session replay redaction error simply:
1. Add your own apiKey to the PostHogProvider inside the AnalyticsProvider in the utils folder
2. Build and run the expo app on an android phone
3. Scroll a bit and switch between the tab screen and modal screen
4. Check the session replay on posthog
