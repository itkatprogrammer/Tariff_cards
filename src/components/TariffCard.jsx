import st from "./TariffCard.module.scss";

export default function TariffCard(props) {
  const cardStyle = {
    transform: "scale(1)",
    marginRight: "0",
    boxShadow: "none",
  };

  if (props.price === "550 руб./мес") {
    cardStyle.transform = "scale(1.1)";
    cardStyle.marginRight = "9px";
    cardStyle.boxShadow =
      "5px 0px 20px rgba(0, 0, 0, 0.2), 0px 8px 10px rgba(0, 0, 0, 0.2)";
  }

  return (
    <div className={st.card} style={cardStyle}>
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
