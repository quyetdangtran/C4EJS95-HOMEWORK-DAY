// fetchAPI
const itemsContainerElement = document.getElementById("itemContainer")
const fetchUser = async () =>{
    const result = await axios.get ('https://sheetdb.io/api/v1/58f61be4dda40')
    console.log("result ===>")
    return result.data
}
fetchUser();
// render 
const renderUsers = async () => {
    const users = await fetchUser ();
    let htmlUser = "";
    for(const user of users){
        htmlUser+= '<li> ${user.id} - ${user.name} </li>'
    }
    itemsContainerElement.innerHTML = htmlUser;
}
renderUsers();
// 
const login  =  async () => {
    
}
