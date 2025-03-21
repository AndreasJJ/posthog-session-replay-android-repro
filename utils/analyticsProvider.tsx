import React from 'react';
import { PostHogProvider } from 'posthog-react-native';
export const AnalyticsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
      <PostHogProvider apiKey="" options={{
        host: 'https://eu.i.posthog.com',
        defaultOptIn: false,
        disableGeoip: true,
        persistence: 'memory',
        // check https://posthog.com/docs/session-replay/installation?tab=React+Native
        // for more config and to learn about how we capture sessions on mobile
        // and what to expect
        enableSessionReplay:true,
        sessionReplayConfig: {
          maskAllSandboxedViews: false,
          // Whether text inputs are masked. Default is true.
          // Password inputs are always masked regardless
          // NB!!!!: This also masks normal Text/Typography...
          maskAllTextInputs: false,
          // Whether images are masked. Default is true.
          maskAllImages: false,
          // Capture logs automatically. Default is true.
          // Android only (Native Logcat only)
          captureLog: true,
          // Whether network requests are captured in recordings. Default is true
          // Only metric-like data like speed, size, and response code are captured.
          // No data is captured from the request or response body.
          // iOS only
          captureNetworkTelemetry: true,
          // Deboucer delay used to reduce the number of snapshots captured and reduce performance impact. Default is 500ms
          androidDebouncerDelayMs: 500,
          // Deboucer delay used to reduce the number of snapshots captured and reduce performance impact. Default is 1000ms
          iOSdebouncerDelayMs: 1000
        }
      }}>
        {children}
      </PostHogProvider>
  );
};