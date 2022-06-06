import Image from "next/image";
import Link from "next/link";
import SignupForm from "../components/organism/SignupForm";

export default function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <Link href="/index">
              <a className="navbar-brand">
                <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
              </a>
            </Link>
          </div>
          <SignupForm />
        </form>
      </div>
    </section>
  );
}