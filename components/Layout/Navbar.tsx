import Link from "next/link";


const Navbar = () => {

  return (<nav className="w-full h-12 bg-blue-400 ">
    <ul className="flex space-x-3 ">
      <Link href={"/"}>
        <li>Home</li>
      </Link>
      <Link href={"/superheroes"}>
        <li>Superheroes</li>
      </Link>
      <Link href={"/characters"}>
        <li>Characters</li>
      </Link>
      <Link href={"/parallel_queries"}>
        <li>Parallel Queries</li>
      </Link>
      <Link href={"/dependent_queries"}>
        <li>Dependent Queries</li>
      </Link>
      <Link href={"/paginated_queries"}>
        <li>Paginated Queries</li>
      </Link>
      <Link href={"/infinite_queries"}>
        <li>Infinite Queries</li>
      </Link>
      <Link href={"/add_hero"}>
        <li>Add Heroes</li>
      </Link>
      <Link href={"/zustand"}>
        <li>Zustand</li>
      </Link>
    </ul>
  </nav>)
}


export default Navbar;