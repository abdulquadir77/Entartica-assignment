import LoactionCard from "./components/cards/LoactionCard";
import AdventureSquardCarousel from "./components/carousels/AdventureSquardCarousel";
import Navbar from "./components/common/Navbar";
import TopSectionVideoPlay from "./components/home/TopSectionVideoPlay";
import StayAndPlayAtWonderla from "./components/video-card/StayAndPlayAtWonderla";
import WonderLanders from "./components/video-card/WonderLanders";

function App() {
  return (
    <div className="w-full">
      <Navbar/>
      <TopSectionVideoPlay/>
      {/* <LoactionCard/> */}
      <AdventureSquardCarousel />
      <StayAndPlayAtWonderla/>
      <WonderLanders/>
    </div>
  );
}

export default App;
