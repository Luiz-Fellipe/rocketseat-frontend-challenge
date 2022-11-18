import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      /** #115D8C */
      blue: string;
      /** #F25D27 */
      orange: string;
      /** #41414D */
      title: string;
      /** #737380 */
      text: string;
      /** #A0ACB3 */
      complement: string;
      /** #FFFFFF */
      shape01: string;
      /** #DCE2E6 */
      shape02: string;
      /** #E9E9F0 */
      shape03: string;
      /** #DE3838 */
      red: string;
      /** #51B853 */
      green: string;
      /** #DCF5DD */
      greenLow: string;
      /** #DDE9F0 */
      blueLow: string;
      /** #FFA585 */
      orangeLow: string;
      /** #EFB866 */
      yellow: string;
      /** #F5F8FA */
      background: string;
    };
    fontSizes: {
      /**  0.625rem */
      "10": string;
      /**  0.75rem */
      "12": string;
      /** 0.875rem */
      "14": string;
      /** 1rem */
      "16": string;
      /** 1.25rem */
      "20": string;
    };

    space: {
      /** 0.25rem */
      "4": string;
      /** 0.50rem */
      "8": string;
      /** 0.625rem */
      "10": string;
      /** 0.75rem */
      "12": string;
      /** 1rem */
      "16": string;
      /** 1.5rem */
      "24": string;
      /** 2rem */
      "32": string;
    };

    radii: {
      /** 4px */
      "4": string;
      /** 8px */
      "8": string;
    };

    device: {
      /** (min-width: 576px) */
      sm: string;
      /** (min-width: 768px) */
      md: string;
      /** (min-width: 992px) */
      lg: string;
      /** (min-width: 1200px) */
      xl: string;
      /** (min-width: 1400px) */
      xxl: string;
    };
  }
}
