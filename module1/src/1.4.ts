// spread operator
//rest operator
// destructuring
{


const frnds1 : string[] = ["Shohan", "Ab", "Belal"];
const frnds2 : string[] = ["Nishat", "Rasel", "Roktim"];

frnds1.push(...frnds2);


const gdFrnds = (...friends : string[]) => {
    friends.forEach((friend : string) => console.log(`Hi ${friend}`));
};

gdFrnds("Sohan", "Belal","Mahfuz") 

























}