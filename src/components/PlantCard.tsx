import { Link } from "react-router-dom";

// interface IPlantCard {
//   plantId: number;
//   commonName: string;
//   img: string;
//   scientificName: string;
//   family: string;
// }

function PlantCard({ commonName, img, scientificName, family }) {
  // 1. scientific_name (data.map(item => console.log(item.scientific_name)) //https://trefle.io/api/v1/plants?token=04iSo523ENYq47fJNfcsuVYQexCi3Sklt4MoxAmN7j4
  // 2. family (data.map(plant => console.log(plant.family)) //https://trefle.io/api/v1/plants?token=04iSo523ENYq47fJNfcsuVYQexCi3Sklt4MoxAmN7j4
  // 3. edible (boolean) ? // https://trefle.io/api/v1/plants/+ ID OR PLANTNAME ?token=04iSo523ENYq47fJNfcsuVYQexCi3Sklt4MoxAmN7j4
  // 4. Where from ?

  return (
    <div className="column is-one-quarter-desktop is-mobile">
      <Link to="/">
        <div className="card">
          <div className="card-header">
            {/* Common Name (top left corner) (data.map(item => console.log(item.common_name) */}
            <div className="card-header-title">{commonName}</div>
          </div>
          {/* img (beneath common name - left side) (data.map(item => console.log(item.image_url)) // https://trefle.io/api/v1/plants?token=04iSo523ENYq47fJNfcsuVYQexCi3Sklt4MoxAmN7j4
  // Right Side : */}
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={img} alt={commonName} />
            </figure>
          </div>
          <div className="card-content">
            <p>Scientific Name: {scientificName} </p>
            <p>Family species : {family}</p>
            {/* <p>Edible ?</p>
            <p>Where from ?</p> */}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PlantCard;
