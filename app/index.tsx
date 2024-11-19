import { PaperProvider } from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';
import { App } from './app';

export default function Index() {
  const theme: ThemeProp = {
    dark: true,
    colors: {
      primary: 'tomato',
      secondary: 'yellow',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}
