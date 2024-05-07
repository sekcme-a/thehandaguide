import Link from 'next/link';
import {useEffect, useState} from 'react';
import HeaderSearch from './HeaderSearch';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';
import SideNav from './SideNav';
import ThemeSwitcher from './ThemeSwitcher';
// import Logo from '../common/Logo';
import Logo from "components/custom/Logo"

const Header = ({headerSetting = {}}) => {
    const [headerSettings, setHeaderSettings] = useState({});

    const headerContainerClass = () => {
        if (headerSetting.style === 'one') return 'container';
        else if (headerSetting.style === 'two')
            return 'container-fluid plr--100 plr_lg--30 plr_md--30 plr_sm--10';
        else if (headerSetting.style === 'three') return 'container';
        else return 'container';
    };

    const toggleSearch = (e) => {
        e.preventDefault();

        const searchArea = document.querySelector('.axil-search-area');

        searchArea.classList.toggle('visible');
    };

    const toggleSideNav = () => {
        const html = document.querySelector('html'),
            sideNav = document.querySelector('.side-nav');

        sideNav.classList.toggle('opened');
        html.classList.toggle('side-nav-opened');
    };

    const toggleMobileMenu = () => {
        const body = document.querySelector('body');
        body.classList.toggle('popup-mobile-manu-visible');
    };

    useEffect(() => {
        if (headerSetting === '') {
            const setting = {
                style: 'one',
                leftColumn: 'col-lg-3 col-md-6 col-sm-6 col-8 header-left',
                rightColumn: 'col-lg-9 col-md-6 col-sm-6 col-4 header-right',
            };
            setHeaderSettings(setting);
        } else {
            setHeaderSettings(headerSetting);
        }

    }, [headerSetting, setHeaderSettings]);

    useEffect(() => {
        const header = document.querySelector('header.ax-header');

        const handleStickyClass = () => {
            if (window.pageYOffset > 250) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        };

        window.addEventListener('scroll', handleStickyClass);

        return () => {
            window.removeEventListener('scroll', handleStickyClass);
        }
    }, []);

    useEffect(() => {
        const closeSidenavOnClickOverlay = () => {
            const html = document.querySelector("html"),
                body = document.querySelector("body"),
                sideNav = document.querySelector(".side-nav");

            body.addEventListener('click', function (e) {
                if (e.target.tagName === 'BODY') {
                    sideNav.classList.remove('opened');
                    html.classList.remove('side-nav-opened');
                }
            });
        };

        closeSidenavOnClickOverlay();
    }, []);

    return (
        <>
            {/* <ThemeSwitcher/> */}

            <header
                className={`ax-header haeder-default light-logo-version header-transparent axil-header-sticky`}
            >
                <div className="header-wrapper">
                    <div className={headerContainerClass()}>
                        <div className="row align-items-center">
                            <div className={headerSettings.leftColumn}>
                                <div className="logo">
                                    <Link legacyBehavior href="/">
                                        <a>
                                            <Logo />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            
                            <div className={headerSettings.rightColumn}>
                                <div
                                    className={`mainmenu-wrapepr ${
                                        headerSettings.style === "two" ? "justify-content-end" : ""
                                    }`}
                                >
                                    {(headerSettings.style === "one" ||
                                        headerSettings.style === "four") && (
                                        <nav className="mainmenu-nav d-none d-lg-block">
                                            <MainMenu/>
                                        </nav>
                                    )}

                                    <div className={`axil-header-extra d-flex align-items-center`}>
                                      

                                        <div
                                            className={`${
                                                headerSettings.style === "three"
                                                    ? "ax-hamburger bg-theme-color ml--40"
                                                    : "ax-menubar popup-navigation-activation d-block d-lg-none ml_sm--20 ml_md--20 "
                                            }`}
                                        >
                                            <div
                                                className={`${
                                                    headerSettings.style === "three"
                                                        ? "axil-menuToggle popup-navigation-activation"
                                                        : ""
                                                }`}
                                                onClick={toggleMobileMenu}
                                            >
                                                {headerSettings.style === "three" ? (
                                                    <>
                                                        <span/>
                                                        <span/>
                                                        <span/>
                                                    </>
                                                ) : (
                                                    <i/>
                                                )}
                                            </div>
                                        </div>

                                        <HeaderSearch toggleSearch={toggleSearch}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <MobileMenu/>

            {/* <SideNav toggleSidenav={toggleSideNav}/> */}
        </>
    );
};

export default Header;
