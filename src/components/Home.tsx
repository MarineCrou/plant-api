import React from "react";
import PlantHomePage from "./PlantHomePage";
function Home() {
  const [plant, setPlant] = React.useState(null as any);
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
        <div className="hero-body has-text-centered">
          <div className="container">
            <div className="card py-5 has-background-light">
              <p className="title">Discover the World of Plants 🌸</p>
              <p className="subtitle">
                Type Their Names to Begin Your Journey 🌱
              </p>
              {/* Create an Input for a Seach Bar to look for plant (should be common
        name (or scientific) name) */}
            </div>
            <br />
            <div className="level-item ">
              <input
                className="input is-primary is-rounded is-focused mr-2"
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
      <section className="section ">
        <div className="columns is-mobile is-centered is-two-third-tablet">
          <div className="column is-one-third">
            {plant && (
              <PlantHomePage
                key={plant.id}
                year={plant.year}
                commonName={plant.common_name}
                img={plant.image_url}
                family={plant.family}
                scientificName={plant.scientific_name}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
  // ♦️ card should fature => plantCard (where common Name resonates with searched name)
  // ⏰ if time =>  add a random generated card (see if possible without using numbers)
}
export default Home;
