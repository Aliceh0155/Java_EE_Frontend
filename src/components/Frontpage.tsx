
import DisplayAllCharacters from "./DisplayAllCharacters";
import GetFavourites from "./GetFavourites";

const Frontpage = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("/src/assets/images/wp8151821-harry-potter-aesthetic-pc-wallpapers.jpg")',
          backgroundAttachment: "fixed",
          zIndex: -1,
        }}
      />
      <div className="relative z-10">
      <section className="py-10">
          <GetFavourites />
        </section>
        <section className="py-10">
          <DisplayAllCharacters />
        </section>
      </div>
    </div>
  );
};

export default Frontpage;
