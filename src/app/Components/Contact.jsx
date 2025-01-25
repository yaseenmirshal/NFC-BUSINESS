

export default function Contact() {
  return (
    <>

      <main className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto mt-6 space-y-4">
          <input className="w-full p-3 border rounded" type="text" placeholder="Your Name" required />
          <input className="w-full p-3 border rounded" type="email" placeholder="Your Email" required />
          <textarea className="w-full p-3 border rounded" placeholder="Your Message" rows={4} required></textarea>
          <button className="w-full bg-blue-600 text-white py-2 rounded">Submit</button>
        </form>
      </main>
   
    </>
  );
}
