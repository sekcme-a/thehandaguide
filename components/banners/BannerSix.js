import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";

const BannerSix = (
    {
        title = '쉽게 프로그램을 제작 및 관리하세요.',
        subtitle = '더한다 관리자 페이지에 대한 모든 기능을 소개합니다.\n저희 팀은 항상 고객의 요구사항과 목표를 고려하여 맞춤형 솔루션을 제공합니다.',
        bannerStyleClass = 'axil-breadcrumb-area breadcrumb-style-2 pt--170 pb--70 theme-gradient',
        bannerTitleClass = 'page-title mb--20',
        leftColumn = 'col-lg-5 order-2 order-lg-1 mt_md--30 mt_sm--30',
        rightColumn = 'col-lg-7 order-1 order-lg-2',
        bannerImageOne = '/images/custom/capture-mainpage.jpeg',
        bannerImageTwo = '/images/others/keystoke-image-2.svg',
        shapeImage = '/images/slider/single-service-02.png',
        isServiceDetails = false,
        showPersonImage = true,
    }
) => {
    return (
        <div className={bannerStyleClass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className={leftColumn}>
                        <div className="inner">
                            <div className="content">
                                <h1 className={bannerTitleClass}>{title}</h1>
                                <p className="subtitle-2 preline keep-all">{subtitle}</p>
                                <Link href={`https://thehanda.netlify.app`}>
                                    <a className="axil-button btn-large btn-transparent" target="_blank">
                                        <span className="button-text">관리자페이지로 이동</span>
                                        <span className="button-icon"/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={rightColumn}>
                        {!isServiceDetails ? (
                            <div className="breadcrumb-thumbnail-group with-image-group text-start text-lg-end custom-for-image">
                                <div className="thumbnail">
                                    <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                                    <Image
                                            style={{border:"1px solid black", borderRadius:"10px"}}
                                            width={310}
                                            height={556}
                                            className="paralax-image"
                                            src={bannerImageOne}
                                            alt="Keystoke Images"
                                        />
                                    </Tilt>
                                </div>
                                {/* <div className="image-group">
                                    <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                                        <Image
                                            width={267}
                                            height={363}
                                            className="paralax-image"
                                            src={bannerImageTwo}
                                            alt="Keystoke Images"
                                        />
                                    </Tilt>
                                </div> */}
                                <div className="shape-group">
                                    <div className="shape shape-1">
                                        <i className="icon icon-breadcrumb-1"/>
                                    </div>
                                    <div className="shape shape-2">
                                        <i className="icon icon-breadcrumb-2"/>
                                    </div>
                                    <div className="shape shape-3 customOne">
                                        <i className="icon icon-breadcrumb-3"/>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="thumbnail text-start text-lg-end">
                                <div className="image-group">
                                    <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                                    <Image
                                            style={{border:"1px solid black", borderRadius:"10px"}}
                                            width={310}
                                            height={556}
                                            className="paralax-image"
                                            src={bannerImageOne}
                                            alt="Keystoke Images"
                                        />
                                    </Tilt>
                                    {showPersonImage && (
                                        <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9} className="banner-paralax-image-2">
                                            <Image
                                                width={270}
                                                height={321}
                                                className="image-2 paralax-image"
                                                src="/images/slider/single-service-01.svg"
                                                alt="Slider images"
                                                layout="fixed"
                                            />
                                        </Tilt>
                                    )}
                                </div>
                                <div className="shape-group">
                                    <div className="shape shape-1">
                                        <i className="icon icon-breadcrumb-1"/>
                                    </div>
                                    <div className="shape shape-2">
                                        <i className="icon icon-breadcrumb-2"/>
                                    </div>
                                    <div className="shape shape-3 customOne">
                                        <i className="icon icon-breadcrumb-3"/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSix;
