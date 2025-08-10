import { AccordionItem } from "@/components/AccordionItem";


const items = [
  {
    question: "Is there any study material or assignments provided?",
    answer:
      "Yes, We provide study notes, practice exercises, and mini-projects to help reinforce your learning between sessions.",
  },
  {
    question: "How do you handle scheduling and rescheduling?",
    answer:
      "Scheduling is flexible and based on mutual convenience. If you need to reschedule, please inform me at least 12 hours in advance so we can adjust accordingly.",
  },
  {
    question: "Can I switch or upgrade my course package later?",
    answer:
      "Absolutely! You can upgrade to a higher-level course or add more modules anytime during your learning journey. We’ll adjust your fees accordingly.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept payments via UPI (Google Pay, PhonePe, Paytm), cash (for in-person sessions), and online bank transfers. If you prefer another payment method, just let me know!",
  },
];

export const FAQs = () => {
  return (
    <section id="faqs" className="text-white py-[72px] md:py-24 bg-gradient-to-b from-[#5f2ca8] to-black">
      <div className="container">
        <h2 className="text-5xl md:text-6xl lg:max-w-[648px] mx-auto text-center font-bold tracking-tighter">Frequently asked questions</h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem key={question} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
