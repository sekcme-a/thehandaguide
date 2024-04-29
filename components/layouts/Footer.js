import Link from 'next/link';
import {useEffect, useState} from 'react';
import Logo from '../common/Logo';
import FooterMenu from '../../data/FooterMenu';

const Footer = ({footerSetting = {}}) => {
    const [footerSettings, setFooterSettings] = useState({});

    useEffect(() => {
        if (footerSetting === "") {
            const setting = {
                showCopyrightOnly: false,
            };
            setFooterSettings(setting);
        } else {
            setFooterSettings(footerSetting);
        }
    }, [footerSetting]);

    return (
        <footer
            className={`axil-footer footer-default ${
                footerSettings.showCopyrightOnly ? "bg-color-lightest" : ""
            } ${
                footerSettings.style === "three"
                    ? "footer-style-3 bg-color-extra09"
                    : "theme-gradient-2"
            }`}
        >
            <div
                className={"bg_image--2"
                }
            >
                {!footerSettings.showCopyrightOnly && (
                    <>
                        {footerSettings.style !== "three" ? (
                            <></>
                            // <div className="ft-social-icon-wrapper thdsecGapTop">
                            //     <div className="container">
                            //         <div className="row">
                            //             <div className="col-lg-12">
                            //                 <ul className="ft-social-share d-flex justify-content-center liststyle flex-wrap">
                            //                     {FooterMenu.social?.map((socialItem, index) => (
                            //                         <li key={`social-${index}`}>
                            //                             <a href={socialItem.url} target="_blank" rel="noreferrer">
                            //                                 <i className={`fab ${socialItem.icon}`}/>
                            //                             </a>
                            //                         </li>
                            //                     ))}
                            //                 </ul>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
                        ) : (
                            <div className="axil-call-to-action callaction-style-2 pt--110 pt_sm--60 pt_md--80">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="inner">
                                                <div className="text">
                                                    <h2 className="title">
                                                        Interested in collaborations?
                                                    </h2>
                                                </div>
                                                <div className="button-wrapper">
                                                    <Link legacyBehavior href="/contact">
                                                        <a className="thdButtt btn-large btn-solid bgextra07-color">
                                                            <span className="button-text">Let&rsquo;s Talk</span>
                                                            <span className="button-icon"/>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="footer-top thdsecGap">
                            <div className="container">
                                <div className="row">
                                    <div
                                        className={`${
                                            footerSettings.style === "three"
                                                ? "col-xl-5 col-lg-3 col-md-6 col-sm-6 col-12"
                                                : "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                                        }`}
                                    >
                                        <div
                                            className={`${
                                                footerSettings.style === "three"
                                                    ? "footer-widget-item"
                                                    : "footer-widget-item axil-border-right"
                                            }`}
                                        >
                                            {footerSettings.style !== "three" ? (
                                                <>
                                                    <h2 style={{marginBottom:"40px"}}>주식회사 더한다</h2>
                                                    <p>
                                                        등록번호: 557-88-02900<br />
                                                        대표자: 강성혁<br />
                                                        법인등록번호: 134811-0784993<br />
                                                        {`경기도 화성시 동탄중심상가2길 8, 4층 401호 라15호(반송동, 로하스애비뉴)`}
                                                    </p>
                                                    {/* <div className="axil-newsletter">
                                                        <form className="newsletter-form" action="#">
                                                            <input type="email" placeholder="Email"/>
                                                            <a className="thdButtt thdBut_invisi" href="#">
                                                                <span className="button-text">Subscribe</span>
                                                                <span className="button-icon"/>
                                                            </a>
                                                        </form>
                                                    </div> */}
                                                </>
                                            ) : (
                                                <>
                                                    <div className="logo">
                                                        <Link legacyBehavior href="/home-01">
                                                            <a>
                                                                <Logo variant="two" fillTextColor="#fff"/>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="axil-ft-address">
                                                        <div className="address">
                                                            <p>
                                                                <span>A.</span>3078 Simpson Square&sbquo; Clinton&sbquo;
                                                                Oklahoma&sbquo; <br/> 73601&sbquo; Londan
                                                            </p>
                                                            <p>
                                                                <span>T.</span>
                                                                <a href="#">+123 4567 8901</a>
                                                            </p>
                                                            <p>
                                                                <span>E.</span>
                                                                <a href="#">contact@Keystroke.com</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div
                                        className={`${
                                            footerSettings.style === "three"
                                                ? "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--30"
                                                : "col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--30"
                                        }`}
                                    >
                                        <div className="footer-widget-item">
                                            <h6 className="title">Pages</h6>
                                            <div className="footer-menu-container">
                                                <ul
                                                    className={`ft-menu liststyle link-hover ${
                                                        footerSettings.style === "three"
                                                            ? "color-var--2"
                                                            : ""
                                                    }`}
                                                >
                                                    {FooterMenu.services?.map((menuItem, index) => (
                                                        <li key={`footer-service-${index}`}>
                                                            <Link legacyBehavior href={menuItem.url}>{menuItem.title}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`${
                                            footerSettings.style === "three"
                                                ? "col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12 mt_md--30 mt_sm--30"
                                                : "col-xl-2 col-lg-6 col-md-6 col-sm-6 col-12 mt_lg--30 mt_md--30 mt_sm--30"
                                        }`}
                                    >
                                        <div className="footer-widget-item">
                                            <h6 className="title">Guide</h6>
                                            <div className="footer-menu-container">
                                                <ul
                                                    className={`ft-menu liststyle link-hover ${
                                                        footerSettings.style === "three"
                                                            ? "color-var--2"
                                                            : ""
                                                    }`}
                                                >
                                                    {FooterMenu.resources?.map((menuItem, index) => (
                                                        <li key={`footer-resource-${index}`}>
                                                            <Link legacyBehavior href={menuItem.url}>{menuItem.title}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                   
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className="copyright copyright-default">
                    <div className="container">
                        <div className="row row--0 ptb--20 axil-basic-thine-line">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="inner text-center text-md-start">
                                    <p>© 2024. All rights reserved by 더한다</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
