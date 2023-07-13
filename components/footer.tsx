import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-medium-orange text-soft-white text-center py-6">
      <p className="m-auto">
        programmed to perfection by&nbsp;{" "}
        <Link href="/">
          <a className="no-underline text-dark-gray">developd</a>
        </Link>
        &nbsp; &copy; 2023
      </p>
    </div>
  );
};

export default Footer;
