import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import ExploreRange from "../components/ExploreRange/ExploreRange";
import KitchenAccessories from "../components/KitchenAccessories/Kitchen";
import HomeEssentials from "../components/HomeEssentials/HomeEssentials";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Categories />
      <ExploreRange />
      <KitchenAccessories />
      <HomeEssentials />
      <Footer />
    </>
  );
};

export default Home;