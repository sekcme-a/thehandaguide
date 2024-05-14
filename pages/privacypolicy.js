import Head from 'next/head';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Layout from '../components/layouts/Layout';
import { TERMS_DATA } from 'data/TERMS_DATA';

const PrivacyPolicy = () => {
    return (
        <Layout>
            <Head>
                <title>개인정보 처리방침 || 더한다 - 우리가족 행복비서</title>
            </Head>

            <Breadcrumb title="개인정보 처리방침" current="개인정보 처리방침"/>

            <main className="page-wrappper">
                <div className="privacy-policy-area ax-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="content">
                                    <div className="inner">
                                        <div className="section-title">
                                            {/* <h4 className="title">
                                                This Privacy policy was published on April 26th&sbquo;
                                                2018.
                                            </h4> */}
                                        </div>
                                        {
                                          TERMS_DATA.privacy.map((item, index) => (
                                            <div key={index} style={{marginTop: "40px"}}>
                                              <h3>{item.title}</h3>
                                              <p className="subtitle-2 mb--40">
                                                {item.text}
                                              </p>
                                            </div>
                                          ))
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default PrivacyPolicy;
