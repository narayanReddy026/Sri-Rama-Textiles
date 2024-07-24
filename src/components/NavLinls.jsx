export default function NavLinks({ onClick }) {
  const links = [
    { name: "Home" },
    { name: "About Us", href: "#about-us" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <div className="md:flex md:gap-14">
      {links.map((link) => (
        <div key={link.name}>
          <a
            href={link.href || "#"}
            className="px-3 text-left text-white font-poppins text-lg md:cursor-pointer"
            onClick={onClick}
          >
            <h1 className="py-7">{link.name}</h1>
          </a>
        </div>
      ))}
    </div>
  );
}
