import 'styled-components';
interface IColors {
  primary: {
    main: string;
    ghost: string;
  };
  neutral: {
    city: string;
    onix: string;
    mediumElephant: string;
    mediumWave: string;
    wave: string;
    desk: string;
  };
  body: string;
  white: string;
  black: string;
  rooftop: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
    fonts: {
      primaryFamily: string;
    };
  }
}
