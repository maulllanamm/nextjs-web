interface TopUpItemProps {
  type: "desktop" | "mobile";
  data: {
    voucher: {
      name: String;
      thumbnail: String;
      category: {
        name: String;
      };
    };
  };
}

export default function TopUpItem(props: TopUpItemProps) {
  const ROOT_IMAGE = process.env.NEXT_PUBLIC_IMAGE;
  const { type, data } = props;
  console.log(data);
  if (type === "desktop") {
    return (
      <div className="pb-50 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
          {data.voucher.name}
        </h2>
        <p className="text-lg color-palette-2 mb-0">
          {data.voucher.category.name}
        </p>
      </div>
    );
  } else {
    return (
      <div className="row align-items-center">
        <div className="col-md-12 col-4">
          <img
            src={`${ROOT_IMAGE}/${data.voucher.thumbnail}`}
            width="280"
            height="380"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-md-12 col-8 d-md-none d-block">
          <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
            {data.voucher.name}
          </h2>
          <p className="text-sm color-palette-2 text-start mb-0">
            {data.voucher.category.name}
          </p>
        </div>
      </div>
    );
  }
}
