import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { MockContextConfig, renderRouter } from 'expo-router/testing-library';
import { Slot } from 'expo-router';
import { store } from 'expo-router/build/global-state/router-store';
import { ResultState } from 'expo-router/build/fork/getStateFromPath';
import {GestureHandlerRootView} from "react-native-gesture-handler";

interface Props extends React.PropsWithChildren {
  isLoggedIn: boolean;
}

const AllTheProviders = ({ children, isLoggedIn }: Props) => {

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        {children}
      </GestureHandlerRootView>
  );
};

export const AllTheProvidersAuthenticatedComponent = () => {
  return (
      <AllTheProviders isLoggedIn={true}>
        <Slot />
      </AllTheProviders>
  );
};

export const AllTheProvidersUnauthenticatedComponent = () => {
  return (
      <AllTheProviders isLoggedIn={false}>
        <Slot />
      </AllTheProviders>
  );
};

export const NullComponent = () => null;

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
    render(ui, { wrapper: AllTheProviders, ...options });

const updateRouterState = () => {
  if (store.navigationRef.isReady()) {
    const currentState = store.navigationRef.getRootState() as unknown as ResultState;

    if (store.rootState !== currentState) {
      store.updateState(currentState);
    }
  }
};

const customRenderRouter = (
    mockContextConfig: MockContextConfig,
    options?: Omit<Parameters<typeof renderRouter>[1], 'wrapper'>
) => {
  const result = renderRouter(mockContextConfig, { wrapper: AllTheProviders, ...options });
  //updateRouterState();
  return result;
};

// eslint-disable-next-line import/export
export * from '@testing-library/react-native';
// eslint-disable-next-line import/export
export { customRender as render };
// eslint-disable-next-line import/export
export * from 'expo-router/testing-library';
// eslint-disable-next-line import/export
export { customRenderRouter as renderRouter };
