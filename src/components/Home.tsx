import React from "react";
import PlantCard from "./PlantCard";

function Home() {
  const [plant, setPlant] = React.useState(null);
  const [searchPlant, setSearchPlant] = React.useState("");

  async function fetchPlants() {
    const resp = await fetch(
      "/api/plants?token=" + import.meta.env.VITE_API_KEY
    );
    const plantData = await resp.json();
    const matchPlant = plantData.data.find(
      (plant) => plant.common_name.toLowerCase() === searchPlant.toLowerCase()
    );
    setPlant(matchPlant || null);
  }

  React.useEffect(() => {
    fetchPlants();
  }, []);

  function handleChange(e: any) {
    setSearchPlant(e.currentTarget.value);
  }

  function handleSearchClick() {
    fetchPlants(searchPlant);
  }

  return (
    // add a HERO (bulma) for full width of the page
    <section className="hero is-link is-fullheight-with-navbar is-success">
      <div className="hero-body has-text-centered">
        <div className="container">
          <p className="title">Learn About Your Favorite Plant </p>
          <p className="subtitle">Type in it's "common name" </p>
          {/* Create an Input for a Seach Bar to look for plant (should be common
        name (or scientific) name) */}
          <div is-one-quarter-desktop is-mobile>
            <input
              class="input is-primary "
              placeholder="Enter Plant Name 🌱"
              type="text"
              value={searchPlant}
              onChange={handleChange}
            />
            {/* Add a Button (Search) to look for the plant */}
            <button onClick={handleSearchClick}>Find your plant !</button>
          </div>
        </div>
        {/*Add a plant card, where the looked-up plant will be feature */}
        <div>
          {plant && (
            <PlantCard
              plantId={plant.id}
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
