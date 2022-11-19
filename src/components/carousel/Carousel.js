import React, { useState } from "react";
import next from "../../assets/images/icon-next.svg";
import previous from "../../assets/images/icon-previous.svg";

const Carousel = () => {
    const [index, setIndex] = useState(1);

    const nextImage = () => {
        index === 4 ? setIndex(1) : setIndex(index => index + 1);
    }

    const previousImage = () => {
        index === 1 ? setIndex(4) : setIndex(index => index - 1);
    }

    return (
        <div className="sneakers-carousel">
            <div className={`sneakers-view sneakers-${index}`}>
                <span className="previous" onClick={previousImage}>
                    <img src={previous} alt="previous" />
                </span>
                <span className="next" onClick={nextImage}>
                    <img src={next} alt="next" />
                </span>
            </div>
        </div>
    );
};

export default Carousel;
