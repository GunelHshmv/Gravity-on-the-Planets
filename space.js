const firstDataDiv=document.querySelector('.firstDataDiv')
const dataDiv=document.querySelector('.dataDiv')
const btn=document.querySelector('.btn')
const dataDivP=document.querySelector('.dataDivP')
const select=document.querySelector('.select')
const result=document.querySelector('.result')
const inp=document.querySelector('.inp')
let planet=document.querySelector('.planet')


btn.addEventListener('click',createDiv)


function createDiv(){ 
    let resultWeight=inp.value
    if(resultWeight!=""){
firstDataDiv.style.display="none"
dataDiv.style.display="flex"
dataDivP.innerHTML=`<h2>The weight of ${select.value}</h2>`
let lastResult;
switch (select.value) {
    case 'Mercury':
     lastResult=resultWeight*3.7
     planet.style.backgroundImage="url('/mercuri_preview_rev_1.png')"
        break;
        case 'Venus':
            lastResult=resultWeight*8.87
     planet.style.backgroundImage="url('/venuss_preview_rev_1.png')"
        break;
        case 'Earth':
            lastResult=resultWeight*9.81 
     planet.style.backgroundImage="url('/earth.webp')"
        break;
        case 'Mars':
            lastResult=resultWeight*3.71 
     planet.style.backgroundImage="url('/marss_preview_rev_1.png')"
        break;
        case 'Jüpiter':
            lastResult= resultWeight*24.79
     planet.style.backgroundImage="url('/jupiter_preview_rev_1.png')"

        break;
        case 'Satürn':
            lastResult=resultWeight*10.44
     planet.style.backgroundImage="url('/saturnn_preview_rev_1.png')"
        break;
        case 'Uranüs':
            lastResult=resultWeight*8.87
     planet.style.backgroundImage="url('/uranussss_preview_rev_1.png')"
        break;
        case 'Neptün':
            lastResult=resultWeight*11.15
     planet.style.backgroundImage="url('/neptune_preview_rev_2.png')"
        break;
    default:
        break;
}
result.innerHTML=`<b><h5>${lastResult}</h5></b>`
    }else{
        firstDataDiv.innerHTML="<h1>Weight is required !!!</h1>"
    }
}
