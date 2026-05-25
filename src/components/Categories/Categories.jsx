import "./Categories.css";

import img1 from "../../assets/images/categories/category1.png";
import img2 from "../../assets/images/categories/category2.png";
import img3 from "../../assets/images/categories/category3.png";
import img4 from "../../assets/images/categories/category4.png";
import img5 from "../../assets/images/categories/category5.png";
import img6 from "../../assets/images/categories/category6.png";
import img7 from "../../assets/images/categories/category7.png";
import img8 from "../../assets/images/categories/category8.png";
import img9 from "../../assets/images/categories/category9.png";
import img10 from "../../assets/images/categories/category10.png";
import img11 from "../../assets/images/categories/category11.png";
import img12 from "../../assets/images/categories/category12.png";



const categories = [
  {
    id: 1,
    title: "New Arrivals",
    image: img1,
  },
  {
    id: 2,
    title: "Summer",
    image: img2,
  },
  {
    id: 3,
    title: "Deal of the Day",
    image: img3,
  },
  {
    id: 4,
    title: "Kitchen & Dining",
    image: img4,
  },
  {
    id: 5,
    title: "Car & Motorbike",
    image: img5,
  },
  {
    id: 6,
    title: "Gardening",
    image: img6,
  },
  {
    id: 7,
    title: "Jewellery",
    image: img7,
  },
  {
    id: 8,
    title: "Gifts",
    image: img8,
  },
  {
    id: 9,
    title: "Electronics",
    image: img9,
  },
  {
    id: 10,
    title: "Home Essentials",
    image: img10,
  },
  {
    id: 11,
    title: "Kids & Baby",
    image: img11,
  },
  {
    id: 12,
    title: "Health & Beauty",
    image: img12,
  },

];

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="categories-container">
        <h2 className="categories-heading">Top Categories</h2>

        <div className="categories-grid">
          {categories.map((item) => (
            <div className="category-card" key={item.id}>
              <div className="category-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="category-image"
                />
              </div>

              <h3 className="category-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;