<div style="text-align: center;"><img src="https://github.com/AtheneUI/athene-ui/blob/master/dumi/public/images/favicon.png?raw=true"/></div>

<div style="text-align: center;"><h1>athene-ui</h1></div>

<div style="text-align: center;">🧝‍♀️ A react mobile UI component library poured with wisdom!</div>



![](https://img.shields.io/badge/test-passing-brightgreen) ![](https://img.shields.io/badge/coverage-100%25-green) ![](https://img.shields.io/badge/npm-v4.16.10-blue)  ![](https://img.shields.io/badge/downloads-3.2M%2Fmonth-green) ![](https://img.shields.io/badge/dependencies-up%20to%20date-yellow) ![](https://img.shields.io/badge/dev%20dependencies-up%20to%20date-brightgreen) ![](https://img.shields.io/badge/alerts%3A%20js%2Fts-0-brightgreen) ![](https://img.shields.io/badge/license-passing-brightgreen) ![](https://img.shields.io/badge/discussions-on%20github-blue) ![](https://img.shields.io/badge/help%20wanted-143-brightgreen) 

### ✨Features

🌈 Enterprise class UI designed for mobile applications.

📦 A set of high-quality React components out of the box.

🛡 Written in TypeScript with predictable static types.

⚙️ Whole package of design resources and development tools.

🎨 Powerful theme customization in every detail.

### 🖥 Environment Support

- Modern browsers and Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))
- Server-side Rendering
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| IE11, Edge                                                   | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |

### 📦 Install

未完待续 ...

### 🛠 Usage

```jsx
import Button, { ButtonTypeEnum, } from '../es/button';

const App = () => (
  <>
    <Button type={ButtonTypeEnum.PRIMARY}>primary 按钮</Button>
  </>
);
```

And import style manually:

```css
import 'athene-ui/dist/athene.min.css';
```

### Typescript

`athene-ui` is written in TypeScript with complete definitions, check [Use in TypeScript](https://ant.design/docs/react/use-in-typescript) to get started.

未完待续

### 📄 Development documentation

如果有同学想 fork 此项目为自己开发 React UI 组件库的也是可以，下面我将开发组件库的常用命令和注意事项阐明 :

- 常用命令 :

  - 打包 UI 组件库 : 

    ```bash
    $> yarn build or npm run build
    ```

  - 本地开发 :

    ```bash
    $> yarn start or npm run start
    ```

  - 组件测试 :

    ```bash
    $> yarn test or npm run test
    ```

  - 本地开发组件文档站点 :

    ```bash
    $> yarn site or npm run site
    ```

  - 打包组件文档站点 :

    ```bash
    $> yarn build:site or npm run build:site
    ```

- 注意事项
  - 组件库是通过 `webpack5 + gulp` 搭建而成。
  - 全部依赖基本升级到最新版本。
  - 组件文档站点使用的是阿里巴巴出品的 `dumi` ，顾所以所有的组件文档都在 `dumi` 文件夹中。
  - 项目全部覆盖 `TypeScript` 可以丝滑的体验类型编程，且已经通过 babel 处理好 ESNext 和 React 语法。
  - 项目打包产出三个包 `dist`、`lib`、`es` 分别对应三个场景 `Umd`、`CommonJs`、`ESModule`
  - 非常乐于接受诸位宝贵建议，如有建议请提 `issue` 。