const foods=[
{name:"Cơm tấm sườn",desc:"Sườn nướng, bì, chả và trứng.",price:45000,cat:"rice",emoji:"🍚",rarity:"HIẾM"},
{name:"Cơm gà",desc:"Cơm thơm ăn cùng gà đậm vị.",price:40000,cat:"rice",emoji:"🍗",rarity:"THƯỜNG"},
{name:"Phở bò",desc:"Phở nóng với thịt bò mềm.",price:50000,cat:"noodle",emoji:"🍜",rarity:"SỬ THI"},
{name:"Bún bò Huế",desc:"Nước dùng đậm đà, cay nhẹ.",price:45000,cat:"noodle",emoji:"🍜",rarity:"HIẾM"},
{name:"Mì trộn",desc:"Mì trộn sốt đậm vị, dễ ăn.",price:35000,cat:"noodle",emoji:"🍝",rarity:"THƯỜNG"},
{name:"Bánh mì",desc:"Nhanh, gọn và cực kỳ tiện.",price:25000,cat:"fastfood",emoji:"🥖",rarity:"THƯỜNG"},
{name:"Burger",desc:"Burger bò kèm rau và sốt.",price:55000,cat:"fastfood",emoji:"🍔",rarity:"HIẾM"},
{name:"Gà rán",desc:"Gà giòn rụm ăn cùng khoai.",price:60000,cat:"fastfood",emoji:"🍗",rarity:"HIẾM"},
{name:"Trà sữa",desc:"Một ly trà sữa mát lạnh.",price:30000,cat:"drink",emoji:"🧋",rarity:"THƯỜNG"},
{name:"Cà phê sữa",desc:"Cà phê đậm vị Việt Nam.",price:25000,cat:"drink",emoji:"☕",rarity:"THƯỜNG"}
];

const $=id=>document.getElementById(id);
const money=n=>n.toLocaleString("vi-VN")+"đ";

function filtered(){
 const cat=$("category").value, bud=$("budget").value;
 return foods.filter(f=>(cat==="all"||f.cat===cat)&&(bud==="all"||f.price<=+bud));
}
function render(){
 const list=filtered();
 $("count").textContent=list.length+" món";
 $("foodGrid").innerHTML=list.map(f=>`
 <article class="card">
  <div class="emoji">${f.emoji}</div><h3>${f.name}</h3><p>${f.desc}</p>
  <div class="card-bottom"><span class="price">${money(f.price)}</span><span class="tag">${f.rarity}</span></div>
 </article>`).join("");
}
function openBox(){
 const list=filtered();
 if(!list.length){alert("Không có món phù hợp với bộ lọc!");return}
 const f=list[Math.floor(Math.random()*list.length)];
 $("foodEmoji").textContent=f.emoji;$("foodName").textContent=f.name;
 $("foodDesc").textContent=f.desc;$("foodPrice").textContent=money(f.price);
 $("rarity").textContent=f.rarity;$("result").classList.remove("hidden");
 $("result").style.animation="none";void $("result").offsetWidth;$("result").style.animation="pop .45s ease";
}
$("openBtn").onclick=openBox;$("againBtn").onclick=openBox;
$("category").onchange=render;$("budget").onchange=render;
render();
