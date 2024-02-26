// import "./App.css";
import TariffCard from "./components/TariffCard";
import st from "./App.module.scss";
import data from "./data";

function App() {
  return (
    <div className={st.cards}>
      {data.map((item, index) => (
        <TariffCard
          key={index}
          name={item.name}
          price={item.price}
          speed={item.speed}
          colorName={item.colorName}
          colorPrice={item.colorPrice}
        />
      ))}
    </div>
  );
}

export default App;
