import {
  ArrowRightIcon,
  CircleStackIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { LocateIcon, MapPinIcon, TrophyIcon, UserPlus2 } from "lucide-react";
export default function About() {
  return (
    <div className="bg-neutral-900">
      <div
        id="about-us"
        className="flex justify-between items-center p-6 md:p-20 "
      >
        <div className="font-poppins text-white md:text-left space-y-4 md:space-y-6">
          <h3 className="text-xl md:text-5xl tracking-wide text-orange-700">
            About Us
          </h3>
          <h1 className="text-2xl md:text-4xl font-bold">
            Making Every Fabric Count...
          </h1>
          <p className="md:text-lg leading-relaxed">
            Welcome to our world, where passion and creativity drive excellence.
            Our dedicated team transforms ideas into reality, delivering
            top-quality products and services. With years of experience and a
            commitment to perfection, we have become a trusted partner for
            individuals and businesses alike. Join us as we push boundaries and
            create lasting impressions together.
          </p>
          <a
            href="#mission"
            className="flex items-center text-orange-500 space-x-2"
          >
            <spam>Learn More</spam>
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
        <img
          src="AboutUs.jpg"
          alt="Lady pic"
          className="w-40 h-40 md:h-80 md:w-80 rounded-full mt-6 md:mt-0 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-500"
        />
      </div>
      <div className="flex text-white px-20 md:justify-around justify-between font-poppins ">
        <div>
          <UserPlus2 className="md:w-20 md:h-20 w-10 h-10 text-orange-500 text-justify" />
          <span className="md:text-lg text-sm">100+ Clients</span>
        </div>
        <div>
          <CircleStackIcon className="md:w-20 md:h-20 w-10 h-10 text-orange-500 text-justify" />
          <span className="md:text-lg text-sm">20+ Products</span>
        </div>
        <div>
          <TrophyIcon className="md:w-20 md:h-20 w-10 h-10 text-orange-500 text-justify" />
          <span className="md:text-lg text-sm">#1 Brand</span>
        </div>
        <div>
          <MapPinIcon className="md:w-20 md:h-20 w-10 h-10 text-orange-500 text-justify" />
          <span className="md:text-lg text-sm">5+ Locations</span>
        </div>
        <div>
          <UserGroupIcon className="md:w-20 md:h-20 w-10 h-10 text-orange-500 text-justify" />
          <span className="md:text-lg text-sm">500+ Workers</span>
        </div>
      </div>
    </div>
  );
}
