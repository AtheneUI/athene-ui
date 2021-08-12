---
title: 按钮
---
## 按钮
按钮用于开始一个即时操作。

### 何时使用 ?
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
在 Athene UI 中我们提供了五种按钮。

- 主按钮: 用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：用于作为外链的行动点。

以及四种状态属性与上面配合使用。

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

### 代码演示
```jsx
import React from 'react';
import '../../../../dist/athene.css';
import { Button, ButtonTypeEnum, ButtonStyleEnum, WhiteSpace, WingBlank, WingBlankTypeEnum } from '../../../../dist/athene.js';
const Test = () => (
    <React.Fragment>
        <WhiteSpace />
        <WingBlank>
            <Button>default 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank type={WingBlankTypeEnum.MIDDLE}>
            <Button type={ButtonTypeEnum.PRIMARY} waterRipple={{
                color: '#FFF',
                opacity: 0.5,
            }}>primary 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank type={WingBlankTypeEnum.SMALL}>
            <Button type={ButtonTypeEnum.DANGER} waterRipple={{
                color: '#FFF',
                opacity: 0.5,
            }}>danger 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank type={WingBlankTypeEnum.SMALL}>
            <Button type={ButtonTypeEnum.WARNING} waterRipple={{
                color: '#FFF',
                opacity: 0.5,
            }}>
                warning 按钮
            </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank type={WingBlankTypeEnum.SMALL}>
            <Button buttonStyle={ ButtonStyleEnum.TEXT } waterRipple={{
                color: '#000',
                opacity: 0.5,
            }}>
                text 按钮
            </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank type={WingBlankTypeEnum.SMALL}>
            <Button buttonStyle={ ButtonStyleEnum.TEXT } type={ ButtonTypeEnum.PRIMARY } waterRipple={{
                color: '#1976d2',
                opacity: 0.5,
            }}>
                text 按钮
            </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank type={WingBlankTypeEnum.SMALL}>
            <Button buttonStyle={ ButtonStyleEnum.TEXT } type={ ButtonTypeEnum.WARNING } waterRipple={{
                color: '#ffc800',
                opacity: 0.5,
            }}>
                text 按钮
            </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank type={WingBlankTypeEnum.SMALL}>
            <Button buttonStyle={ ButtonStyleEnum.TEXT } type={ ButtonTypeEnum.DANGER } waterRipple={{
                color: '#dc014e',
                opacity: 0.5,
            }}>
                text 按钮
            </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank type={WingBlankTypeEnum.SMALL}>
            <Button buttonStyle={ ButtonStyleEnum.LINK } waterRipple={{
                color: '#1976d2',
                opacity: 0.5,
            }}>
                link 按钮
            </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank type={WingBlankTypeEnum.SMALL}>
            <Button buttonStyle={ ButtonStyleEnum.GHOST } waterRipple={{
                color: '#000000de',
                opacity: 0.5,
            }}>
                ghost 按钮
            </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank type={WingBlankTypeEnum.SMALL}>
            <Button buttonStyle={ ButtonStyleEnum.GHOST } type={ ButtonTypeEnum.PRIMARY } waterRipple={{
                color: '#1976d2',
                opacity: 0.5,
            }}>
                ghost 按钮
            </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank type={WingBlankTypeEnum.SMALL}>
            <Button buttonStyle={ ButtonStyleEnum.GHOST } type={ ButtonTypeEnum.WARNING } waterRipple={{
                color: '#ffc800',
                opacity: 0.5,
            }}>
                ghost 按钮
            </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank type={WingBlankTypeEnum.SMALL}>
            <Button buttonStyle={ ButtonStyleEnum.GHOST } type={ ButtonTypeEnum.DANGER } waterRipple={{
                color: '#dc004e',
                opacity: 0.5,
            }}>
                ghost 按钮
            </Button>
        </WingBlank>
    </React.Fragment>
);

export default Test;

```

### API
通过设置 Button 的属性来产生不同的按钮样式。
按钮属性说明如下 :
| 属性 | 说明 | 类型 | 默认值 | 版本 |
|:-|:-|:-|:-|:-|
| onClick | 点击按钮时的回调 | (event) => void | - |  |
| icon | 设置按钮的图标组件 | ReactNode | - |  |
| iconPosition | 设置按钮图标的位置 | string | left |  |
| type | 设置按钮类型 | primary \| ghost \| dashed \| link \| text \| default | default |  |
| nativeType | 设置 button 原生的 type 值 | string | button |  |
| loading | 设置按钮载入状态 | boolean \| { delay: number } | false |  |
| style | 自定义按钮样式 | CSSProperties | - |  |
| shape | 设置按钮形状 | circle \| round \| rectangle | rectangle |  |
| size | 设置按钮大小 | large \| middle \| small | middle |  |
| disabled | 按钮失效状态 | boolean | false |  |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |  |
| to | 点击后跳转的目标路由对象，同 react-router-dom 的 to 属性 | string \| object | - |  |
| replace | 是否在跳转时替换当前页面历史 | boolean | false |  |

### FAQ
