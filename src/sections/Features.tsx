import { Feature } from "@/components/Feature";

const pricingPlans = [
  {
    title: "Coding Basics",
    price: "₹4,999",
    description: "Learn the fundamentals of programming with beginner-friendly lessons.",
    perks: [
      "Introduction to programming",
      "Learn Python, Java, JavaScript",
      "Hands-on coding exercises",
      "1 on 1 personal guidence"
    ]
  },
  {
    title: "Dev Starter Pack",
    price: "₹9,999",
    description: "Master coding basics plus essential development tools and practices.",
    perks: [
      "Advanced Python & JavaScript",
      "HTML & CSS responsive design",
      "React.js & Next.js basics",
      "Basic backend with Node.js"
    ]
  },
  {
    title: "Full Web Development",
    price: "₹29,999",
    description: "Build complete, functional websites with modern technologies.",
    perks: [
      "Advanced frontend & backend skills",
      "Modern design frameworks & tools",
      "UX/UI psychology principles",
      "Full-stack capstone project"
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
