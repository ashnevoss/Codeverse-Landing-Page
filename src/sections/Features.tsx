import { Feature } from "@/components/Feature";

const pricingPlans = [
  {
    title: "Coding Basics",
    price: "₹3,499",
    description: "Learn the fundamentals of programming with beginner-friendly lessons.",
    perks: [
      "Introduction to programming",
      "Hands-on coding exercises",
      "1-on-1 mentorship",
      "Offline or online option"
    ]
  },
  {
    title: "Dev Starter Pack",
    price: "₹6,999",
    description: "Master coding basics plus essential development tools and practices.",
    perks: [
      "Everything in Coding Basics",
      "Basics of multiple languages",
      "Project-based learning",
      "Personalized guidance"
    ]
  },
  {
    title: "Full Web Development",
    price: "₹24,999",
    description: "Build complete, functional websites with modern technologies.",
    perks: [
      "Everything in Dev Starter Pack",
      "Frontend + Backend training",
      "Real-world projects",
      "Portfolio building support"
    ]
  }
];

export const Features = () => {
  return (
    <section id="pricing-area" className="bg-black text-white py-[72px] md:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl md:text-6xl tracking-tighter">
          What we offer -
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            personalized learning, practical exercises, and clear progress tracking — all tailored to you. Learn at your pace, get regular guidance, and see your skills grow with every session.
          </p>
        </div>
        <div className="mt-16 flex flex-col md:flex-row gap-4">
          {pricingPlans.map((plan) => (
            <Feature
              key={plan.title}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              perks={plan.perks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
