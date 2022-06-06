import Ilustration from "./ilustration";
import Title from "./title";

export default function Story() {
  return (
    <section className="story pt-50 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
          <Ilustration />
          <Title />
        </div>
      </div>
    </section>
  );
}
