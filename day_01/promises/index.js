const mypromise = new Promise((resolve, reject) => {
    let age = 24;
    if (age > 18) {
        resolve("eligible for vote")
    } else {
        reject("Not eligible.")
    }
})
const f1 = async () => {
    const msg = await mypromise;
    console.log(msg);
}
f1();
// mypromise.then((msg) => console.log(msg))
//     .catch((error) => console.log("Error Occured",error));
// console.log(mypromise);
