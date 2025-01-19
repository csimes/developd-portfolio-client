import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-medium-orange text-soft-white text-center py-4">
      <p className="m-auto">
        programmed to perfection by&nbsp;{" "}
        <Link
          href="/"
          className="no-underline text-dark-gray"
        >
          developd
        </Link>
        &nbsp; &copy; 2025
      </p>
    </footer>
  );
};

export default Footer;
