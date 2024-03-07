function Home() {
  return (
    // add a HERO (bulma) for full width of the page
    <section className="hero is-link is-fullheight-with-navbar is-success">
      <div className="hero-body has-text-centered">
        <div className="container">
          <p className="title">Learn About Your Favorite Plant 🌱 </p>
          <p className="subtitle">Type in it's "common name" 🌱 </p>
          {/* Create an Input for a Seach Bar to look for plant (should be common
        name (or scientific) name) */}
          <input type="text" />
          {/* Add a Button (Search) to look for the plant */}
          <button>Find your plant !</button>
        </div>
        {/*Add a card, where the looked-up plant will be feature */}
      </div>
    </section>
  );

  // add background image - Plant (in img)
  // Need to create the HTML :

  // card should fature => plantCard (where common Name resonates with searched name)
  // if time, add a random generated card (see if possible without using numbers)
}

export default Home;
