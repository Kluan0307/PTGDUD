export default function Filter() {
    return (
        <div className="w-1/4 p-4 border-r">
          <h2 className="text-lg font-bold mb-4">FILTERS</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Type</h3>
            {['Pan-fried', 'Stir-fried', 'Grilled', 'Roasted', 'Sauteed', 'Baked', 'Steamed', 'Stewed'].map((type, index) => (
              <label key={index} className="block flex items-center gap-2">
                <input type="checkbox" className="mr-2" /> {type}
              </label>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Time</h3>
            <input type="range" min="0" max="60" className="w-full" />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Rating</h3>
            {[5, 4, 3, 2, 1].map((stars) => (
              <label key={stars} className="block flex items-center gap-2">
                <input type="checkbox" className="mr-2" /> {'⭐'.repeat(stars)}
              </label>
            ))}
          </div>
          <button className="w-full bg-pink-500 text-white py-2 rounded">Apply</button>
        </div>
      );
    };