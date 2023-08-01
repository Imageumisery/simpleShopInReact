import { useEffect, useState } from "react";
import { ProductType } from "../../types/ProductType";
import { useParams } from "react-router-dom";

type Props = {};

const ProductDetailsPage = (props: Props) => {
  
  const [products, setProducts] = useState<ProductType[]>();
  const [product, setProduct] = useState<ProductType>();
  const {id} = useParams();
  useEffect(() => {
        fetchData().catch(Error);        
      }, []);
      async function fetchData() {
        await fetch(`https://course-api.com/react-store-products/`)
        .then((res) => res.json())
        .then((response) => {
          setProducts(response);
          setProduct(products?.find(item => item.id === parseInt(id)))
        })
        .catch(Error);
      }
      
      console.log(id);
    console.log(product);
    
    
    
    return (
        <div className="cart">
            <div className="images">
                <img src="/public/2.png" alt="" className="cartImage" />
            </div>
            <div className="cart-content">
                <h2 className="cart-title">AAA</h2>
                <p className="cart-description"></p>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
