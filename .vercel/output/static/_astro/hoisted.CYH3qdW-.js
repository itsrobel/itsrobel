import"./hoisted.-a8rPBSx.js";function c(){let e={fname:"Robel",lname:"Schwarz",phone:"6066208002",email:"itsrobel.schwarz@gmail.com"},a=`BEGIN:VCARD
VERSION:3.0
N:${e.lname};${e.fname};;;
FN:${e.fname} ${e.lname}
TEL:${e.phone}
EMAIL:${e.email}
END:VCARD`,l=new Blob([a],{type:"text/vcard"}),n=window.URL.createObjectURL(l),t=document.createElement("a");t.href=n,t.download=e.fname+".vcf",t.textContent=e.fname,t.href=n,t.click()}let o=document.getElementById("save-contact");o.addEventListener("click",c);
