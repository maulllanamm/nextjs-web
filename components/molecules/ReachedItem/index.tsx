interface ReachedItemProps {
  title: string;
  value: string;
}
export default function ReachedItem(props: ReachedItemProps) {
  const { title, value } = props;
  if (title === "Players Top Up") {
    return (
      <div className="me-lg-35 ms-lg-35">
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
          {value}
        </p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">
          {title}
        </p>
      </div>
    );
  } else {
    return (
      <>
        <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
        <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
        <div className="me-lg-35 ms-lg-35">
          <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
            {value}
          </p>
          <p className="text-lg text-lg-start text-center color-palette-2 m-0">
            {title}
          </p>
        </div>
      </>
    );
  }
}
