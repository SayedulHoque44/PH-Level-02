
/* --------> solve the problem
- 1.Identify users who have not made any purchases. Display their names and email addresses.

- 2.Calculate the average price for each product category. Display the category and average price.

- 3.Find the average order quantity and price for each product category. Display the category, average quantity, and average price.

- 4.Calculate the total quantity and average price of products in each order. Display the order ID, total quantity, and average price.

- 5.For the "users" collection, suggest an indexing strategy to optimize queries related to user authentication, considering fields like email.

- 6.For the "orders" collection, identify the columns that are frequently used in queries (e.g., user_id, product_id). Propose a set of indexes to optimize query performance.

*/


/*
- **1.Identify users who have not made any purchases. Display their names and email addresses.*

//--> stepp
1. we needs user data for email and name, those only who have orders
2. in order db has userId who have made purcheses 
3. now its time to join them orders and users based on userId to get who had orders or not, 

Solv:-->

    db.users.aggregate([
        // stage-1 --> join referecne data orders
        {
            $lookup: {
                from: "orders",
                localField: "_id",
                foreignField: "user_id",
                as: "userOrders"
                }
        },
        // stage-2 --> find who have empty "userOrders" using $match
        {
        $match: {
                userOrders:{
                $size: 0
            }
        }
        },
        //stage-2 --> return only name & email
        {
            $project: {
                name:1,
                email:1
            }
        }
    ])

- **2.Calculate the average price for each product category. Display the category and average price.

//--> step

1.at first we have to work on products db
2.then we have to crate a group based on category
3.then using $group we can easily get the total price and avrage price 

//-->solv:
db.products.aggregate([
    // stage-1
    {
        $group: { 
            _id: "$category",
            totalProductThisCategory:{
                $sum:1
            },
            productsOnthisCate:{
                $push: "$name"
            },
            totalPrice:{
                $sum:"$price"
            },
            avaragePrice:{
                $avg: "$price"
            }
        }
    },
    {
        $project: {
            category:"$_id",
            totalProductThisCategory:1,
            productsOnthisCate:1,
            totalPrice:1,
            avaragePrice:{$round: ["$avaragePrice",2]}// $round ta ekahne use krte hbe deciaml 2 ta hbe
        }
    }
])

- **3.Find the average order quantity and price for each product category. Display the category, average quantity, and average price.

//--> step

1. use your brain


//-->solv:
db.orders.aggregate([
    // stage-1
    {
        $unwind: "$products"
    },
    // stage-1
    {
        $lookup: {
            from: "products",
            localField: "products.product_id",
            foreignField: "_id",
            as: "mainProducts"
        }
    },
    {
        $unwind: "$mainProducts"
    },
    // stage-1
    {
        $group: {
             _id: "$mainProducts.category",
             avaQuantity:{$avg:"$products.quantity"},
             totalProductsSell:{$sum:"$products.quantity"},
             avgPrice:{$avg: "$mainProducts.price"},
             totalProduct:{$sum:1}
        }
    },
    {
        $project: {
            category:"$_id",
            avarageQuantity:{$toInt: "$avaQuantity"},
            avgPrice:1,
            totalProductsSell:1,
            totalProduct:1
        }
    }
    
])
//- **4.Calculate the total quantity and average price of products in each order. Display the order ID, total quantity, and average price.

db.orders.aggregate([
    // stage-1 --> devided the products from orders products array
    {
        $unwind: "$products"
    },
    // stage-1 --> now they product ara single, and product price are in the products collection so we have to $lookup by this products id
    {
        $lookup: {
               from: "products",
               localField: "products.product_id",
               foreignField: "_id",
               as: "ProductDetails"
             }
    },
    // stage-2 break from the array the ProductDetails
    {
        $unwind: "$ProductDetails"
    },
    // stage-3 --> now $group orders based on their id and calculate what ever you want 
    {
        $group: { 
            _id: "$_id",
            totalQuantity:{
                $sum:"$products.quantity"
            },
            totalOrders:{
                $sum:1
            },
            productList:{$push: {
                name: "$ProductDetails.name",
                price: "$ProductDetails.price"
            }},
            avgPrice:{$avg: "$ProductDetails.price"}
        }
    },
    {
      $project: {
          totalQuantity:1,
          totalOrders:1,
          avgPrice:{$toInt: "$avgPrice"},
          productList:1,
          
      }  
    }
])




*/