import {
  Link
} from "react-router-dom";
import './Header.scss'
import * as React from 'react'

const _ = require('lodash/function');

const stickyFunc = () => {

  // 监听滚动控制header背景颜色回调函数
  const className = 'header-bg-transparent'
  const gradientClassName = 'header-bg-gradient'
  if (window.pageYOffset > 500) return
  if (window.pageYOffset > 100) {
    (document.querySelector('.header-bg') as HTMLInputElement).classList.remove(className);
    (document.querySelector('.header-bg') as HTMLInputElement).classList.add(gradientClassName)
  } else {
    (document.querySelector('.header-bg') as HTMLInputElement).classList.add(className);
    (document.querySelector('.header-bg') as HTMLInputElement).classList.remove(gradientClassName)
  }
}

export default class Header extends React.Component {

  showLoginContainer() {

  }
  componentDidMount() {
    window.addEventListener('scroll', _.throttle(stickyFunc, 100))
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    window.removeEventListener('scroll', _.throttle(stickyFunc, 100))
  }
  render() {
    return (
      <header>
        <ul className="header-content">
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/artical">文章</Link>
          </li>
          <li>
            <Link to="/about">关于</Link>
          </li>
          <li>
            <div onClick={this.showLoginContainer}>登录</div>
          </li>
        </ul>
        <div className="header-bg header-bg-transparent "></div>
      </header>
    )
  }
}