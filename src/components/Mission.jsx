export default function Mission() {
  return (
    <div
      id="mission"
      className="flex flex-col items-center p-6 md:p-20  bg-gradient-to-t from-orange-100 to-orange-300 text-white font-poppins"
    >
      <h1 className=" mb-4 texct-xl md:text-5xl tracking-wide text-black">
        Our Mission
      </h1>
      <h2 className=" mb-8  text-gray-900 text-2xl md:text-4xl font-bold">
        Quality Is Our Priority
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <img
          src="mission1.jpg"
          alt="shirt Pic"
          className="w-40 h-40 md:w-60 md:h-60 rounded-full transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black"
        />
        <img
          src="mission2.jpg"
          alt="shirt Pic"
          className="w-40 h-40 md:w-60 md:h-60 rounded-full transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black"
        />
      </div>
      <p className="max-w-5xl text-center text-black text-base md:text-lg ">
        At <b>Sri Rama Textiles</b>, we believe in delivering the finest quality
        fabrics to our customers. Our mission is rooted in a commitment to
        excellence, where every piece of fabric is crafted with the utmost care
        and attention.{" "}
        <b>
          <i>
            We use only pure, farm-grown cotton, sourced directly from trusted
            farmers
          </i>
        </b>{" "}
        who share our dedication to sustainable practices. Our natural color
        dyes are derived from the richest sources, ensuring vibrant, lasting
        colors without compromising the environment. This blend of purity and
        sustainability allows us to create textiles that are not only beautiful
        but also gentle on the skin and the planet. Experience the difference
        with Sri Rama Textiles, where quality is always our top priority.
      </p>
    </div>
  );
}
