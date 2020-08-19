import { computed, decorate, observable } from "mobx";
// import AsyncStorage from "@react-native-community/async-storage";

class CartStore {
  items = [];
  //   items = [
  //     {
  //       itemId: 1,
  //       quantity: 5,
  //     },
  //     {
  //       itemId: 2,
  //       quantity: 3,
  //     },
  //   ];

  addItem = async (newItem) => {
    const foundItem = this.items.find((item) => item.itemId === newItem.itemId);
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }
  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = JSON.parse(items);
  };

  removeItemFromCart = async (itemId) => {
    this.items = this.items.filter((_item) => _item.itemId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };
}
decorate(CartStore, {
  items: observable,
  totalQuantity: computed,
});

const cartStore = new CartStore();
cartStore.fetchCart();

export default cartStore;
