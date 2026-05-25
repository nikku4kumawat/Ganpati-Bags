import "./Kitchen.css";

import img1 from "../../assets/images/kitchen/kitchen1.png";
import img2 from "../../assets/images/kitchen/kitchen2.png";
import img3 from "../../assets/images/kitchen/kitchen3.png";
import img4 from "../../assets/images/kitchen/kitchen4.png";
import img5 from "../../assets/images/kitchen/kitchen5.png";
import img6 from "../../assets/images/kitchen/kitchen6.png";

const kitchenData = [
  {
    id: 1,
    image: img1,
    title: "KITCHEN TOOLS",
    price: "₹15",
  },
  {
    id: 2,
    image: img2,
    title: "KITCHEN FREEZER STORAGE",
    price: "₹90",
  },
  {
    id: 3,
    image: img3,
    title: "KITCHEN APPLIANCES",
    price: "₹230",
  },
  {
    id: 4,
    image: img4,
    title: "WATER FLASKS",
    price: "₹180",
  },
  {
    id: 5,
    image: img5,
    title: "KITCHEN Sink",
    price: "₹90",
  },
  {
    id: 6,
    image: img6,
    title: "KITCHEN Knife",
    price: "₹75",
  },
];

function Kitchen() {
  return (
    <section className="kitchen-section">
      <h2 className="kitchen-heading">Kitchen Accessories</h2>

      <div className="kitchen-container">
        {kitchenData.map((item) => (
          <div className="kitchen-card" key={item.id}>
            <div className="kitchen-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="kitchen-content">
              <h3>{item.title}</h3>

              <p>
                FROM <span>{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Kitchen;