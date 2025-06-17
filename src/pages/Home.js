import ootyImg from "../images/ootyhill.jpg";

export default function Home() {
  return (
    <section className="pt-[109px]">
      <div className="relative w-full mb-4 ">
        <img
          className=" w-full z-50 h-[400px] m-auto py-4"
          src={ootyImg}
          alt="Ooty"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl  mt-6 font-normal italic font-serif text-white">
          Ooty - The Queen of Hill stations
        </h1>
      </div>
      <div className="mb-4 w-[75%] m-auto ">
        <p className="mb-4">
          Ooty, the Queen of Hill stations, welcome you with mesmerising
          meadows, soothing environment, cool weather and a wide array of
          sightseeing places to visit and admire. Each tourist attraction in
          Ooty promises a unique and lively experience that will leave you in
          awe for many days to come. However, if you are wondering what to do in
          Ooty and what to see in Ooty then have a look at the various
          sightseeing places that we have mentioned below. With these
          interesting places to see, you can be sure of having a memorable Ooty
          tour.
        </p>
        <p className="mb-4">
          From nature walks in gardens that makes one wonder whether Paradise,
          as depicted in scriptures of various cultures, have actually been
          derived from such sensory experiences to relaxing over a cup of tea
          from the tea plantations dotting the hillside, only to realize most
          humbly of nature’s gifts as a bountiful provider, the tourist places
          in Ooty can be expected to resuscitate the soul, depleted of its
          spiritual reserves through the trials of everyday existence.
        </p>
        <p className="mb-4">
          Ooty, once the summer capital of Madras Presidency under the British,
          can be safely regarded as “India’s Switzerland”. John Sullivan, the
          then collector of Coimbatore had noted the same in his elaborate
          report on the region, way back in the 19th century. After
          independence, Ooty was developed into a major tourist destination and
          understandably so, given its qualification for the same, owing to
          nature’s abundant blessings in terms of climate, scenic splendour,
          local sights and sounds, its wealth of birds and beasts and of course
          its homegrown beverages of tea and coffee.
        </p>
        <p className="mb-4">
          The majestic “Queen of the Hills” forms part of the Nilgiri Biosphere
          Reserve, reputed for its fragile and exquisite ecosystem. In the
          ecological parlance, it is best known as a “hotspot”, the label
          justifying the designation of the section of the Western Ghats as a
          UNESCO World Heritage site. Ooty has been developed to offer a rare
          glimpse to tourists of the essence of the rest of the reserve, much of
          which are out of bounds as part of conservation efforts.
        </p>
        <p className="mb-4">
          The wooded hills of the Western Ghats with its canopy of unkempt,
          untouched shola vegetation interspersed with maintained and cultivated
          tea gardens offer a rare view of the symbiotic existence of man and
          nature where one can see and learn what sustainable use of natural
          resources should ideally look like. The botanical garden and rose
          garden curate much of the bounty of nature at Ooty to mesmerizing
          effect. One has to see the tourist places in Ooty it to believe in the
          gifts of life, otherwise often conveniently overlooked.
        </p>
      </div>
    </section>
  );
}
