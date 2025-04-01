import Card from "./Card";

export default function Container({ recipes }) {
    return (
      <div className="grid grid-cols-3 gap-4 p-4">
        {recipes.map((recipe, index) => (
          <Card key={index} {...recipe} />
        ))}
      </div>
    );
  };