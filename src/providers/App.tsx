import { FC } from 'react';
import { PropsWithChildren } from '../resources/interfaces/PropsWithChildren';
import { ThemeProvider } from './Theme';
import { Provider } from 'react-redux';
import { store } from '../store';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};
