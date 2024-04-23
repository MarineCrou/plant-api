import React from "react";
import { Link } from "react-router-dom";
import PlantCard from "./PlantCard";
import Plants from "./Plants";

function Plants2() {
  const [plants, updatePlants] = React.useState([] as any);
  const [page, updatePage] = React.useState([] as any);

  async function fetchPlants() {
    try {
      const resp = await fetch(
        "/api/plants?token=" + import.meta.env.VITE_API_KEY + "&page=2" + page
      );
      if (!resp.ok) {
        throw new Error(`API call failed with status: ${resp.status}`);
      }
      const plantData = await resp.json();
      updatePlants(plantData.data);
    } catch (error) {
      console.error("Failed to fetch plants:", error);
    }
  }

  React.useEffect(() => {
    fetchPlants();
  }, []);

  //Feature all Plants In this page (may be a little heavy, so might have to limit to 100 for eg)

  // Would be great to add a filter,
  // filter by Family - Should be doable
  // to filter by edible plants (but on a different URL ...)

  return (
    <section className="section">
      <div className="container">
        {/*   // A card/plant, that should feature : */}
        <div className="columns is-multiline">
          {plants?.map((plant: any) => {
            return (
              <PlantCard
                key={plant.id}
                // 1. common Name data.map(item => console.log(item.image_url)
                commonName={plant.common_name}
                // 3. Image (data.map(item => console.log(item.common_name)
                img={plant.image_url}
                // 2. Scientific Name (data.map(item => console.log(item.scientific_name))
                year={plant.year}
                scientificName={plant.scientific_name}
                // 4. Family (data.map(plant => console.log(plant.family))
                family={plant.family}
              />
            );
          })}
        </div>
        <Link to="/plants">
          <button className="button is-success-light mr-4">
            Previous Page
          </button>
        </Link>
        <button className="button is-success">Next Page</button>
      </div>
    </section>
  );
}

export default Plants2;
