import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartItemCountReducer";
import { addProductToCart } from "../store/cartReducer";

function ProductItem(props) {
  const { title,id,price, description, thumbnail, category,created, updated} = props
  const dispatch = useDispatch()

  let saleBanner;
  if (created === updated) {
    saleBanner = <span className="fw-bold text-danger">Recently Updated</span>
  }

  function handleClick(){
    dispatch(addToCart(1))
    dispatch(addProductToCart(
      {
        id,
        title,
        price,
    }
    ))

  }
  
  return (
    <>
    
    <div className="card m-5" style={{
      width: '25rem'
    }}>
      
      <img src={thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}{saleBanner}</h5>
        <p className="card-text">{description}</p>
        <p>${price}</p>
        <button className="btn btn-primary" onClick={handleClick} >Add to Cart</button>
      </div>
    </div>
    </>
  )
}

export default ProductItem
