import Image from "next/image";
import data from "../data.json";

export default function Home() {
  return (
    <div className="flex flex-col items-center my-16 mx-8">
      <div className="flex flex-col items-center gap-y-4 w-full">
        <Image
          className="rounded-full"
          src={data.avatar}
          alt={data.name}
          width={96}
          height={96}
        />
        <h1 className="font-bold text-xl leading-7">{data.name}</h1>
      </div>
      <div className="w-full mt-8 flex flex-col gap-y-4">
        {data.links.map(
          (
            {
              href,
              title,
              image,
            }: { href: string; title: string; image?: string },
            index: number
          ) => (
            <LinkCard key={index} href={href} title={title} image={image} />
          )
        )}
      </div>
      <div className="w-full mt-8 flex justify-center gap-x-4">
        {data.social.map(
          ({ href, type }: { href: string; type: string }, index: number) => (
            <Social key={index} href={href} type={type} />
          )
        )}
      </div>
    </div>
  );
}

function Social({ href, type }: { href: string; type: string }) {
  return (
    <a className="text-3xl hover:scale-[1.075]" href={href}>
      <i className={"fa-brands fa-" + type}></i>
    </a>
  );
}

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      className="w-full h-14 px-1 flex justify-between items-center bg-white rounded shadow-neutral-300 shadow-lg transition-transform duration-150 ease-[cubic-bezier(0,0.2,0.5,3)] hover:scale-[1.02]"
      href={href}
    >
      <div className="w-12">
        {image && (
          <Image
            className="rounded"
            src={image}
            alt="link-image"
            width={48}
            height={48}
          />
        )}
      </div>
      <span className="">{title}</span>
      <div className="w-12"></div>
    </a>
  );
}
