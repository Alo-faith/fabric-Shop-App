import { decorate, observable } from "mobx";
import instance from "./instance";

// slug
import slugify from "react-slugify";

class ItemStore {
  items = [];
  loading = true;

  fetchItems = async () => {
    try {
      const res = await instance.get("/fabrics");
      this.items = res.data;
      this.loading = false;
    } catch (error) {
      console.error("ItemStore -> fetchItems -> error", error);
    }
  };

  getItemById = (itemId) => this.items.find((item) => item.id === itemId);
}

decorate(ItemStore, {
  items: observable,
  loading: observable,
});

const itemStore = new ItemStore();
itemStore.fetchItems();

export default itemStore;
