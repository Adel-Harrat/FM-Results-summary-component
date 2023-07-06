import "./App.css";

const summary = [
  {
    id: 1,
    bgColor: "bg-primary-light-red/10",
    color: "text-primary-light-red",
    icon: "icon-reaction.svg",
    title: "Reaction",
    score: 80,
  },
  {
    id: 2,
    bgColor: "bg-primary-orangey-yellow/10",
    color: "text-primary-orangey-yellow",
    icon: "icon-memory.svg",
    title: "Memory",
    score: 92,
  },
  {
    id: 3,
    bgColor: "bg-primary-green-teal/10",
    color: "text-primary-green-teal",
    icon: "icon-verbal.svg",
    title: "Verbal",
    score: 61,
  },
  {
    id: 4,
    bgColor: "bg-primary-cobalt-blue/10",
    color: "text-primary-cobalt-blue",
    icon: "icon-visual.svg",
    title: "Visual",
    score: 72,
  },
];

function App() {
  return (
    <div className="font-primary min-h-screen grid place-items-center">
      <main className="md:max-w-2xl md:grid md:grid-cols-2 md:shadow-2xl md:rounded-3xl md:overflow-hidden">
        <section className="bg-gradient-to-bl from-gradients-light-slate-blue-bg to-gradients-persian-blue p-10 rounded-b-3xl">
          <p className="text-center text-neutral-light-lavender pb-5">
            Your Result
          </p>

          <div className="bg-gradient-to-b from-gradients-violet-blue to-gradients-persian-blue/25 rounded-full w-48 h-48 grid place-items-center mx-auto">
            <p className="text-center text-6xl font-bold text-white">
              76{" "}
              <span className="block text-base font-thin text-neutral-light-lavender">
                of 100
              </span>
            </p>
          </div>

          <h1 className="text-center text-white font-bold text-2xl mt-5">
            Great
          </h1>
          <p className="text-neutral-light-lavender text-center mt-3 leading-6">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>

        <section className="p-6">
          <h1 className="text-2xl font-bold text-neutral-dark-gray-blue">
            Summary
          </h1>

          <ul className="mt-5 flex flex-col space-y-5">
            {summary.map((item) => (
              <li
                key={item.id}
                className={`${item.bgColor} flex items-center justify-between space-x-3 rounded-lg p-3`}
              >
                <img src={item.icon} alt={item.title} />
                <p className={`${item.color} flex-1`}>{item.title}</p>

                <p className="text-neutral-500 text-sm">
                  <span className="text-neutral-dark-gray-blue text-base">
                    {item.score}
                  </span>{" "}
                  / 100
                </p>
              </li>
            ))}
          </ul>

          <button className="mt-10 rounded-full bg-neutral-dark-gray-blue py-4 text-white font-bold w-full hover:bg-gradient-to-b from-gradients-light-slate-blue-bg to-gradients-light-royal-blue-bg transition-all duration-500">
            Continue
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
