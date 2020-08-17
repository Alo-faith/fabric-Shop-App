import { decorate, observable } from "mobx";
import instance from "./instance";

class ShopStore {
  shops = [];
  loading = true;

  fetchShops = async () => {
    try {
      const res = await instance.get("/shops");
      this.shops = res.data;
      this.loading = false;
    } catch (error) {
      console.error("ShopStore -> fetchShop -> error", error);
    }
  };
}

decorate(ShopStore, {
  shops: observable,
  loading: observable,
});

const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;
