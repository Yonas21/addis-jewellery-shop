import { getAuth } from "firebase/auth";
import { useEffect, useState, useMemo } from "react";
import { fetchSharesWithUsers } from "../services/items";

function Contributions() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const auth = getAuth();
  const user = auth.currentUser;

  // Fetch cart items (shares with user data)
  useEffect(() => {
    const getShareItems = async () => {
      try {
        const items = await fetchSharesWithUsers();
        setCartItems(items);
        setLoading(false)
      } catch (err) {
        console.error("Error fetching shares: ", err);
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    
    if (user) getShareItems();
  }, [user]);

  // Group cart items by userId using useMemo to optimize grouping logic
  const groupedCartItems = useMemo(() => {
    return cartItems.reduce((grouped, item) => {
      const userId = item.userId;
      if (!grouped[userId]) {
        grouped[userId] = { user: item.user, shares: [] };
      }
      grouped[userId].shares.push(item);
      return grouped;
    }, {});
  }, [cartItems]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3 style={{justifyItems: "start"}}>Contributions</h3>
      <table className="table-striped" style={{ width: "1000px" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Number Of Shares</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(groupedCartItems).map((group, index) => (
            <tr key={index}>
              <td className="p-3" scope="row">{index + 1}</td>
              <td className="p-3">{group.user.firstName} {group.user.lastName}</td>
              <td className="p-3">{group.user.email}</td>
              <td className="p-3">{group.user.phoneNumber || 'N/A'}</td>
              <td className="p-3">{group.shares.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contributions;
