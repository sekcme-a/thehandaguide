import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import BannerSeven from '../components/banners/BannerSeven';
import Layout from '../components/layouts/Layout';
import WorkingProcess from '../components/services/WorkingProcess';
import TeamOne from '../components/teams/TeamOne';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import HeadMeta from 'components/custom/HeadMeta';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const workingProcess = {
        title: "간편하게 기관들과 소통하세요.",
        description:
            "더한다는 기관와 어플 사용자들의 원활한 소통, 편의성등을 제공하기 위해 더욱 노력할 것입니다.",
        strategies: [
            {
                id: 1,
                title: "프로그램, 설문조사, 공지사항 확인",
                subtitle: "더한다+",
                description:
                    "더이상 까다롭게 여러 홈페이지들을 전전해가며 기관의 게시물들을 확인하지 마세요. 게시물 알림받고 누구보다 빠르고 간편하게 어플내에서 모든 게시물을 확인하세요.",
                highlightColor: "extra04-color",
                image: "/images/custom/working1.png",
            },
            {
                id: 2,
                title: "프로그램 신청/문의/관리",
                subtitle: "더한다+",
                description:
                    "프로그램 신청부터 문의까지, 모두 한개의 어플 내에서 해결하세요. 신청 취소, 프로그램 일정확인, 신청한 프로그램 관리, 알림까지 모두 받아보세요.",
                highlightColor: "extra05-color",
                image: "/images/custom/working2.png",
            },
            {
                id: 3,
                title: "내 일정 확인",
                subtitle: "더한다+",
                description:
                    "내가 신청한 모든 프로그램 정보, 프로그램들의 일정까지 한눈에 확인하세요. ",
                highlightColor: "extra06-color",
                image: "/images/custom/working3.png",
            },
            {
                id: 4,
                title: "기관에게 문의",
                subtitle: "더한다+",
                description:
                    "관심있는 기관에게 바로 문의하세요. 프로그램에 궁금한 점, 기관에 대한 문의 등 언제든지 간편하게 문의를 보내실 수 있습니다.",
                highlightColor: "extra07-color",
                image: "/images/custom/working4.png",
            },
        ],
    };

    return (
        <Layout>
            <HeadMeta
                title="더한다 - 우리가족 행복비서"
                url="https://thehanda.net"
            />

            <main className="thehanda-wrapper">
                <BannerSeven/>

                <div
                    ref={ref}
                    className="thdAre ax-section-gap bg-color-white"
                >
                    <div className="container">
                        <div className="row d-flex flex-wrap axil-featured row--40">
                            <div className="col-lg-6 col-xl-6 col-md-12 col-12">
                                <div className="thdThin">
                                    <div className="thumbnail">
                                        <Image
                                            width={801}
                                            height={712}
                                            className="image w-100"
                                            src="/images/custom/screenshot2.png"
                                            alt="더한다 스크린샷2"
                                            loading='lazy'
                                        />
                                    </div>
                                    <div className="thd_shgp">
                                        <div className="shape">
                                            <i className="icon icon-breadcrumb-2"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 col-md-12 col-12 mt_md--40 mt_sm--40">
                                <div className="inner">
                                    <div className="section-title text-start">
                                        <span className="thd-stit extra04-color">
                                          Program
                                        </span>
                                        <h2 className="title">
                                            {/* <Link legacyBehavior href={`/case-study/${slugify(CaseStudyData[0].title)}`}> */}
                                                <a style={{wordBreak:"keep-all"}}>
                                                    원하는 프로그램을 찾아보고 신청하세요.{" "}
                                                </a>
                                            {/* </Link> */}
                                        </h2>
                                        <p className="thdsubt2">
                                            {`관심있는 기관을 선택해 더한다 어플 내에서 정보 확인, 신청, 일정관리까지 한번에 하실 수 있습니다.\n이제 한개의 어플만으로 프로그램 신청부터 참여까지 함께하세요.`}
                                        </p>
                                        <Link legacyBehavior href={`https://play.google.com/store/apps/details?id=com.zzsoft.thehanda`}>
                                            <a className="thdButtt btn-large thdBut_invisi">
                                                <span className="button-text"><AndroidIcon style={{marginRight:"10px"}}/>플레이스토어로 이동</span>
                                                <span className="button-icon"/>
                                            </a>
                                        </Link>
                                        <div style={{width:"20px", height:"1px"}} />
                                        <Link legacyBehavior href={`https://apps.apple.com/kr/app/%EB%8D%94%ED%95%9C%EB%8B%A4/id1665555435`}>
                                            <a className="thdButtt btn-large thdBut_invisi" >
                                                <span className="button-text" ><AppleIcon style={{marginRight:"10px", marginBottom:"5px"}}/>앱스토어로 이동</span>
                                                <span className="button-icon"/>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="thd_CountZone d-flex flex-wrap separator-line-vertical">
                                        <div className="thd_soloUp thdCountOne">
                                            <h3 className="count counter-gae">
                                                <CountUp start={0} end={inView ? "74" : 0}/>
                                            </h3>
                                            <p>누적 프로그램 등록 수</p>
                                        </div>

                                        <div className="thd_soloUp thdCountOne">
                                            <h3 className="count counter-hui">
                                                <CountUp start={0} end={inView ? "9581" : 0}/>
                                            </h3>
                                            <p>누적 방문수</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <WorkingProcess process={workingProcess}/>

                <TeamOne/>

            
            </main>
        </Layout>
    );
};

export default About;
