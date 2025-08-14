"use client";

export function ContactButton() {
  return (
          <button
        className="bg-white text-black py-2 px-4 rounded-lg font-medium hover:bg-gray-200"
        onClick={() => window.open("https://wa.me/9517925660", "_blank")}
      >
        Contact
      </button>
  );
}

export function SaveSpotButton() {
  const scrollToWaitlist = () => {
    const section = document.getElementById("waitlist-id");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="bg-white text-black py-3 px-5 rounded-lg font-medium hover:bg-gray-200"
      onClick={scrollToWaitlist}
    >
      Save your spot
    </button>
  );
}


export function SendMessageButton() {
  return (
          <button
        className="mt-6 bg-white text-black py-2 px-4 rounded-lg font-medium hover:bg-gray-200"
        onClick={() => window.open("https://wa.me/9517925660", "_blank")}
      >
        Send Message
      </button>
  );
}
