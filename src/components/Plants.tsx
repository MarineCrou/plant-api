import PlantCard from "./PlantCard";

function Plants() {
  const [plants, updatePlants] = React.useState([]);
  // need to add a fetch await async function ?
  //Feature all Plants In this page (may be a little heavy, so might have to limit to 100 for eg)
  // A card/plant, that should feature :
  // 1. common Name data.map(item => console.log(item.image_url)
  // 2. Scientific Name (data.map(item => console.log(item.scientific_name))
  // 3. Image (data.map(item => console.log(item.common_name)
  // 4. Family (data.map(plant => console.log(plant.family))
  // Would be great to add a filter,
  // filter by Family - Should be doable
  // to filter by edible plants (but on a different URL ...)

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {plants?.map((plant) => {
            return (
              <PlantCard
                plantId={plant.id}
                commonName={plant.common_name}
                img={plant.image_url}
                scientificName={plant.scientific_name}
                family={plant.family}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Plants;
