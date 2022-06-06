import Copyright from "./copyright";
import Listfooter from "./listfooter";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <Copyright
              desc1="StoreGG membantu gamers"
              desc2="untuk menjadi pemenang sejati"
              cp="Copyright 2021. All Rights Reserved."
            />
            <Listfooter />
          </div>
        </div>
      </footer>
    </section>
  );
}
