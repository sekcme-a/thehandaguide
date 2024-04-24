import Tilt from "react-parallax-tilt";
import Image from "next/image";

const BannerSix = (
    {
        title = '우리가족 행복비서\n더한다+',
        subtitle = `더한다+ 를 통해 관심있는 기관과 소통하세요!\n프로그램 확인, 신청, 문의, 관리까지 한번에!\n더한다와 함께해 이 모든 편의를 누리세요!`,
        bannerStyleClass = 'thd-banner-bcZone breadcrumb-style-2 pt--170 pb--70 theme-gradient',
        bannerTitleClass = 'thd-title mb--20',
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
                                <h1 className={bannerTitleClass} style={{whiteSpace:"pre-line"}}>{title}</h1>
                                <p className="thdsubt2 preline keep-all">{subtitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className={rightColumn}>
                        {!isServiceDetails ? (
                            <div className="thdthgrp wimgp text-start text-lg-end custom-for-image">
                                <div className="thumbnail">
                                    <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9} style={{border:"2px solid rgb(233,233,233)", borderRadius:"10px"}}>
                                        <Image
                                            style={{ borderRadius:"10px", overflow: "hidden"}}
                                            width={310}
                                            height={556}
                                            className="thdImg_as"
                                            src={bannerImageOne}
                                            alt="더한다 스크린샷"
                                        />
                                    </Tilt>
                                </div>
                                {/* <div className="thd_imgRoup">
                                    <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                                        <Image
                                            width={267}
                                            height={363}
                                            className="thdImg_as"
                                            src={bannerImageTwo}
                                            alt="Keystoke Images"
                                        />
                                    </Tilt>
                                </div> */}
                                <div className="thd_shgp">
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
                            <div className="thumbnail text-start text-lg-end custom-for-image">
                                <div className="thd_imgRoup">
                                    <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                                        <Image
                                            width={370}
                                            height={466}
                                            className="image-1 thdImg_as"
                                            src={shapeImage}
                                            alt="이미지 슬라이더"
                                            objectFit="cover"
                                        />
                                    </Tilt>
                                    {showPersonImage && (
                                        <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9} className="banner-thdImg_as-2">
                                            <Image
                                                width={270}
                                                height={321}
                                                className="image-2 thdImg_as"
                                                src="/images/slider/single-service-01.svg"
                                                alt="더한다 슬라이더"
                                                layout="fixed"
                                            />
                                        </Tilt>
                                    )}
                                </div>
                                <div className="thd_shgp">
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
