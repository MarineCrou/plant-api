import React from "react";
import PlantCard from "./PlantCard";

function Plants() {
  const [plants, updatePlants] = React.useState([]);

  async function fetchPlants() {
    try {
      const resp = await fetch(
        "/api/plants?token=" + import.meta.env.VITE_API_KEY
      );
      if (!resp.ok) {
        throw new Error(`API call failed with status: ${resp.status}`);
      }
      const plantData = await resp.json();
      updatePlants(plantData.data); // Access the 'data' array from the response
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
          {plants?.map((plant) => {
            return (
              <PlantCard
                key={plant.id}
                // 1. common Name data.map(item => console.log(item.image_url)
                commonName={plant.common_name}
                // 3. Image (data.map(item => console.log(item.common_name)
                img={plant.image_url}
                // 2. Scientific Name (data.map(item => console.log(item.scientific_name))
                scientificName={plant.scientific_name}
                // 4. Family (data.map(plant => console.log(plant.family))
                family={plant.family}
              />
            );
          })}
        </div>
        <button className="button is-success">See More</button>
      </div>
    </section>
  );
}

export default Plants;
