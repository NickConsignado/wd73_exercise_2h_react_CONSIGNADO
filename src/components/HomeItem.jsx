import { useDispatch } from "react-redux";

function HomeItem(props) {
  const { title,id,user, description, url,category} = props

  return (
    <>
    
    <div id={id} className="card m-5" style={{
      width: '30rem'
    }}>
      <img src={url} className="card-img-top" alt="..." />
      <div className="card-body">
                    {/* The title of the photo */}
        <h5 className="card-title">{title}</h5>
                    {/* The description of the photo */}
        <p className="card-text">{description}</p>
        {/* The id of the user who owns the photo */}
        <p> {user}</p>
      </div>
    </div>
    </>
  )
}

export default HomeItem
