export const cart = [];

export function addToCart(productId) {
  let existingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      existingItem = cartItem;
    }
  });

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}