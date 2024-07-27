const RetreatList = ({ retreats }) => {
    if (!Array.isArray(retreats)) {
      return <p>No retreats available</p>;
    }
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {retreats.map(retreat => (
          <div key={retreat.id} className="border rounded-lg p-4 bg-[#e0d9cf]">
            <img src={retreat.image} alt={retreat.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{retreat.title}</h2>
              <p>{retreat.description}</p>
              <p>Date: {new Date(retreat.date * 1000).toLocaleDateString()}</p>
              <p>Location: {retreat.location}</p>
              <p>Price: ${retreat.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default RetreatList;
  