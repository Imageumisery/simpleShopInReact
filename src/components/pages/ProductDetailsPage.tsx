import { useEffect, useState } from "react";
import { ProductType } from "../../types/ProductType";
import { useParams } from "react-router-dom";

type Props = {};

const ProductDetailsPage = (props: Props) => {

  const [product, setProduct] = useState<ProductType | null>(null);
  const {id} = useParams();
  useEffect(() => {
        fetchData().catch(Error);        
      }, []);
      async function fetchData() {
        await fetch("/mock.json")
        .then((res) => res.json())
        .then((response) => {
          setProduct(response?.find((item:ProductType) => item.id === id))
        })
        .catch(Error);
      }   
    return (
        <div className="cart section-center">
            <div className="images"> 
                <img src={product?.image} alt="" className="cartImage" />
            </div>
            <div className="cart-content">
                <h2 className="cart-title">{product?.name}</h2>
                <p className="cart-price">{product?.price} ₽</p>
                <p className="cart-description">{product?.description}</p>
                <b>Made by <b className="cart-company">{product?.company}</b></b>
                <hr />
                <button className="addToCartButton">Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
