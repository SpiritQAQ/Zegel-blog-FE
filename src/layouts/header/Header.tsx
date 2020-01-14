import {
  Link
} from "react-router-dom";
import './Header.scss'
import * as React from 'react'

const _ = require('lodash/function');

const stickyFunc = () => {
  // 监听滚动控制header背景颜色回调函数
  const className = 'header-transparent'
  if (window.pageYOffset > 500) return
  if (window.pageYOffset > 100) {
    (document.querySelector('header') as HTMLInputElement).classList.remove(className)
  } else {
    (document.querySelector('header') as HTMLInputElement).classList.add(className)
  }
}


export default class Header extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', _.throttle(stickyFunc, 100))
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    window.removeEventListener('scroll', _.throttle(stickyFunc, 100))
  }
  render() {
    return (
      <header className="header-transparent">
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
        </ul>
      </header>
    )
  }
}