<div style="text-align: center;"><img src="https://github.com/AtheneUI/athene-ui/blob/master/dumi/public/images/favicon.png?raw=true"/></div>

<div style="text-align: center;"><h1>athene-ui</h1></div>

<div style="text-align: center;">ð§ââï¸ A react mobile UI component library poured with wisdom!</div>



![](https://img.shields.io/badge/test-passing-brightgreen) ![](https://img.shields.io/badge/coverage-100%25-green) ![](https://img.shields.io/badge/npm-v4.16.10-blue)  ![](https://img.shields.io/badge/downloads-3.2M%2Fmonth-green) ![](https://img.shields.io/badge/dependencies-up%20to%20date-yellow) ![](https://img.shields.io/badge/dev%20dependencies-up%20to%20date-brightgreen) ![](https://img.shields.io/badge/alerts%3A%20js%2Fts-0-brightgreen) ![](https://img.shields.io/badge/license-passing-brightgreen) ![](https://img.shields.io/badge/discussions-on%20github-blue) ![](https://img.shields.io/badge/help%20wanted-143-brightgreen) 

### â¨Features

ð Enterprise class UI designed for mobile applications.

ð¦ A set of high-quality React components out of the box.

ð¡ Written in TypeScript with predictable static types.

âï¸ Whole package of design resources and development tools.

ð¨ Powerful theme customization in every detail.

### ð¥ Environment Support

- Modern browsers and Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))
- Server-side Rendering
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| IE11, Edge                                                   | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |

### ð¦ Install

æªå®å¾ç»­ ...

### ð  Usage

```jsx
import Button, { ButtonTypeEnum, } from '../es/button';

const App = () => (
  <>
    <Button type={ButtonTypeEnum.PRIMARY}>primary æé®</Button>
  </>
);
```

And import style manually:

```css
import 'athene-ui/dist/athene.min.css';
```

### Typescript

`athene-ui` is written in TypeScript with complete definitions, check [Use in TypeScript](https://ant.design/docs/react/use-in-typescript) to get started.

æªå®å¾ç»­

### ð Development documentation

å¦ææåå­¦æ³ fork æ­¤é¡¹ç®ä¸ºèªå·±å¼å React UI ç»ä»¶åºçä¹æ¯å¯ä»¥ï¼ä¸é¢æå°å¼åç»ä»¶åºçå¸¸ç¨å½ä»¤åæ³¨æäºé¡¹éæ :

- å¸¸ç¨å½ä»¤ :

  - æå UI ç»ä»¶åº : 

    ```bash
    $> yarn build or npm run build
    ```

  - æ¬å°å¼å :

    ```bash
    $> yarn start or npm run start
    ```

  - ç»ä»¶æµè¯ :

    ```bash
    $> yarn test or npm run test
    ```

  - æ¬å°å¼åç»ä»¶ææ¡£ç«ç¹ :

    ```bash
    $> yarn site or npm run site
    ```

  - æåç»ä»¶ææ¡£ç«ç¹ :

    ```bash
    $> yarn build:site or npm run build:site
    ```

- æ³¨æäºé¡¹
  - ç»ä»¶åºæ¯éè¿ `webpack5 + gulp` æ­å»ºèæã
  - å¨é¨ä¾èµåºæ¬åçº§å°ææ°çæ¬ã
  - ç»ä»¶ææ¡£ç«ç¹ä½¿ç¨çæ¯é¿éå·´å·´åºåç `dumi` ï¼é¡¾æä»¥ææçç»ä»¶ææ¡£é½å¨ `dumi` æä»¶å¤¹ä¸­ã
  - é¡¹ç®å¨é¨è¦ç `TypeScript` å¯ä»¥ä¸æ»çä½éªç±»åç¼ç¨ï¼ä¸å·²ç»éè¿ babel å¤çå¥½ ESNext å React è¯­æ³ã
  - é¡¹ç®æåäº§åºä¸ä¸ªå `dist`ã`lib`ã`es` åå«å¯¹åºä¸ä¸ªåºæ¯ `Umd`ã`CommonJs`ã`ESModule`
  - éå¸¸ä¹äºæ¥åè¯¸ä½å®è´µå»ºè®®ï¼å¦æå»ºè®®è¯·æ `issue` ã