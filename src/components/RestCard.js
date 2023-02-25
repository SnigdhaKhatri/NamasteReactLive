import {ImgCDNUrl} from "../constant"

const RestCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
    return (
      <div className="card">
        <img src={ ImgCDNUrl + cloudinaryImageId } />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
      </div>
    );
};

export default RestCard