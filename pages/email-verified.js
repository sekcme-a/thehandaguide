import Head from 'next/head';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Layout from '../components/layouts/Layout';
import { TERMS_DATA } from 'data/TERMS_DATA';


const EmailVerified = () => {

  return(
    <>
     <Layout hideMenu>
            <Head>
                <title>개인정보 처리방침 || 더한다 - 우리가족 행복비서</title>
            </Head>

            <Breadcrumb 
              emailVerifyPage title="이메일이 인증되었습니다."
              subtitle="이메일이 인증되었습니다. 해당 어플로 돌아가서 로그인을 완료해주세요."
            />
        </Layout>
    </>
  )
}

export default EmailVerified