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
    <div className="column is-one-quarter-desktop is-one-third-tablet is-mobile">
      <Link to="/">
        <div className="card">
          <div className="card-header has-background-success has-text-centered">
            <div className="card-header-title">{commonName}</div>
          </div>
          <div className="card-image">
            <figure className="image image is-square">
              <img src={img} alt={commonName} />
            </figure>
          </div>
          <div className="card-content">
            <p>
              <strong> Scientific Name: </strong>
              {scientificName}{" "}
            </p>
            <p>
              {" "}
              <strong> Family Species:</strong> <em> {family}</em>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PlantCard;
