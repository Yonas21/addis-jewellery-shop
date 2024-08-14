import {
	getFirestore,
	doc,
	updateDoc,
	arrayUnion,
	getDoc,
	setDoc,
	collection,
	getDocs,
} from "firebase/firestore";

const db = getFirestore();

export const addItemToCart = async (userId, product) => {
	const cartRef = doc(db, "carts", userId);
	try {
		const cartSnap = await getDoc(cartRef);

		if (cartSnap.exists()) {
			// Update the existing document
			await updateDoc(cartRef, {
				items: arrayUnion(product),
			});
		} else {
			// Create the document if it doesn't exist
			await setDoc(cartRef, {
				items: [product],
			});
		}

		return "Item added to cart successfully!";
	} catch (error) {
		return "Error adding item to cart: ", error;
	}
};

export const getUserCartItems = async (userId) => {
	try {
		const cartRef = doc(db, "carts", userId); // Reference to the user's cart document
		const cartDoc = await getDoc(cartRef); // Fetch the cart document

		if (cartDoc.exists()) {
			const cartData = cartDoc.data();
			return cartData.items || []; // Return the items array from the cart document
		} else {
			console.log("No cart found for this user.");
			return []; // Return an empty array if no cart exists
		}
	} catch (error) {
		console.error("Error fetching cart items: ", error);
		return []; // Return an empty array on error
	}
};

export const fetchAllCarts = async () => {
	try {
		const cartsRef = collection(db, "carts");
		const cartDocs = await getDocs(cartsRef);
		const allCarts = [];

		for (const cartDoc of cartDocs.docs) {
			const userId = cartDoc.id;
			const cartDocRef = doc(db, `carts/${userId}`);
			const itemsDoc = await getDoc(cartDocRef);

			const items = itemsDoc.get("items");

			const cartItems = items.map((doc) => ({
				id: doc.id,
				userId,
				...doc,
			}));

			allCarts.push({
				userId,
				cartItems,
			});
		}

		return allCarts;
	} catch (error) {
		console.error("Error fetching carts:", error);
		return [];
	}
};
