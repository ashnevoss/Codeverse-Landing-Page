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
  return (
          <button
        className="bg-white text-black py-3 px-5 rounded-lg font-medium hover:bg-gray-200"
        onClick={() => window.open("https://wa.me/9517925660", "_blank")}
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
