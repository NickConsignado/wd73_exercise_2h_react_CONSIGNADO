import { useEffect, useState } from "react"
import ProductItem from "../components/ProductItem"
import { useSelector } from "react-redux"

function ProductGallery() {
  const [products, setProducts] = useState([])
  const cartItemCount = useSelector(state => state.cartItemCount)
  
  useEffect(() => {
    document.title = 'Products'
  }, [])

  useEffect(() => {
    fetch('https://api.slingacademy.com/v1/sample-data/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
      })
  }, [setProducts])

  return (
    <>
      <h3>Items: <span className="fw-bold">{cartItemCount}</span></h3>
      
      <div className="d-flex flex-wrap">
        {
          products.map(
            product => <ProductItem
              key={product.id}
              id={product.id}
              price={product.price}
              title={product.name}
              description={product.description}
              thumbnail={product.photo_url}
              category={product.category}
              created={product.created_at}
              updated={product.updated_at}
              
            />
          )
        }
      </div>
    </>
  )
}

export default ProductGallery
