import Head from 'next/head';
import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import BannerSix from '../components/banners/BannerSix';
import Layout from '../components/layouts/Layout';
import ServiceSection from '../components/services/ServiceSection';
import ServiceData from '../data/Services.json';
import HeadMeta from 'components/custom/HeadMeta';

const Services = () => {
    const [activeServiceSection, setActiveServiceSection] = useState("");
    const [servicesByCategory, setServicesByCategory] = useState([]);

    const getServicesByCategory = () => {
        const filteredServices = ServiceData.reduce((acc, service) => {
            const categoryIndex = acc.findIndex(
                (item) => item.name == service.category
            );

            if (service.category !== "Default" && service.category !== "Our capabilities" && service.category !== "Our ways" && service.category !== "Our values") {
                if (categoryIndex > -1) {
                    acc[categoryIndex].services.push(service);
                } else {
                    acc.push({
                        name: service.category,
                        services: [service],
                    });
                }
            }

            return acc;
        }, []);

        setServicesByCategory(filteredServices);
    };

    const changeActiveSection = (sectionId) => {
        setActiveServiceSection(sectionId);
    };

    const handleStickyNav = () => {
        const scrollNavigationArea = document.querySelector(
                ".thdSNT"
            ),
            scrollNav = document.querySelector(".thdSNSN"),
            sticky = scrollNavigationArea?.offsetTop;

        if (window.pageYOffset >= sticky) scrollNav?.classList.add("is-affixed");
        else scrollNav?.classList.remove("is-affixed");
    };

    const removeStickyNav = () => {
        const scrollNav = document.querySelector(".thdSNSN");
        scrollNav?.classList.remove("is-affixed");
    };

    const {ref, inView} = useInView({
        threshold: 0,
    });

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (inView) {
                handleStickyNav();
            } else {
                removeStickyNav();
            }
        });
    }, [inView]);

    useEffect(() => {
        getServicesByCategory();
    }, []);

    return (
        <Layout>
           <HeadMeta
                title="가이드 - 더한다"
                description="더한다 기관 계정을 위한 가이드입니다. 기관 등록을 통해 게시물 관리, 신청 관리, 사용자 관리, 문의 관리까지 한번에 해결하세요. "
                url="https://thehanda.net/about"
            />

            <main className="thehanda-wrapper">
                <BannerSix/>

                <div
                    ref={ref}
                    className="thdSNTA thdSNT position-relative bg-color-white"
                >
                    <nav className="thdSNSN navbar navbar-example2">
                        <ul className="nav thdANP justify-content-center sidebar__inner">
                            <li className="nav-item">
                                <a
                                    className={`nav-link thdASA ${
                                        activeServiceSection === "section1" ? "active" : ""
                                    }`}
                                    href="#section1"
                                >
                                    회원가입
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link thdASA ${
                                        activeServiceSection === "section2" ? "active" : ""
                                    }`}
                                    href="#section2"
                                >
                                    더한다 소개
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link thdASA ${
                                        activeServiceSection === "section3" ? "active" : ""
                                    }`}
                                    href="#section3"
                                >
                                    프로그램 유형
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link thdASA ${
                                        activeServiceSection === "section4" ? "active" : ""
                                    }`}
                                    href="#section4"
                                >
                                    프로그램 생성
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link thdASA ${
                                        activeServiceSection === "section5" ? "active" : ""
                                    }`}
                                    href="#section5"
                                >
                                    프로그램 관리
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link thdASA ${
                                        activeServiceSection === "section6" ? "active" : ""
                                    }`}
                                    href="#section6"
                                >
                                    알림 보내기
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link thdASA ${
                                        activeServiceSection === "section7" ? "active" : ""
                                    }`}
                                    href="#section7"
                                >
                                    사용자 데이터 확인
                                </a>
                            </li>
                         
                        </ul>
                    </nav>

                    {servicesByCategory?.map((categoryServices, index) => (
                        <ServiceSection
                            key={`service-section-${index}`}
                            sectionId={`section${index + 1}`}
                            sectionTitle={categoryServices.name}
                            sectionSubtitle="services"
                            sectionBg={
                                index % 2 === 0 ? "bg-color-white" : "bg-color-lightest"
                            }
                            serviceType={categoryServices.name}
                            services={categoryServices.services}
                            changeActiveSection={changeActiveSection}
                        />
                    ))}
                </div>

                {/* <CallToActionOne/> */}
            </main>
        </Layout>
    );
};

export default Services;
