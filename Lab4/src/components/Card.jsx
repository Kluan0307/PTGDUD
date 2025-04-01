export default function Card({ image, title, time }) {
    return (
      <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition p-2">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <h3 className="font-semibold mt-2">{title}</h3>
        <p className="text-pink-500 text-sm">{time} minutes</p>
      </div>
    );
  };