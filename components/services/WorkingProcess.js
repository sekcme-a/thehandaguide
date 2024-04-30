import Tilt from "react-parallax-tilt";
import SectionTitle from "../common/SectionTitle";
import Image from "next/image";

const WorkingProcess = ({process}) => {
    return (
        <div className="thd_workZone thdsecGap thd_G4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            title={process.title}
                            subtitle="process"
                            description={process.description}
                            color="extra08-color"
                            alignment="center"
                            styleClass="mb--100 mb_sm--40 mb_md--40"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {process.strategies?.map((strategy, index) => (
                            <div
                                key={`strategy-${index}`}
                                className={
                                    strategy.id % 2 === 0
                                        ? "thd_wpo mb--100 text-start mb_md--50 mb_sm--40"
                                        : "thd_wpo mb--100 mb_md--50 mb_sm--40"
                                }
                            >
                                <div
                                    className={
                                        strategy.id % 2 === 0
                                            ? "thumbnail order-1 order-lg-2"
                                            : "thumbnail"
                                    }
                                >
                                    <div className="image thdImg_as">
                                        <Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
                                            <Image width={492} height={497} src={strategy.image} alt="Process Images" style={{objectFit:"contain"}}/>
                                        </Tilt>
                                    </div>
                                </div>
                                <div
                                    className={
                                        strategy.id % 2 === 0
                                            ? "content order-2 order-lg-1"
                                            : "content"
                                    }
                                >
                                    <div className="inner">
                                        <div className="section-title">
                                            <span className="thd_no">{strategy.id}</span>
                                            <span className={`thd-stit ${strategy.highlightColor}`}>
                                              {strategy.subtitle}
                                            </span>
                                            <h2 className="title" style={{wordBreak:"keep-all"}}>{strategy.title}</h2>
                                            <p className="thdsubt2">{strategy.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;
