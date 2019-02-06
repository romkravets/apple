import * as React from 'react';
import './MenuReact.scss';

//import { TaskList } from '../../../lesson_15_hw/components/task-list/TaskList.jsx';



export class MenuReact extends React.Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      isOpened: false,
      menu: [],
    };
    this.fetchMenus();
  }

  fetchMenus() {
    setTimeout(() => {
      this.setState((oldState) => {
        console.log(this.state);
        const newState = Object.assign({}, oldState);
        newState.menu = [
          {
            title: 'Menu',
            href: '/menu_react.html',
          },
          {
            title: 'Comments',
            href: '/lesson_15_hw.html',
          },
          {
            title: 'React',
            href: 'https://reactjs.org/',
          },
          {
            title: 'GitHub',
            href: 'https://github.com/romkravets',
          },
          {
            title: 'Google',
            href: 'https://google.com',
          }
        ];
        return newState;
      })
    }, 0);
  }

  toggleMenu() {
    this.setState((oldState) => {
      const newState = Object.assign({}, oldState);
      newState.isOpened = !oldState.isOpened;
      return newState;
    });
  }

  render() {
    let classMain = "main ";

    if (this.state.isOpened) {
      classMain += 'main-active';
    }

    let classSidebar = "menu__sidebar ";

    if (this.state.isOpened) {
      classSidebar += 'menu__open_btn';
    }

    const listItems = this.state.menu.map((item, i) => {
      return <li key={i} className="menu__item">
        <a href={item.href} className="menu__link">
          <span>{item.title}</span>
        </a>
      </li>
    });

    return <div className="menu">
      <div className={classSidebar}>
      <a className="menu__link menu__close_btn" onClick={this.toggleMenu}>×</a>
      <ul className="menu__nav">{listItems}</ul>
    </div>
    <div className={classMain}>
    <button className="menu__btn menu__open_btn" onClick={this.toggleMenu}>☰ React menu</button>
    </div>
    </div>
  }
}