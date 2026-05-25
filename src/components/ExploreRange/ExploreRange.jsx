
import "./ExploreRange.css";

import img1 from "../../assets/images/exploarrange/range1.png";
import img2 from "../../assets/images/exploarrange/range2.png";
import img3 from "../../assets/images/exploarrange/range3.png";
import img4 from "../../assets/images/exploarrange/range4.png";
import img5 from "../../assets/images/exploarrange/range5.png";
import img6 from "../../assets/images/exploarrange/range6.png";
import img7 from "../../assets/images/exploarrange/range7.png";
import img8 from "../../assets/images/exploarrange/range8.png";
import img9 from "../../assets/images/exploarrange/range9.png";
import img10 from "../../assets/images/exploarrange/range10.png";



const categories = [
  {
    id: 1,
    title: "UNDER",
    price: "₹20",
    image:img1,
  },
  {
    id: 2,
    title: "UNDER",
    price: "₹40",
    image: img2,
  },
  {
    id: 3,
    title: "UNDER",
    price: "₹30",
    image: img3,
  },
  {
    id: 4,
    title: "UNDER",
    price: "₹55",
    image: img4,
  },
  {
    id: 5,
    title: "UNDER",
    price: "₹999",
    image: img5,
  },
  {
    id: 6,
    title: "UNDER",
    price: "₹349",
    image: img6,
  },
  {
    id: 7,
    title: "UNDER",
    price: "₹499",
    image: img7,
  },
  {
    id: 8,
    title: "UNDER",
    price: "₹30",
    image: img8,
  },
  {
    id: 9,
    title: "UNDER",
    price: "₹18",
    image: img9,
  },
  {
    id: 10,
    title: "UNDER",
    price: "₹80",
    image: img10,
  },
];

const ExploreRange = () => {
  return (
    <section className="explore-section">
      <h2 className="explore-title">Explore Our Range</h2>

      <div className="explore-wrapper">
        {categories.map((item) => (
          <div className="range-card" key={item.id}>
            {/* LEFT IMAGE CIRCLE */}
            <div className="circle-image">
              <img src={item.image} alt="" />
            </div>

            {/* RIGHT CONTENT */}
            <div className="range-content">
              <h3>{item.title}</h3>
              <h2>{item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreRange;