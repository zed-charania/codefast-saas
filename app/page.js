import ButtonLogin from "@/Components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Zed";
  return (
    <main>
      <section className="bg-base-200">
        <div className="flex justify-between items-center p-4 px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">CodeFast</div>
          <div className="space-x-4 hidden max-md:block">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 lg:text-5xl">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>

        <ButtonLogin isLoggedIn={isLoggedIn} />
      </section>
    </main>
  );
}
