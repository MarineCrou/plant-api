import React from "react";
import PlantCard from "./PlantCard";
function Home() {
  const [plant, setPlant] = React.useState(null);
  const [searchPlant, setSearchPlant] = React.useState("");

  async function fetchPlants() {
    const resp = await fetch(
      `/api/plants/search?token=${
        import.meta.env.VITE_API_KEY
      }&q=${searchPlant}`
    );
    const plantData = await resp.json();
    console.log(plantData);

    if (plantData.data && plantData.data.length > 0) {
      setPlant(plantData.data[0]);
    } else {
      setPlant(null);
    }
  }

  React.useEffect(() => {
    if (searchPlant) {
      fetchPlants();
    }
  }, [searchPlant]);

  function handleChange(e: any) {
    setSearchPlant(e.currentTarget.value);
  }
  function handleSearchClick() {}

  return (
    <>
      {/*add a HERO (bulma) for full width of the page */}
      <section className="hero is-half-height-with-navbar">
        <div className="hero-body has-text-centered pb-1">
          <div className="container">
            <div className="card py-5 has-background-light">
              <p className="title">
                Discover the World of Plants: <br />
                Your Favorites Unveiled 🌸
              </p>
              <p className="subtitle">
                Type Their Common Names to Begin Your Journey 🌱
              </p>
              {/* Create an Input for a Seach Bar to look for plant (should be common
        name (or scientific) name) */}
            </div>
            <br />
            <div className="level-item">
              <input
                className="input is-primary is-rounded is-focused"
                placeholder="Plant Name 🌴"
                type="text"
                value={searchPlant}
                onChange={handleChange}
                id="plantName"
                name="plantName"
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
        </div>
      </section>
      {/*Add a plant card, where the looked-up plant will be featured */}
      <div className="columns is-multiline is-mobile is-centered is-one">
        <div className="column is-half">
          <div className="column">
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
      </div>
    </>
  );
  // ♦️ card should fature => plantCard (where common Name resonates with searched name)
  // ⏰ if time =>  add a random generated card (see if possible without using numbers)
}
export default Home;
