import Link from "next/link";
import { useRouter } from "next/router";
import { FiGithub } from "react-icons/fi";

export default function Header() {
  const links = [
    { title: "Mural", path: "/" },
    // { title: "Atividades", path: "/activities" },
  ];

  const router = useRouter();

  return (
    <header className="bg-black  h-14 flex flex-row justify-between items-center px-6 md:px-8 lg:px-16 border-b-gray100 border-b">
      <div className="border-dashed border-gray border-2 px-3 rounded-md">
        <span> Logo </span>
      </div>

      <nav>
        {links.map((l) => (
          <Link passHref href={l.path} key={l.path}>
            <a className={`${router.pathname === l.path ? "text-white" : "text-weak"} mx-2 cursor-pointer`}>
              {l.title}
            </a>
          </Link>
        ))}
      </nav>

      <div>
        <Link passHref href={"#"}>
          <a className="text-weak rounded-full hover:text-normal cursor-pointer duration-200">
            <FiGithub size={24} />
          </a>
        </Link>
      </div>
    </header>
  );
}
