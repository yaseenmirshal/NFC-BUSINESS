

const categories = [
  "Bullion Business", "Gold & Diamond", "Real Estate", "Healthcare", "Education",
  "Financial Services", "Entertainment", "Tourism", "Retail Business",
  "Business Services", "High Profile Individuals", "Hospitality Industry"
];

export default function Categories() {
  return (
    <>
   
      <main className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-center">Business Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {categories.map((category) => (
            <div key={category} className="bg-white text-black p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-medium">{category}</h3>
            </div>
          ))}
        </div>
      </main>
  
    </>
  );
}
