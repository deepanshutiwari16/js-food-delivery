const setId = () => Math.floor(Math.random() * 100);

const orderDelivered = (start, { ...orderDetail }) => {
  const time = Math.floor(Date.now() / 1000);
  console.log(`[${time - start}s] Delivering order...`);

  setTimeout(() => {
    const time = Math.floor(Date.now() / 1000);
    console.log(`[${time - start}s] Order delivered`, orderDetail);
  }, 4000);
};

const deliveringOrder = (start, { ...orderDetail }) => {
  orderDetail.deliveryDetails = "Delivered by John at 7:30 PM";

  return setTimeout(() => {
    const time = Math.floor(Date.now() / 1000);
    console.log(`[${time - start}s] Order packed: `, orderDetail);
    console.log("");
    orderDelivered(start, orderDetail);
  }, 5000);
};

const packingOrder = (start, { ...orderDetail }) => {
  orderDetail.packageDetails = "Packed in eco-friendly box";

  return setTimeout(() => {
    const time = Math.floor(Date.now() / 1000);
    console.log(`[${time - start}s] Food is ready:`, orderDetail);
    deliveringOrder(start, orderDetail);
  }, 2000);
};

const preparingFood = (start, { ...orderDetail }) => {
  orderDetail.foodDetails = "Burger & Fries";
  return setTimeout(() => {
    const time = Math.floor(Date.now() / 1000);
    console.log(`[${time - start}s] Preparing food...`);
    packingOrder(start, orderDetail);
  }, 3000);
};

const orderRecieved = ({ ...orderDetail }) => {
  orderDetail.orderId = setId();
  const start = Math.floor(Date.now() / 1000);

  return setTimeout(() => {
    console.log(`[${start - start}s] order recieved`, orderDetail);
    preparingFood(start, orderDetail);
  }, 0);
};

const main = () => {
  const details = {};
  orderRecieved(details);
};

main();
