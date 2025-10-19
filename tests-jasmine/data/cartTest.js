import { addToCart, cart, loadFromStorage } from "../../data/cart";

describe("test suite: add to cart", () => {
  it("add an existing product to the cart", () => {
    spyOn(localStorage, "setItem");

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ]);
    });

    loadFromStorage();

    addToCart("8c9c52b5-5a19-4bcb-a5d1-158a74287c53");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual("8c9c52b5-5a19-4bcb-a5d1-158a74287c53");
    expect(cart[0].quantity).toEqual(1);
  });

  it("add a new product to the cart", () => {
    spyOn(localStorage, "setItem");

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]);
    });

    loadFromStorage();

    addToCart("8c9c52b5-5a19-4bcb-a5d1-158a74287c53");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual("8c9c52b5-5a19-4bcb-a5d1-158a74287c53");
    expect(cart[0].quantity).toEqual(1);
  });
});
