import ButtonLogin from "@/Components/ButtonLogin";
import FAQ from "@/Components/FAQ";
export default function Home() {
  const isLoggedIn = true;
  const name = "Zed";
  return (
    <main>
      {/* Header */}
      <section className="bg-base-200">
        <div className="flex justify-between items-center p-4 px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">CodeFast</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
            <a className="link link-hover" href="#faq">
              FAQ
            </a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>

      {/* Hero */}
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
      {/* Pricing */}
      <section className="bg-base-200 py-32" id="pricing">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm text-center uppercase text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl font-extrabold mb-12 lg:text-4xl text-center">
            A pricing that adapts to your needs
          </h2>
          <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-extrabold">$19</div>
              <div className="text-sm font-medium uppercase opacity-60">
                /month
              </div>
            </div>

            <ul className="list-disc list-inside space-y-2">
              <li>Collect customer feedback</li>
              <li>Unlimited boards</li>
              <li>24/7 support</li>
            </ul>
            <ButtonLogin
              isLoggedIn={isLoggedIn}
              name={name}
              extraStyle="w-full"
            />
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-32 px-8 max-w-3xl mx-auto" id="faq">
        <p className="text-sm text-center uppercase text-primary mb-4">FAQ</p>
        <h2 className="text-3xl font-extrabold mb-12 lg:text-4xl text-center">
          Frequently asked questions
        </h2>
        <ul className="space-y-6 max-w-lg mx-auto">
          {[
            {
              question: "What do I get exactly?",
              answer: "Loreum Ipsum",
            },
            {
              question: "What do I get exactly?",
              answer: "Loreum Ipsum",
            },
            {
              question: "What do I get exactly?",
              answer: "Loreum Ipsum",
            },
          ].map((qa) => (
            <FAQ key={qa.question} qa={qa} />
          ))}
        </ul>
      </section>
    </main>
  );
}
