import { Link } from "react-router-dom";

// interface IPlantCard {
//   plantId: number;
//   commonName: string;
//   img: string;
//   scientificName: string;
//   family: string;
// }

function PlantHomePage({ commonName, img, scientificName, family, year }: any) {
  return (
    <div className="column ">
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
              <strong> Year Discovered: </strong>
              {year}{" "}
            </p>
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

export default PlantHomePage;
