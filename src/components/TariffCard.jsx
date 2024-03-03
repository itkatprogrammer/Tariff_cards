import st from "./TariffCard.module.scss";

export default function TariffCard(props) {
  const handleClick = () => {
    props.onClick(props.index);
  };

  const cardStyle = {
    transform: props.isClicked ? "scale(1.1)" : "scale(1)",
    marginRight: props.isClicked ? "9px" : "0",
    boxShadow: props.isClicked
      ? "5px 0px 20px rgba(0, 0, 0, 0.2), 0px 8px 10px rgba(0, 0, 0, 0.2)"
      : "none",
  };

  return (
    <div onClick={handleClick} className={st.card} style={cardStyle}>
      <p
        style={{
          backgroundColor: props.colorName,
        }}
        className={st.nameProperty}
      >
        {props.name}
      </p>
      <h2
        style={{
          backgroundColor: props.colorPrice,
        }}
        className={st.priceProperty}
      >
        {props.price}
      </h2>
      <p className={st.speedProperty}>{props.speed}</p>
      <p className={st.limitProperty}>{`Объем включенного трафика
  не ограничен`}</p>
    </div>
  );
}
