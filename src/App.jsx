import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";

export default function App() {
  return (
    <>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Benefits />
      </div>
    </>
  );
}
