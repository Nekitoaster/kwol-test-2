import BackAside from "./components/BackAside/BackAside";
import CarCardInfo from "./components/CarCardInfo/CarCardInfo";
import CarParkCarousel from "./components/CarParkCarousel/CarParkCarousel";
import ContactCard from "./components/ContactCard/ContactCard";
import PayCardInfo from "./components/PayCardInfo/PayCardInfo";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <>
      <BackAside />
      <Wrapper>
        <div className="vertical-cards">
          <CarCardInfo />
          <PayCardInfo />
        </div>
        <div className="horizontal-cards">
          <CarParkCarousel />
          <ContactCard />
        </div>
      </Wrapper>
    </>
  );
}

export default App;
