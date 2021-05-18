import React from "react";
import "../../../../styles/slider.css";
import { CurrentSlide } from "./CurrentSlide";
import { ActiveDots } from "./ActiveDots";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

export function Slider() {
  const [active, setActive] = React.useState<number>(0);
  const SliderElems = useSelector(
    (state: RootState) => state.lang.text.sliderElems
  );
  const handlerChangeSlide = (e: React.MouseEvent<HTMLDivElement>) => {
    let currentIdx = Number(e.currentTarget.getAttribute("data-change"));
    if (active === 0 && currentIdx === -1) {
      setActive(SliderElems.length - 1);
      return;
    }
    if (active === SliderElems.length - 1 && currentIdx === 1) {
      setActive(0);
      return;
    }
    setActive(active + currentIdx);
    return;
  };

  const handlerChangeActiveDot = (idx: number) => {
    setActive(idx);
  };

  return (
    <div className="slider">
      <div className="slider__img">
        <img src={SliderElems[active].image} alt="Машина" />
      </div>
      <div className="slider__arrows">
        <div
          className="slider__arrows_left"
          data-change="-1"
          onClick={handlerChangeSlide}
        >
          {" "}
          <div className="slider__arrow__left">
            <ChevronLeft />
          </div>{" "}
        </div>
        <div className="slider-content">
          <CurrentSlide
            title={SliderElems[active].title}
            text={SliderElems[active].text}
            colorButton={SliderElems[active].colorButton}
          />
          <ActiveDots active={active} onClick={handlerChangeActiveDot} />
        </div>
        <div
          className="slider__arrows_right"
          data-change="1"
          onClick={handlerChangeSlide}
        >
          {" "}
          <div className="slider__arrow__right">
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
