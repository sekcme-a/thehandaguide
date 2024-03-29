import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";

const TeamOne = () => {
    return (
        <div className="axil-team-area shape-position ax-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-6">
                        <div className="thumbnail">
                            <div className="image">
                                <Image
                                    width={630}
                                    height={514}
                                    src="/images/custom/admin_bg.png"
                                    alt="Team Images"
                                />
                            </div>
                            {/* <div className="total-team-button">
                                <Link href="/team">
                                    <a>
                                        <span>20+</span>
                                    </a>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-5 offset-xl-1 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <SectionTitle
                                    title="기관 등록"
                                    subtitle="기관 등록"
                                    description="기관 등록을 통해 게시물 관리, 신청 관리, 사용자 관리, 문의 관리까지 한번에 해결하세요. 사용자들에게 필요한 알림을 일괄적으로 보내고 쉽게 관리해보세요."
                                    color="extra08-color"
                                    alignment="left"
                                />
                                <div className="axil-button-group mt--40">
                                    <Link href="/about">
                                        <a className="axil-button btn-large btn-transparent">
                                            <span className="button-text">기관 가이드 보기</span>
                                            <span className="button-icon"></span>
                                        </a>
                                    </Link>
                                    <Link href="/pricing">
                                        <a className="axil-button axil-link-button" >
                                            Pricing
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-group">
                <div className="shape shape-1 customOne">
                    <i className="icon icon-shape-06"></i>
                </div>
                <div className="shape shape-2">
                    <i className="icon icon-shape-13"></i>
                </div>
                <div className="shape shape-3">
                    <i className="icon icon-shape-14"></i>
                </div>
            </div>
        </div>
    );
};

export default TeamOne;
