//  | This is the union symbol; it allows using more than one type.
let userId:string | number;
userId = "2999";
userId = 2999;


function displayUserInfo(userId: string | number | boolean ){
    console.log(userId);
}
displayUserInfo("9999");
displayUserInfo(2334);
displayUserInfo(false)