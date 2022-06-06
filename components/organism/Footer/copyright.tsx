import Image from "next/image";
import Link from "next/link";

interface CopyrightProps {
  desc1: string;
  desc2: string;
  cp: string;
}

export default function Copyright(props: CopyrightProps) {
  const { desc1, desc2, cp } = props;
  return (
    <div className="col-lg-4 text-lg-start text-center">
      <Link href="/">
        <a className="mb-30">
          <Image src="/icon/logo.svg" width={60} height={60} />
        </a>
      </Link>
      <p className="mt-30 text-lg color-palette-1 mb-30">
        {desc1}
        <br />
        {desc2}
      </p>
      <p className="mt-30 text-lg color-palette-1 mb-30">{cp}</p>
    </div>
  );
}
