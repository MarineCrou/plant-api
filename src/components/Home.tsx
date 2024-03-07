import React from "react";
import PlantCard from "./PlantCard";
function Home() {
  const [plant, setPlant] = React.useState(null);
  const [searchPlant, setSearchPlant] = React.useState("");
  async function fetchPlants() {
    const resp = await fetch(
      `/api/plants/search?token=${import.meta.env.VITE_API_KEY}`
    );
    const plantData = await resp.json();
    setPlant(plantData || null);
  }
  React.useEffect(() => {
    fetchPlants();
  }, []);
  function handleChange(e: any) {
    setSearchPlant(e.currentTarget.value);
  }
  function handleSearchClick() {
    return plant?.find((plants) => {
      return plants.name.toLowerCase().includes(searchPlant.toLowerCase());
    });
  }

  return (
    // add a HERO (bulma) for full width of the page
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body has-text-centered">
        <div className="container">
          <div className="card py-5 has-background-light">
            <p className="title">Learn About Your Favorite Plants 🌸</p>
            <p className="subtitle">Type it's usual name 🌱</p>
            {/* Create an Input for a Seach Bar to look for plant (should be common
        name (or scientific) name) */}
          </div>
          <br />
          <div className="level-item">
            <input
              className="input is-primary is-rounded is-focused"
              placeholder="Enter Plant Name :seedling:"
              type="text"
              value={searchPlant}
              onChange={handleChange}
            />
            {/* Add a Button (Search) to look for the plant */}
            <button
              className="button is-success is-rounded"
              onClick={handleSearchClick}
            >
              Find your plant !
            </button>
          </div>
        </div>
        {/*Add a plant card, where the looked-up plant will be feature */}
        <div>
          {plant && (
            <PlantCard
              key={plant.id}
              commonName={plant.common_name}
              img={plant.image_url}
              family={plant.family}
              scientificName={plant.scientific_name}
            />
          )}
        </div>
      </div>
    </section>
  );
  // add background image - Plant (in img)
  // Need to create the HTML :
  // card should fature => plantCard (where common Name resonates with searched name)
  // if time, add a random generated card (see if possible without using numbers)
}
export default Home;
