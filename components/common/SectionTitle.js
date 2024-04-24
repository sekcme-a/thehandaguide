import {useEffect, useState} from 'react';
import {SplitText} from './SplitText';

const SectionTitle = (
    {
        title,
        subtitle,
        description,
        color,
        alignment,
        titleClass,
        styleClass,
    }
) => {
    const [textAlignment, setTextAlignment] = useState('text-center');

    useEffect(() => {
        if (alignment === 'center') setTextAlignment('text-center');
        else if (alignment === 'right') setTextAlignment('text-end');
        else setTextAlignment('text-start');
    }, [alignment, setTextAlignment]);

    return (
        <div className={`section-title ${textAlignment} ${styleClass}`}>
            {subtitle && (
                <span
                    className={`thd-stit ${color}`}
                    data-aos="aos-fade-in-up"
                    data-aos-duration="1000"
                >
          <SplitText>{subtitle}</SplitText>
        </span>
            )}

            {title && (
                <h3
                    className={`title ${titleClass}`}
                    data-aos="aos-fade-in-up"
                    data-aos-duration="1000"
                >
                    <SplitText>{title}</SplitText>
                </h3>
            )}

            {description && (
                <p
                    className="thdsubt2"
                    data-aos="aos-fade-in-up"
                    data-aos-duration="1000"
                >
                    <SplitText>{description}</SplitText>
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
