import { toast } from "react-toastify";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.error("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:items-end md:items-center lg:w-[35%] w-full mt-10"
    >
      <input type="text" placeholder="Full Name" className="input" />
      <input type="email" placeholder="Email Address" className="input" />
      <textarea placeholder="Message" className="input" rows={10}></textarea>
      <div className="flex justify-center  lg:w-[80%] w-full">
        <button
          type="submit"
          className="bg-blue-500 shadow-lg shadow-blue-50 text-white px-12 py-4 rounded-2xl text-sm font-bold xl:text-lg whitespace-nowrap"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
