
// const inp = document.querySelector('.normal')
// document.write(inp + "<br>");

// const section = document.querySelector('.section')
// document.write(section + "<br>")

// const el = document.querySelector("div.user-panel.main input[name='login']");
// document.write(el + "<br>")

// document.writeln("<br><input type='text' class='hola'><button>enviar</button><br>");
// const input = document.querySelector(".hola");
// input.required = "false";
// document.write(input)

// const up_names = document.getElementsByName("down");
// console.log(up_names[0].tagName);


// function simpleArraySum(ar) {
//     return ar.reduce((n,n2) => n + n2)

// }
// document.write("<br>" +  simpleArraySum([1,2,3,4,10,11]));

function compareTriplets(a, b) {
    let ax = 0;
    let bx = 0;

    a.forEach((x, i)=>{
        if (x > b[i]) {
            ax++;
        } else if (x < b[i]) {
            bx++;
        }
    });

    return [ax, bx];
}

function compareTripletsb(a, b) {
    let ax = 0;
    let bx = 0;

    b.forEach((x, i)=>{
        if (x < a[i]) {
            bx++;
        } else if (x > a[i]) {
            ax++;
        }
    });

    return [ax, bx];
}

document.write(compareTriplets([5,16,7],[3,6,10]) + "<br>");

document.write(compareTriplets([5,16,7],[3,6,10]));