
const themes = ["Minimal", "Luxury", "Modern", "Classic", "Corporate"];

export default function Themes() {
  return (
    <>
     
      <main className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-center">NFC Card Themes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {themes.map((theme) => (
            <div key={theme} className="bg-white text-black p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-medium">{theme}</h3>
            </div>
          ))}
        </div>
      </main>
    
    </>
  );
}
