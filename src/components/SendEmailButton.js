import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from 'react-dom';

function SendEmailButton() {

    const { pending } = useFormStatus();//this feature needs to be implemented at one level so it can be worked, that's why we made the send email button a whole complete component

  return (
    <button
      type="submit"
      className="m-auto group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gradient-to-br from-[#dac24a] to-[#ac8c31] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:from-[#ffeb87] hover:to-[#c8b03a] active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:from-[#c79e55] dark:to-[#c79e55]"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}

export default SendEmailButton;
