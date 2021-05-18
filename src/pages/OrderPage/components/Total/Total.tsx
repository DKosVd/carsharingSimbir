import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { isBaseImg } from "../../../../utils/isBase64";
import { prepareDate } from "../../../../utils/prepareDate";
import s from "./total.module.css";

interface ITotalProps {
  changeActiveBtn: (value: boolean) => void;
}

const Total = ({ changeActiveBtn }: ITotalProps) => {
  const result = useSelector(
    (state: RootState) => state.status.choseStatus?.id
  );
  const car = useSelector((state: RootState) => state.order.choseCar);
  const dlc = useSelector((state: RootState) => state.order.choseDLC);

  useEffect(() => {
    changeActiveBtn(false);
  }, []);

  if (!car) {
    return null;
  }

  return (
    <div className={s.total__main}>
      <div className={s.total__order}>
        <div className={s.total__order_info}>
          {result === "5e26a191099b810b946c5d89" && (
            <h1 className={s.total__order__result}>Ваш заказ подтверждён</h1>
          )}
          <h4 className={`${s.total__order_info_title}`}>{car.name}</h4>
          {car?.number && (
            <span
              className={`${s.total__order__info_number} ${s.total__order_info_elem}`}
            >
              <span className={s.total__order__info__number_mr}>
                {" "}
                {car.number[0]}{" "}
              </span>
              <span className={s.total__order__info__number_mr}>
                {" "}
                {car.number.slice(1, 4)}{" "}
              </span>
              <span className={s.total__order__info__number_mr}>
                {car.number.slice(4, 6)}
              </span>
              <span>{car.number.slice(6)}</span>
            </span>
          )}
          {(dlc?.dlc?.fullOil?.isPresent || car.tank) && (
            <span className={s.total__order_info_elem}>
              <b>Топливо </b>&nbsp;{" "}
              {dlc?.dlc?.fullOil?.isPresent ? `100` : car.tank}%
            </span>
          )}
          <span className={s.total__order_info_elem}>
            <b>Доступна с </b>&nbsp;{" "}
            {prepareDate(new Date(dlc?.startDate as Date))}
          </span>
        </div>
        <div className={s.total__order_img}>
          <div
            className={s.total__order__img}
            style={{ backgroundImage: `url(${isBaseImg(car.thumbnail.path)})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Total;
