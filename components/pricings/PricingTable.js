import { useState } from "react";

const PricingTable = ({ column, pricingTableClass, buttonClass, data }) => {
  const [priceFilterValue, setPriceFilterValue] = useState("monthly");

  const handleChange = (e) => {
    setPriceFilterValue(e.target.value);
  };

  return (
    <div className={column}>
      <div className={pricingTableClass}>
        <div className="axil-pricing-inner">
          <div className="pricing-header">
            <h4>{data.title}</h4>
            <p style={{wordBreak:"keep-all"}}>{data.subtitle}</p>
            <div className="price-wrapper">
              <div className="price">
                <h2 className="currency" style={{fontSize:"34px"}}>{data.currency}</h2>
                <h2 className="heading headin-h3" style={{fontSize:"36px"}}>
                  {priceFilterValue === "monthly"
                    ? data.price.monthly
                    : data.price.yearly}
                </h2>
                <span>
                  {priceFilterValue === "monthly" ? "/달" : "/년"}
                </span>
              </div>
              <div className="date-option">
                <select value={priceFilterValue} onChange={handleChange}>
                  <option value="yearly">년 요금제</option>
                  <option value="monthly">달 요금제</option>
                </select>
              </div>
            </div>
            {/* <div className="pricing-get-button">
              <a className={`axil-button btn-large ${buttonClass}`} href="#">
                <span className="button-text">Get Started Today</span>
                <span className="button-icon"></span>
              </a>
            </div> */}
            <span className="subtitle">{data.subtitleTwo}</span>
          </div>
          <div className="pricing-body">
            <div className="inner">
              <ul className="list-style">
                {data.features?.map((feature, index) => (
                  <li key={`pricing-feature-${index}`} style={{whiteSpace:"pre-wrap", lineHeight:"1.2", margin:"25px 0", wordBreak:"keep-all"}}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
