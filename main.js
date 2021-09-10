var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", 
"https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", 
"https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fgrandma&psig=AOvVaw0Ja_-6pX_FwZPFoelXDGyo&ust=1631400785923000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCIjJzo3A9fICFQAAAAAdAAAAABAD"  ];
var names = ["Family Book","Grandpa", "Dad", "Me", "Sister", "Mom", "Grandma"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    
    i = i % numbers_of_family_member_in_array

    //if(i > numbers_of_family_member_in_array)
    //{
    //      i = 0;
    //}
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
