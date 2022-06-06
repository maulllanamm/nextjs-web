import ReachedItem from "../../molecules/ReachedItem";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem title="Players Top Up" value="290M+" />
          <ReachedItem title="Games Available" value="2.500" />
          <ReachedItem title="Happy Players" value="99,9%" />
          <ReachedItem title="Rating Worldwide" value="4.7" />
        </div>
      </div>
    </section>
  );
}
