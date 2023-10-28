const getProducts = (req, res) => {
  res.send([
    {
      id: 1,
      itemId: "buger01",
      name: "Burger",
      price:"150",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2",
    },
    {
      id: 2,
      itemId: "pizza01",
      price:"250",
      name: "Pizza",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizzaslice.png?alt=media&token=c91c0c7e-ffa9-41be-ba84-c3b45c79d483",
    },
    {
      id: 3,
      itemId: "hotdog01",
      price:"100",
      name: "Hotdog",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog1.png?alt=media&token=658e67d8-9284-4ba4-93ad-778dad99ce9c",
    },
    {
      id: 4,
      itemId: "taco01",
      price:"350",
      name: "Taco",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco1.png?alt=media&token=b78c8e68-c1a6-4e43-8c43-6ef9f23aa59f",
    },
    {
      id: 5,
      itemId: "snack01",
      price:"100",
      name: "Snack",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack1.png?alt=media&token=d670617e-4bfc-4693-aa8c-211db9f9d706",
    },
    {
      id: 6,
      itemId: "drink01",
      price:"180",
      name: "Drink",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink1.png?alt=media&token=e9cc5e4e-2194-4766-9d5a-5e01657927b7",
    },
  ]);
};

const getCart = (req, res) => {
  res.send([
    {
      id: 1,
      userId: 1,
      date: "2020-03-02T00:00:00.000Z",
      products: [
        { productId: 1, quantity: 4 },
        { productId: 2, quantity: 1 },
        { productId: 3, quantity: 6 },
      ],
      __v: 0,
    },
    {
      id: 2,
      userId: 1,
      date: "2020-01-02T00:00:00.000Z",
      products: [
        { productId: 2, quantity: 4 },
        { productId: 1, quantity: 10 },
        { productId: 5, quantity: 2 },
      ],
      __v: 0,
    },
    {
      id: 3,
      userId: 2,
      date: "2020-03-01T00:00:00.000Z",
      products: [
        { productId: 1, quantity: 2 },
        { productId: 9, quantity: 1 },
      ],
      __v: 0,
    },
    {
      id: 4,
      userId: 3,
      date: "2020-01-01T00:00:00.000Z",
      products: [{ productId: 1, quantity: 4 }],
      __v: 0,
    },
    {
      id: 5,
      userId: 3,
      date: "2020-03-01T00:00:00.000Z",
      products: [
        { productId: 7, quantity: 1 },
        { productId: 8, quantity: 1 },
      ],
      __v: 0,
    },
    {
      id: 6,
      userId: 4,
      date: "2020-03-01T00:00:00.000Z",
      products: [
        { productId: 10, quantity: 2 },
        { productId: 12, quantity: 3 },
      ],
      __v: 0,
    },
    {
      id: 7,
      userId: 8,
      date: "2020-03-01T00:00:00.000Z",
      products: [{ productId: 18, quantity: 1 }],
      __v: 0,
    },
  ]);
};

const postProduct = (req,res)=>{
    const{name,email} =req.body;
    res.send(`The details are: Name:${name} and Email:${email}`)
}

module.exports = { getProducts, getCart ,postProduct};
