import MainBtn from "../MainBtn";
import FooterTitle from "./FooterTitle";

export default function FooterNewsletter() {
  return (
    <div className="">
      <FooterTitle title="Join Our Newsletter" />
      <p className="mt-7 mb-4 text-[#777]">
        Get Business news, tip and solutions to your problems from our experts.
      </p>
      <form action="" className="space-y-2">
        <input
          type="text"
          placeholder="Enter Email Address"
          className="outline-none py-3 pl-6 border rounded-md w-full"
        />
        <button
          type="submit"
          className="relative z-10 before:absolute before:w-full before:h-full before:bg-black before:-top-full before:left-0 before:-z-10 inline-block px-6 py-3 bg-main-yellow text-white font-bold font-open rounded-md overflow-hidden hover:before:top-0 before:transition-all before:duration-300 before:ease-in-out"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
}
