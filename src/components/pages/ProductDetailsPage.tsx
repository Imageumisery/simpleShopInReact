import { useParams } from "react-router-dom";
type Props = {}

const ProductDetailsPage = (props: Props) => {
    const params = useParams<"id">();
  return (
    <div>{params.id}</div>
  )
}

export default ProductDetailsPage