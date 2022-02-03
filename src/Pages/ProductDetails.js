import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const param = useParams();
  console.log(param.productId);
  return (
    <>
      <h1>Product Details</h1>
      <h4>{param.productId}</h4>
    </>
  );
};
export default ProductDetails;
