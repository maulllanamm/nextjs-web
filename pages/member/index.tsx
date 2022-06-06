import OverviewContent from "../../components/organism/OverviewContent";
import jwtDecode from "jwt-decode";
import Sidebar from "../../components/organism/Sidebar";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}

interface getServerSideProps {
  req: {
    cookies: {
      token: String;
    };
  };
}

export async function getServerSideProps({ req }: getServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const image = process.env.NEXT_PUBLIC_IMAGE;
  userFromPayload.avatar = `${image}/${userFromPayload.avatar}`;

  return {
    props: {
      user: userFromPayload,
    },
  };
}
