// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      header: string;
      body: string;
      footer: string;
    };
  }
}
