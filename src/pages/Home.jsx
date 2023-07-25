import { useEffect, useState } from "react"
import HomeItem from "../components/HomeItem"
function Home() {
  const [photos, setData] = useState([])
  useEffect(() => {
    document.title = 'Home'
  }, [])


  useEffect(() => {
    fetch('https://api.slingacademy.com/v1/sample-data/photos')
      .then(res => res.json())
      .then(data => {
        setData(data.photos)
        console.log(data.photos)

      })
  }, [setData])




  return (
    <>
    <div className="d-flex flex-wrap">
        {
          photos.map(
            data => <HomeItem
              key={data.id}
              id={data.id}
              url={data.url}
              title={data.title}
              user={data.user}
              description={data.description}
              
            />
          )
        }
      </div>
    </>
  )
}

export default Home
