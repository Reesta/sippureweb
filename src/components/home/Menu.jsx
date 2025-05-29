import React from 'react';

const products = [
  { name: "Hibiscus Tea", price: 200, image: "MenuHIbis.png" },
  { name: "Iced Matcha", price: 300, image: "MatchaMenu.png" },
  { name: "Peach Iced Tea", price: 250, image: "PeachIced.png" },
  { name: "Chamomile Tea", price: 250, image: "ChamomileTea.png" },
  { name: "Butterfly Tea", price: 300, image: "MenuButterfly.png" },
  { name: "Herbal Tea", price: 250, image: "Herbal tea.png" },
];

const addToCart = (name, price) => {
  alert(`Added "${name}" to cart for Rs ${price}`);
};

const Menu = () => {
  return (
    <section className="py-8 px-12 text-center">
      <h2 className="text-4xl mb-8 text-[#333] font-semibold">Menu</h2>

      <div className="flex flex-wrap justify-center gap-[80px]">
        {products.map(({ name, price, image }, idx) => (
          <div
            key={idx}
            className="
              bg-white rounded-lg overflow-hidden 
              w-[300px] shadow-md 
              transition-transform duration-300
              hover:-translate-y-[5px]
              pb-[15px]
              "
          >
            <div className="h-[400px] flex items-center justify-center overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 text-[20px] font-semibold text-[#333]">{name}</div>
            <div className="flex justify-between items-center px-5 mt-3">
              <span className="text-[18px] font-bold text-gray-600">Rs {price}</span>
              <button
                onClick={() => addToCart(name, price)}
                className="
                  bg-[#8ec06c] text-[#333] font-bold py-2 px-4 rounded-full cursor-pointer
                  transition-colors duration-300
                  hover:bg-[#74a758] hover:text-white
                "
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
