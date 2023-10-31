import { Hero, CustomFilter, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className=" padding-x padding-y mt-12 max-width" id="discover">
        <div className="home__text-container">
          {" "}
          <h1 className="text-4xl"> Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className=" home__filters">
          <SearchBar />

          <div className="h0me__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
