/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaRedditSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const SocialShareButtons = ({ url, title }) => {
  return (
    <div className="w-full flex justify-between">
      <Link
        target="_blank"
        to={`https://www.facebook.com/dialog/share?app_id=155730254067884&display=popup&href=${url}`}
      >
        <FaFacebookSquare className="text-[#3b5998] w-12 h-auto" />
      </Link>

      <Link
        target="_blank"
        to={`https://www.twitter.com/intent/tweet?url=${url}`}
      >
        <FaTwitterSquare className="text-[#00acee] w-12 h-auto" />
      </Link>

      <Link
        target="_blank"
        to={`https://www.reddit.com/submit?url=${url}&title=${title}`}
      >
        <FaRedditSquare className="text-[#ff4500] w-12 h-auto" />
      </Link>

      <Link target="_blank" to={`https://api.whatsapp.com/send?text=${url}`}>
        <FaWhatsappSquare className="text-[#25d366] w-12 h-auto" />
      </Link>
    </div>
  );
};

export default SocialShareButtons;
