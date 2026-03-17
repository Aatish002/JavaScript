// //USE MAP, FILTER & REDUCE FOR THE GIVEN TASKS

// 1.Task: You are given an array of user objects. Extract all their email addresses into a new array.
// const users = [
//   { id: 1, name: "Hrit", email: "hrit@example.com" },
//   { id: 2, name: "Russel", email: "russel@example.com" },
// ];
// Expected Output:
// ["hrit@example.com", "russel@example.com"]

// 2.Task: Filter out only the active products from a product list
// const products = [
//   { name: "Laptop", active: true },
//   { name: "Phone", active: false },
//   { name: "Tablet", active: true },
// ];
// Expected Output:
// [{ name: "Laptop", active: true }, { name: "Tablet", active: true }]

// 3.Task: Calculate total revenue from orders.
// const orders = [
//   { orderId: 1, amount: 250 },
//   { orderId: 2, amount: 450 },
// ];
// Expected Output:
// 700

// 4.Task: Convert a list of users into summary objects that include their name and total number of logins across devices.
// const users = [
//   { name: "Alice", logins: { web: 4, mobile: 6 } },
//   { name: "Bob", logins: { web: 2, mobile: 1 } },
// ];
// Expected Output:
// [
//   { name: "Alice", totalLogins: 10 },
//   { name: "Bob", totalLogins: 3 }
// ]

// 5.Task: Group books into genres using a single reduce.
// const books = [
//   { title: "1984", genre: "Dystopian" },
//   { title: "Brave New World", genre: "Dystopian" },
//   { title: "The Hobbit", genre: "Fantasy" },
// ];
// Expected Ouptut:
// {
//   Dystopian: ["1984", "Brave New World"],
//   Fantasy: ["The Hobbit"]
// }



// const arrayOfUserObject=[
//     {
//         name:"Aatish",
//         age:22,
//         email:"aatishbhatta02@gmail.com"
//     },
//     {
//         name:"Krishna",
//         age:22,
//         email:"shivmahakal@gmail.com"
//     },
//     {
//         name:"Bishesh",
//         age:22,
//         email:"bisheshthapa@gmail.com"
//     }
// ];

// const email = arrayOfUserObject.map((i)=>i.email);
// console.log(email);


// const products = [
//    { name: "Laptop", active: true },
//    { name: "Phone", active: false },
//    { name: "Tablet", active: true },
//  ];
// const activeProducts=products.filter((i)=>i.active===true);
// console.log(activeProducts);


// const orders = [
//    { orderId: 1, amount: 250 },
//    { orderId: 2, amount: 450 },
// ];
// const totalRevenue=orders.reduce((i,j)=>i.amount+j.amount);
// console.log(totalRevenue);


// const users = [
//    { name: "Alice", logins: { web: 4, mobile: 6 } },
//    { name: "Bob", logins: { web: 2, mobile: 1 } },
//  ];

// const totalUser=users.map((user)=>({
//   name:user.name,
//   total:user.logins.web+user.logins.mobile
// }));
// console.log(totalUser);


// const books = [
//   { title: "1984", genre: "Dystopian" },
//   { title: "Brave New World", genre: "Dystopian" },
//   { title: "The Hobbit", genre: "Fantasy" },
// ];


// const obj = {
//   name: 'arin',
//   Dystopina: ['10984']
// };
// obj.name = obj.aatish;
// console.log('obj',obj);

// const CategorizedBooks = books.reduce((acc, current) => {
// acc[current.genre] = acc[current.genre] || []
// acc[current.genre].push(current.title)
// return acc
// }, {});

// console.log('categorized books', CategorizedBooks);



// const movies = [
//   { title: "The Matrix", year: 1999 },
//   { title: "Inception", year: 2010 },
//   { title: "Pulp Fiction", year: 1994 },
//   { title: "The Dark Knight", year: 2008 }
// ];
// const catagorizedMovies=movies.reduce((acc,current)=>{
//   const decade = Math.floor(current.year/10)*10+"s";
//   acc[decade]=acc[decade]||[];
//   acc[decade].push(current.title);
//   return acc;
// },{});
// console.log(catagorizedMovies);