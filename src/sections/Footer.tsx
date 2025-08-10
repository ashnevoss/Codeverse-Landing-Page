import InstaIcon from "@/assets/icons/insta.svg";
import XSocialIcon from "@/assets/icons/x-social.svg";
import TiktokIcon from "@/assets/icons/tiktok.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <section className="bg-black text-white/60 py-5 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div className="text-center select-none">&copy; 2024 Your Company, Inc. All rights reserved</div>
          <ul className="flex justify-center gap-2.5">
            <li className="hover:text-white transition duration-200 cursor-pointer"><XSocialIcon /></li>
            <li className="hover:text-white transition duration-200 cursor-pointer"><InstaIcon /></li>
            <li className="hover:text-white transition duration-200 cursor-pointer"><TiktokIcon /></li>
            <li className="hover:text-white transition duration-200 cursor-pointer"><YoutubeIcon /></li>
          </ul>
        </div>
      </div>
    </section>
  );
};
