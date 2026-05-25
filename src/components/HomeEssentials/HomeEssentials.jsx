import "./HomeEssentials.css";

import img1 from "../../assets/images/homeessentials/home1.png";
import img2 from "../../assets/images/homeessentials/home2.png";
import img3 from "../../assets/images/homeessentials/home3.png";
import img4 from "../../assets/images/homeessentials/home4.png";
import img5 from "../../assets/images/homeessentials/home5.png";
import img6 from "../../assets/images/homeessentials/home6.png";

const homeItems = [
  {
    id: 1,
    image: img1,
    title: "HOME DECOR ITEMS",
    price: "FROM ₹60",
  },
  {
    id: 2,
    image: img2,
    title: "CLEANING SUPPLIES",
    price: "FROM ₹175",
  },
  {
    id: 3,
    image: img3,
    title: "STEEL BOTTLE",
    price: "FROM ₹125",
  },
  {
    id: 4,
    image: img4,
    title: "DIGITAL SPOON WEIGHT SCALE",
    price: "FROM ₹160",
  },
  {
    id: 5,
    image: img5,
    title: "MULTI PURPOSE HOOKS",
    price: "FROM ₹1.2",
  },
  {
    id: 6,
    image: img6,
    title: "Saree Blanket Cover",
    price: "FROM ₹70",
  },
];

const HomeEssentials = () => {
  return (
    <section className="home-essentials">
      <div className="home-essentials-container">
        
        <h2 className="home-title">Home Essentials</h2>

        <div className="home-grid">
          {homeItems.map((item) => (
            <div className="home-card" key={item.id}>
              
              <div className="home-image-box">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="home-content">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeEssentials;