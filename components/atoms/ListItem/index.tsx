import Link from "next/link";
interface ListItemProps {
  item: string;
}

export default function ListItem(props: ListItemProps) {
  const { item } = props;
  return (
    <li className="mb-6">
      <Link href="">
        <a className="text-lg color-palette-1 text-decoration-none">{item}</a>
      </Link>
    </li>
  );
}
