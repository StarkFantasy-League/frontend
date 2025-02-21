import NavBar from "../components/navBar";

export default function NavBarTest() {
  return (
    <div className="flex gap-3 flex-col mt-10">
      <NavBar />
      <NavBar active />
    </div>
  );
}
