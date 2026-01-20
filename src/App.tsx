import AdventureSquardCarousel from "./components/carousels/AdventureSquardCarousel";
import StayAndPlayAtWonderla from "./components/video-card/StayAndPlayAtWonderla";
import WonderLanders from "./components/video-card/WonderLanders";

function App() {
  return (
    <div className="w-full">
      <AdventureSquardCarousel />
      <StayAndPlayAtWonderla/>
      <WonderLanders/>
    </div>
  );
}

export default App;
