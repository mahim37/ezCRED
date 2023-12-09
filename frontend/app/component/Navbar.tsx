import Link from "next/link";

function NavBar() {
  return (
    <div className="">
      <div className="nav">
        <Link href="/">
          <img src="logo.png" className="img" />
        </Link>
        <div className="ml-auto flex space-x-4">
          <Link href="/pay" className="nav-item ">
            Pay
          </Link>
          <Link href="/check" className="nav-item ">
            check
          </Link>
          {/* Additional items can be added here if needed */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
