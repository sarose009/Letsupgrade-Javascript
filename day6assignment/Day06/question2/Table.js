let a = +prompt("Enter a number to display the multiplication table : ");
document.write(`<h2>Required Multiplication Table of ${a} is<br></h2>`);
document.write("<ul>");
for(let i=1;i<=10;i++){
    document.write(`${a} x ${i} = ${a*i}<br>`);
}