const Product = ({ name, price }) => {
  return (
    <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1">
      <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
      <p className="text-gray-700 font-medium">Price: ${price}</p>
    </div>
  );
};

export default Product;
