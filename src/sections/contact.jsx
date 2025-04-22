import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
// service_89ad658
import useAlert from '../hooks/alert';
import Alert from '../component/alert';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_89ad658",
        "template_si7mcax",
        {
          from_name: form.name,
          to_name: 'Dureti',
          from_email: form.email,
          reply_to: form.email,
          to_email: 'dureti104@gmail.com',
          message: form.message,
        },
       "oiJhzCG_qdStJg0RQ",
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0  min-h-screen" />

        <div className=" max-w-xl relative z-10 sm:px-10 px-5 py-10 ">
          <h3 className="sm:text-4xl text-3xl font-semibold text-gray-200">Let's talk</h3>
          <p className="text-lg text-[#afb0b6] mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-5 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className=" text-lg text-[#d6d7dd] mb-2 ">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-[#1C1C1E] px-5 py-2 min-h-14 rounded-lg placeholder:text-[#666769] text-lg text-white shadow-black-200 shadow-2xl focus:outline-none"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className=" text-lg text-[#d6d7dd]">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full text-white  bg-[#1C1C1E] px-5 py-2 min-h-14 rounded-lg  placeholder:text-[#666769] text-lg  shadow-2xl focus:outline-none"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className=" text-lg text-[#afb0b6]">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full text-white  bg-[#1C1C1E] px-5 py-2 min-h-14 rounded-lg placeholder:text-[#666769] text-lg shadow-black-200 shadow-2xl focus:outline-none
"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="bg-[#151516] px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="w-2.5 h-2.5 object-contain invert brightness-0" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;