import "./App.css";
import Accordian from "./components/accordian";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import MenuList from "./components/tree-view/menu-list";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModelTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutoComplete from "./components/Search-autocomplete with api";
import TicTacToe from "./components/tic-tact-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";

// import ImageSlider from "./image-slider";

function App() {
  return (
    <div className="App">
      {/* accordian */}
      {/* <Accordian /> */}
      {/* RandomColor */}
      {/* <RandomColor/> */}

      {/* satr rating components */}
      {/* <StarRating noOfStars={7} /> */}

      {/* image-slider */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"} */}

        {/* load-more-data */}
        {/* <LoadMoreData /> */}
        

        {/* menu-list */}
        {/* <TreeView menus={menus} /> */}

        {/* <QRCodeGenerator> */}
        {/* <QRCodeGenerator/> */}
        {/* <LightDarkMode/> */}
        {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
           {/* <TabTest /> */}
           {/* <ModelTest/> */}
           {/* <GithubProfileFinder/> */}
           {/* <SearchAutoComplete/> */}

           <TicTacToe/>
        {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* <UseFetchHookTest/> */}
      {/* <UseOnclickOutsideTest/> */}
      {/* <UseWindowResizeTest/> */}
      {/* <ScrollToTopAndBottom/>
      <ScrollToSection/> */}

    </div>
  );
}

export default App;
