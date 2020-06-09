import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: 'Sofia';
    src: url('./fonts/SofiaProRegular.eot');
    src: url('./fonts/SofiaProRegular.eot?#iefix') format('embedded-opentype'),
      url('./fonts/SofiaProRegular.woff') format('woff'),
      url('./fonts/SofiaProRegular.woff2') format('woff2'),
      url('./fonts/SofiaProRegular.ttf') format('truetype'),
      url('./fonts/SofiaProRegular.svg#SofiaProRegular') format('svg');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nocturno';
    src: url('./fonts/NocturnoDisplayStd-Regular.eot');
    src: url('./fonts/NocturnoDisplayStd-Regular.eot?#iefix') format('embedded-opentype'),
      url('./fonts/NocturnoDisplayStd-Regular.woff') format('woff'),
      url('./fonts/NocturnoDisplayStd-Regular.woff2') format('woff2'),
      url('./fonts/NocturnoDisplayStd-Regular.ttf') format('truetype'),
      url('./fonts/NocturnoDisplayStd-Regular.svg#NocturnoDisplayStd-Regular') format('svg');
    font-weight: 400;
    font-style: normal;
  }
`
