import Footer from "./Footer";
import Menuitem from "./menuitem";
import Profile from "./profile";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface SidebarProps {
  activeMenu: "overview" | "transactions" | "settings";
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  const router = useRouter();
  const onLogout = () => {
    Cookies.remove("token");
    router.push("/sign-in");
  };
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <Menuitem
            title="Overview"
            ic="ic-menu-overview"
            active={activeMenu === "overview"}
            href="/member"
          />
          <Menuitem
            title="Transcation"
            ic="ic-menu-transaction"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <Menuitem title="Messages" ic="ic-menu-messages" href="/member" />
          <Menuitem title="Card" ic="ic-menu-card" href="/member" />
          <Menuitem title="Rewards" ic="ic-menu-rewards" href="/member" />
          <Menuitem
            title="Settings"
            ic="ic-menu-settings"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <Menuitem title="Log Out" ic="ic-menu-logout" onClick={onLogout} />
        </div>
        <Footer />
      </div>
    </section>
  );
}
