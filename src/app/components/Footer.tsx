import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaDiscord, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" mt-auto bg-[#171717]">
      {/* Logo and Text*/}
      <section className="flex justify-between items-center mx-10 mb-3 border-b-[1px]">
      <div className="flex justify-center items-center gap-4">
        <div>
          <Link href="/">
            <Image src="/logo.png" width={100} height={50} alt="logo" />{" "}
          </Link>
        </div>
        <div className="text-[#ededed]">
          <h3>StarkFantsy League</h3>
        </div>
      </div>

      {/* social icons */}
      <div className="text-[#ededed] mr-9">
        <h3 className=" md:text-sm ml-2" >Community</h3>
        <ul className="flex gap-3 text-2xl ">
          <li ><Link href="/"> <FaGithub  /> </Link><span className="sr-only">GitHub</span></li>
          <li><Link href="/"> <FaTelegram/> </Link><span className="sr-only">Telegram</span></li>
          <li><Link href="/"> <FaDiscord/> </Link><span className="sr-only">Discord</span></li>
        </ul>
      </div>
      </section>
      <div className="flex text-[#ededed] justify-center items-center mb-5">
        <small>Copyright &copy; 2025 - Starkfantasy League</small>
      </div>
    </footer>
  );
};

export default Footer;
