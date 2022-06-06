import Image from "next/image";
import cx from "classnames";
import NumberFormat from "react-number-format";

interface TablerowProps {
  title: string;
  category: String;
  item: String;
  price: number;
  status: String;
  img: string;
}

export default function Tablerow(props: TablerowProps) {
  const { title, category, item, price, status, img } = props;
  const statusClass = cx({
    "float-start icon-status pending": true,
    pending: status === "pending",
    success: status === "success",
    failed: status === "failed",
  });
  return (
    <tr className="align-middle ">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={img}
          width={80}
          height={60}
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          {" "}
          <NumberFormat
            value={price}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        </p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
