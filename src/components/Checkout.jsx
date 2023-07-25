import { useSelector } from "react-redux"

function Checkout (){
    const cart = useSelector(state => state.cart)
    return(
        <>
        <h3>Cart</h3>
        <div  className="border shadow col-lg-4 m-3">
            {
                cart.map(
                    cartItem =>{
                        return (
                      
            <div key={cartItem.id} className="d-flex border justify-content-between m-3">
                <h4>{cartItem.title}</h4>
                <div>
                    <p className="mt-2">Price: ${cartItem.price}</p>
                    <p>count:{cartItem.count}</p>
                </div>
                <button className="btn btn-primary">Remove Item</button>
            </div> 
              )
            }
        )
    }
        </div>
        </>
    )
}
export default Checkout
