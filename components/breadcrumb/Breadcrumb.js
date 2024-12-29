import Link from "next/link";

const Breadcrumb = ({
  title = "Blog",
  root = "Home",
  rootUrl = "/home-01",
  current = "Blog",
  customNav,
  subtitle
}) => {
  return (
    <div className="thd-banner-bcZone thdDefStyle pt--170 pb--70 theme-gradient">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner">
              <ul className="axil-breadcrumb liststyle d-flex">
                {customNav 
                ? 
                <li className="thd_Bitem active">{customNav}</li>
                :
                <>
                  <li className="thd_Bitem">
                    <Link href={rootUrl}>{root}</Link>
                  </li>
                  <li className="thd_Bitem active" aria-current="page">
                    {current}
                  </li>
                </>
                }
              </ul>
              <h1 className="thdT ">{title}</h1>
              {subtitle && <p style={{color:"black"}}>{subtitle}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="shape-images">
        {/* <i className="shape shape-1 icon icon-bcm-01"/> */}
        <i className="shape shape-2 icon icon-bcm-02"/>
        {/* <i className="shape shape-3 icon icon-bcm-03"/> */}
      </div>
    </div>
  );
};

export default Breadcrumb;
