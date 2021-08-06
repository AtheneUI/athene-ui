import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const util = require("./test");
util();

const Nav: FC = () => {
    return (
        <div>
            <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" />
        </div>
    );
};

ReactDOM.render(<Nav/>, document.querySelector('#root'));