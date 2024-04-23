
import BannerSix from '../../../components/banners/BannerSix';
import Layout from '../../../components/layouts/Layout';
import ServiceData from '../../../data/Services.json';
import {camelCaseToDashed} from '../../../helpers/utilities';
import MainInfo from "components/custom/MainInfo"
import TextProgress from "components/custom/TextProgress"
import HeadMeta from 'components/custom/HeadMeta';

export async function getStaticPaths() {
    return {
        paths: ServiceData?.map(({slug, category}) => ({
            params: {
                slug: slug,
                category: camelCaseToDashed(category)
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const {params} = context;
    const service = ServiceData.find(({slug}) => slug.toString() === params.slug);

    return {
        props: {
            service,
        },
    };
}

const ServiceDetails = ({service}) => {
    return (
        <Layout>
           <HeadMeta
                title={`더한다 - ${service.title}`}
                description={`${service.title} 기관 등록을 통해 게시물 관리, 신청 관리, 사용자 관리, 문의 관리까지 한번에 해결하세요. `}
            />
            <div className="thd_Wr">
                <BannerSix
                    title={service.title}
                    subtitle={service.description}
                    bannerStyleClass="thd-banner-bcZone breadcrumb-style-2 single-service pt--170 pb--70 theme-gradient"
                    bannerTitleClass="title"
                    leftColumn="col-lg-6 order-2 order-lg-1 mt_md--30 mt_sm--20"
                    rightColumn="col-lg-6 order-1 order-lg-2"
                    bannerImageOne="/images/slider/single-service-02.png"
                    bannerImageTwo="/images/slider/single-service-01.svg"
                    isServiceDetails={true}
                />

                {/* <AboutTwo/> */}
                <MainInfo data={service.mainInfo} />
                <TextProgress data={service.textProgress} />

                {/* <WorkingProcess process={service.process}/> */}

                {/* <PortfolioTwo/> */}

                {/* <CallToActionOne/> */}
            </div>
        </Layout>
    );
};

export default ServiceDetails;
