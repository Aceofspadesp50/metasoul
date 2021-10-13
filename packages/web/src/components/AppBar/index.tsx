import React, { useState, useEffect } from 'react';
import { ConnectButton } from '@oyster/common';
import { Notifications } from '../Notifications';
import Scroll from 'react-scroll';
import { Link } from 'react-scroll';
import { Links } from 'tsparticles/Options/Classes/Particles/Links/Links';
import logo from '../../images/SolomnSquare.png';

export const AppBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closedMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

      /*
      <div className="app-left app-bar-box">
        {window.location.hash !== '#/analytics' && <Notifications />}
        <div className="divider" />
      </div>
      {<ConnectButton type="primary" allowWalletChange />}
    */
  return (
    <>
      <nav className="navbar">
      <div className="spacer"></div>
        <div className="navbar-container">
          <div className="navbar-socials">
            <a
              href="https://www.twitter.com/solomonsnft"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://soulless-solomon.com/discord"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-discord"></i>
            </a>
            <div className="inline" onClick={handleClick}>
            <i className={click ? 'fas fa-times fab' : 'fab fas fa-bars'} />
              </div>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
                to="collection"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                offset={-100}
                onClick={closedMobileMenu}
              >
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="story"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                offset={-100}
                onClick={closedMobileMenu}
              >
                Story
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="event"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                offset={-100}
                onClick={closedMobileMenu}
              >
                Event
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="roadmap"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                offset={-100}
                onClick={closedMobileMenu}
              >
                Roadmap
              </Link>
            </li>
          </ul>
          {/*<div className="nav-social">
                        <i class="fab fa-telegram-plane"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fas fa-chart-line"></i>
                    </div>*/}{' '}
          {/*<div className="connect-pc">
                    <div class="currency-pc">
                        0 <img src={bnblogo} alt="Logo" />
                    </div>
                    {button && <Button buttonStyle='btn--connector' buttonSize='btn--small'>Connect</Button>}
                    </div>*/
          }
        </div>
        <div className="spacer"></div>
        <ConnectButton allowWalletChange/>
      </nav>
    </>
  );
};

