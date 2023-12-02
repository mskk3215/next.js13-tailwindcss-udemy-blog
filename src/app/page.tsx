import Image from "next/image";

export default function Home() {
  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <ArticleList />
      </section>

    </div>
  );
}
