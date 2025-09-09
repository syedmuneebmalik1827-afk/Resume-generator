  /*personalinformation input live preview*/

  let name = document.querySelector('#heading1 input');
  let pname = document.querySelector('.pname');
  name.addEventListener('input', function(e){
    pname.innerHTML = name.value || "Full Name";
  })

  let jobrole = document.querySelector('#heading2 input');
  let pjobrole = document.querySelector('.prole');
  jobrole.addEventListener('input', function(e){
    pjobrole.innerHTML = jobrole.value || "Job Role";
  })
  let contact = document.querySelector('#heading3 input');
  let pcontact = document.querySelector('.pcontact');
  contact.addEventListener('input', function(e){
    pcontact.innerHTML = contact.value || "1234567890";
  })

  let address = document.querySelector('#heading4 input');
  let paddress = document.querySelector('.paddress');
  address.addEventListener('input', function(e){
    paddress.innerHTML = address.value || "City, Country";
  })
  let email = document.querySelector('#heading5 input');
  let pemail = document.querySelector('.pemail');
  email.addEventListener('input', function(e){
    pemail.innerHTML = email.value || "xyzabc123@gmail.com";
  })

  /*personal info ends*/

  let objective = document.querySelector('.objectiveinput textarea');
  let pobjectivetextarea = document.querySelector('.pobjectivetextarea');
  objective.addEventListener('input', function(e){
    pobjectivetextarea.innerHTML = objective.value || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ullam eligendi suscipit earum dolor a mollitia in. Laborum provident, magnam repudiandae odit numquam unde eos dolor aperiam consequuntur ab nobis vitae molestiae quo, delectus cum, vero a tenetur nostrum debitis.";
  })





  // cloning skill variable dec
  let originalskill = document.querySelector('#skillsinput');
  let skillsbutton = document.querySelector('.skillsadd');
  let skillslist = document.querySelector('.skillslist');
  
  let skillnum=1;



  //cloning skills and input live preview
  skillsbutton.addEventListener('click', function(e){
    e.preventDefault();
    skillnum++;
    if(skillnum<9){
      let copy = originalskill.cloneNode(true);
      copy.querySelector('input').id = `skillsinputtext${skillnum}`;
      copy.querySelector('input').value = "";
      copy.querySelector('input').placeholder = "Enter another skill"; 

      skillslist.appendChild(copy);
    }

    let skillinput2 = document.getElementById(`skillsinputtext${skillnum}`);
    let pskill2 = document.querySelector(`#skill${skillnum}`);
    skillinput2.addEventListener('input', function(e){
    pskill2.innerHTML = skillinput2.value || "Some Skill";    
    })
  
  })


//remove skills

let removebtn = document.querySelector('.skillsremove');
let copy = originalskill.cloneNode(true);

removebtn.addEventListener('click', function(e){
  e.preventDefault();
    copy.remove();
})


//textchange skills for 1st input
let originalskillinput = document.querySelector('#skillsinputtext');
let pskill1 = document.querySelector('#skill1');
originalskillinput.addEventListener('input', function(e){
pskill1.innerHTML = originalskillinput.value || "skill one";
})



// education input live preview
let eduinput = document.querySelector('.education textarea');
let peduinput = document.querySelector('#peduinputtextarea');

eduinput.addEventListener('input', function(e){
  peduinput.innerHTML = eduinput.value || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ullam eligendi suscipit earum dolor a mollitia in. Laborum provident, magnam repudiandae odit numquam unde eos dolor aperiam consequuntur ab nobis vitae molestiae quo, delectus cum, vero a tenetur nostrum debitis." ;
})

//workex live preview

  let workexinputvalue = document.querySelector('#workextextareaparent textarea');
  let pworkexinputvalue = document.querySelector('#pworkextextarea');

  workexinputvalue.addEventListener('input', function(e){
    pworkexinputvalue.innerHTML = workexinputvalue.value || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ullam eligendi suscipit earum dolor a mollitia in repudiandae odit numquam unde eos dolor aperiam consequuntur ab nobis vitae molestiae quo, destrum. <br> <br> Vivamus pulvinar hendrerit justo. Maecenas quis vulputate mi, at blandit turpis. Phasellus non feugiat diam. Fusce turpis purus" ;
  })


//printing

let printbtn = document.querySelector(".printbtn");

printbtn.addEventListener('click', function(e){
  window.print();
})

//funtion to reset values

  function resetvaluesofinput(){
    let inputelem = document.querySelectorAll('input, textarea');
  inputelem.forEach(function(item){
    item.value = '';

    /*resetting npreviews*/

pname.innerHTML = name.value || "Full Name";

pjobrole.innerHTML = jobrole.value || "Job Role";

pcontact.innerHTML = contact.value || "1234567890";

paddress.innerHTML = address.value || "City, State, Country";

 pemail.innerHTML = email.value || "xyzabcpqr123@gmail.com";

pobjectivetextarea.innerHTML = objective.value || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ullam eligendi suscipit earum dolor a mollitia in. Laborum provident, magnam repudiandae odit numquam unde eos dolor aperiam consequuntur ab nobis vitae molestiae quo, delectus cum, vero a tenetur nostrum debitis.";

pskill1.innerHTML = originalskillinput.value || "skill one";

pworkexinputvalue.innerHTML = workexinputvalue.value || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ullam eligendi suscipit earum dolor a mollitia in repudiandae odit numquam unde eos dolor aperiam consequuntur ab nobis vitae molestiae quo, destrum. <br> <br> Vivamus pulvinar hendrerit justo. Maecenas quis vulputate mi, at blandit turpis. Phasellus non feugiat diam." ;

peduinput.innerHTML = eduinput.value || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ullam eligendi suscipit earum dolor a mollitia in. Laborum provident, magnam repudiandae odit numquam unde eos dolor aperiam consequuntur ab nobis vitae molestiae quo, delectus cum, vero a tenetur nostrum debitis." 
  })
  }



//reset values

let resetbutton = document.querySelector('.resetbutton');
let resetyes = document.querySelector('.resetyes button');
let resetno = document.querySelector('.resetno button');
let resetinterface = document.querySelector('.resetinterface');

resetbutton.addEventListener('click', function(e){
  e.preventDefault();
    resetinterface.style.display = 'flex';
})

resetyes.addEventListener('click', function(e){
  e.preventDefault();
  resetinterface.style.display='none';
  resetvaluesofinput();
})
resetno.addEventListener('click', function(e){
  e.preventDefault();
  resetinterface.style.display='none';
})


/*reset interface ends*/


//template changing

let c1 = document.querySelector('.c1');
let c2 = document.querySelector('.c2');
let c3 = document.querySelector('.c3');
let c4 = document.querySelector('.c4');
let c5 = document.querySelector('.c5');

function c4func()
{

 document.querySelector('.topheadingleft h1').style.color = '#6B8E23';
 document.querySelectorAll('.personalinfoheading').forEach(function(elem){
    elem.style.color = '#6B8E23'    
});
 document.querySelectorAll('.personalinfoborder').forEach(function(elem){
    elem.style.borderBottom = '4px solid rgba(128, 128, 0, 0.3)'    
});

document.querySelector('.topheadingleft p').style.color = '#4CAF50';
document.querySelector('.ptop').style.background = " linear-gradient(90deg, #5A7D32, #6B8E23)";
document.querySelector('.printbtn').style.background = " linear-gradient(90deg, #5A7D32, #6B8E23)";
document.querySelector('.nav').style.background = "#4E8C33";
document.querySelector('.templatecolors p').style.color = "#6b8e23";
document.querySelector('.resetyes button').style.backgroundColor = "#1B5E20";
document.querySelector('.resetbutton').style.backgroundColor = "#1B5E20";
document.querySelector('.skillsadd').style.backgroundColor = "#1B5E20";
document.querySelector('.closeowner').style.background = '#1b5e20';
document.querySelector('.ownercontenttext').style.color = '#333';



document.querySelector('.skillsremove').style.color = "#1B5E20";
document.querySelector('.ownercontent').style.color = "#1B5E20";

document.querySelector('.skillsremove').addEventListener('mouseenter', function(e){
    e.target.style.backgroundColor = "#1B5E20";
    e.target.style.border = "2px solid #1b5e20";
    e.target.style.color = "white";
})

document.querySelector('.skillsremove').addEventListener('mouseleave', function(e){
    e.target.style.backgroundColor = "white";
    e.target.style.border = "2px solid #1b5e20";
    e.target.style.color = '#1B5E20';
})

document.querySelector('.skillsadd').addEventListener('mouseenter', function(e){
    e.target.style.backgroundColor = "white";
    e.target.style.border = "2px solid #1b5e20"
    e.target.style.color = '#1B5E20';
})

document.querySelector('.skillsadd').addEventListener('mouseleave', function(e){
   e.target.style.backgroundColor = "#1B5E20";
    e.target.style.color = "white";
})

document.querySelectorAll('input').forEach(function(elem){
    elem.style.border = '2px solid #6B8E23';
})
document.querySelectorAll('textarea').forEach(function(elem){
    elem.style.border = '2px solid #6B8E23';
})
// document.querySelectorAll('.personalinfoborder').forEach(function(elem){
//     elem.style.background = 'rgba(107, 142, 35, 0.3)';
// })


}

function c1func()
{

 document.querySelector('.topheadingleft h1').style.color = '#0B3D91';
 document.querySelectorAll('.personalinfoheading').forEach(function(elem){
    elem.style.color = '#0B3D91'    
});
 document.querySelectorAll('.personalinfoborder').forEach(function(elem){
    elem.style.borderBottom = '4px solid rgba(11, 61, 145, 0.3)'    
});

document.querySelector('.topheadingleft p').style.color = '#4ca7e3';
document.querySelector('.ptop').style.background = " linear-gradient(90deg, #0B3D91, #1a5fb4)";
document.querySelector('.printbtn').style.background = " linear-gradient(90deg, #0B3D91, #1a5fb4)";
document.querySelector('.nav').style.background = "#3B536A";
document.querySelector('.templatecolors p').style.color = "#0B3D91";
document.querySelector('.resetyes button').style.backgroundColor = "#34495E";
document.querySelector('.resetbutton').style.backgroundColor = "#34495E";
document.querySelector('.skillsadd').style.backgroundColor = "#34495E";
document.querySelector('.skillsremove').style.border = "2px solid #34495E";
document.querySelector('.closeowner').style.backgroundColor = "#34495E";



document.querySelector('.skillsremove').style.color = "#34495E";

document.querySelector('.skillsremove').addEventListener('mouseenter', function(e){
    e.target.style.backgroundColor = "#34495E";
e.target.style.border = "2px solid #34495E";

    e.target.style.color = "white";
})

document.querySelector('.skillsremove').addEventListener('mouseleave', function(e){
    e.target.style.backgroundColor = "white";
e.target.style.border = "2px solid #34495E";

    e.target.style.color = '#34495E';
})

document.querySelector('.skillsadd').addEventListener('mouseenter', function(e){
    e.target.style.backgroundColor = "white";
    e.target.style.border = '2px solid #34495e';
    e.target.style.color = '#34495E';
})

document.querySelector('.skillsadd').addEventListener('mouseleave', function(e){
   e.target.style.backgroundColor = "#34495E";
    e.target.style.color = "white";
e.target.style.border = "2px solid #34495E";

})

document.querySelectorAll('input').forEach(function(elem){
    elem.style.border = '2px solid #0B3D91';
})
document.querySelectorAll('textarea').forEach(function(elem){
    elem.style.border = '2px solid #0B3D91';
})



}

function c2func()
{

 document.querySelector('.topheadingleft h1').style.color = '#FF5C8D';
 document.querySelectorAll('.personalinfoheading').forEach(function(elem){
    elem.style.color = '#FF5C8D'    
});
 document.querySelectorAll('.personalinfoborder').forEach(function(elem){
    elem.style.borderBottom = '4px solid rgba(255, 182, 193, 0.3) ';
    
});

document.querySelector('.topheadingleft p').style.color = '#E34C8C';
document.querySelector('.ptop').style.background = "linear-gradient(90deg, #FF7FA9 0%, #FF5C8D 100%)";
document.querySelector('.printbtn').style.background = " linear-gradient(90deg, #FF7FA9 0%, #FF5C8D 100%)";
document.querySelector('.nav').style.background =" #F06292";
document.querySelector('.templatecolors p').style.color = "#FF7A9C";

document.querySelector('.resetyes button').style.backgroundColor = "#F06292";
document.querySelector('.resetbutton').style.backgroundColor = "#F06292";
document.querySelector('.skillsadd').style.backgroundColor = "#F06292";
document.querySelector('.skillsadd').style.border = "2px solid #F06292";
document.querySelector('.skillsremove').style.border = "2px solid #F06292";
// document.querySelector('.closeowner').style.background = "2px solid #F06292";
document.querySelector('.closeowner').style.background = '#f06292'


document.querySelector('.skillsremove').style.color = "#F06292";

document.querySelector('.skillsremove').addEventListener('mouseenter', function(e){
    e.target.style.backgroundColor = "#F06292";
    e.target.style.color = "white";
    e.target.style.border = '2px solid #F06292';
})

document.querySelector('.skillsremove').addEventListener('mouseleave', function(e){
    e.target.style.backgroundColor = "white";
    e.target.style.color = '#F06292';
    e.target.style.border = '2px solid #F06292';
})

document.querySelector('.skillsadd').addEventListener('mouseenter', function(e){
    e.target.style.backgroundColor = "white";
    e.target.style.color = '#F06292';
    e.target.style.border = "2px solid #F06292";
})

document.querySelector('.skillsadd').addEventListener('mouseleave', function(e){
    e.target.style.backgroundColor = "#F06292";
    e.target.style.border = "#F06292";
    e.target.style.color = "white";
})

document.querySelectorAll('input').forEach(function(elem){
    elem.style.border = '2px solid #FF5C8D';
})
document.querySelectorAll('textarea').forEach(function(elem){
    elem.style.border = '2px solid #FF5C8D';
})
// document.querySelectorAll('.personalinfoborder').forEach(function(elem){
//     elem.style.background = 'rgba(107, 142, 35, 0.3)';
// })


}

function c3func()
{

 document.querySelector('.topheadingleft h1').style.color = '#7E57C2';
 document.querySelectorAll('.personalinfoheading').forEach(function(elem){
    elem.style.color = '#7E57C2'    
});
 document.querySelectorAll('.personalinfoborder').forEach(function(elem){
    elem.style.borderBottom = '4px solid rgba(147, 112, 219, 0.3)';   
});

document.querySelector('.topheadingleft p').style.color = '#9C27B0';
document.querySelector('.ptop').style.background = " linear-gradient(90deg, #6A1B9A, #7E57C2)";
document.querySelector('.printbtn').style.background = " linear-gradient(90deg, #6A1B9A, #7E57C2)";
document.querySelector('.nav').style.background = "#8C79A8";
document.querySelector('.templatecolors p').style.color = "#9C27B0";
document.querySelector('.resetyes button').style.backgroundColor = "#4A148C";
document.querySelector('.resetbutton').style.backgroundColor = "#4A148C";
document.querySelector('.skillsadd').style.backgroundColor = "#4A148C";
document.querySelector('.closeowner').style.backgroundColor = "#4A148C";



document.querySelector('.skillsremove').style.color = "#4A148C";

document.querySelector('.skillsremove').addEventListener('mouseenter', function(e){
    e.target.style.backgroundColor = "#4A148C";
    e.target.style.color = "white";
})

document.querySelector('.skillsremove').addEventListener('mouseleave', function(e){
    e.target.style.backgroundColor = "white";
    e.target.style.color = '#4A148C';
})

document.querySelector('.skillsadd').addEventListener('mouseenter', function(e){
    e.target.style.backgroundColor = "white";
    e.target.style.border = "2px solid #4a148c";

    e.target.style.color = '#4A148C';
})

document.querySelector('.skillsadd').addEventListener('mouseleave', function(e){
   e.target.style.backgroundColor = "#4A148C";
    e.target.style.border = "2px solid #4a148c";

    e.target.style.color = "white";
})

document.querySelectorAll('input').forEach(function(elem){
    elem.style.border = '2px solid #7E57C2';
})
document.querySelectorAll('textarea').forEach(function(elem){
    elem.style.border = '2px solid #7E57C2';
})
// document.querySelectorAll('.personalinfoborder').forEach(function(elem){
//     elem.style.background = 'rgba(107, 142, 35, 0.3)';
// })


}

function c5func()
{
 document.querySelector('.topheadingleft h1').style.color = ' rgba(181, 166, 104, 1)';
 document.querySelectorAll('.personalinfoheading').forEach(function(elem){
    elem.style.color = 'rgba(181, 166, 104, 1)'    
});
 document.querySelectorAll('.personalinfoborder').forEach(function(elem){
    elem.style.borderBottom = '4px solid rgba(181, 166, 104, 0.3)';   
});

document.querySelector('.topheadingleft p').style.color ='#8B6F1B';
document.querySelector('.ptop').style.background = "linear-gradient(90deg, #BEB17E, #B5A668)";
document.querySelector('.printbtn').style.background = " linear-gradient(90deg, #BEB17E, #B5A668)";
document.querySelector('.nav').style.background = "#b5a668";
document.querySelector('.templatecolors p').style.color = "#8B6F1B";
document.querySelector('.resetyes button').style.backgroundColor = "#8B6F1B";
document.querySelector('.resetbutton').style.backgroundColor = "#8B6F1B";
document.querySelector('.skillsadd').style.backgroundColor = "#8B6F1B";
document.querySelector('.skillsadd').style.border = "2px solid #8B6F1B";
document.querySelector('.closeowner').style.background = '#8b6f1b';
document.querySelector('.ownercontenttext').style.color = 'black';



document.querySelector('.skillsremove').style.color = "#8B6F1B";
document.querySelector('.skillsremove').style.border = "2px solid #8B6F1B";

document.querySelector('.skillsremove').addEventListener('mouseenter', function(e){
    e.target.style.backgroundColor = "#8B6F1B";
    e.target.style.border = '2px solid #8B6F1B';
    e.target.style.color = "white";
})

document.querySelector('.skillsremove').addEventListener('mouseleave', function(e){
    e.target.style.backgroundColor = "white";
    e.target.style.border = '2px solid #8B6F1B';
    e.target.style.color = '#8B6F1B';
})

document.querySelector('.skillsadd').addEventListener('mouseenter', function(e){
    e.target.style.backgroundColor = "white";
    e.target.style.color = '#8B6F1B';
    e.target.style.border = "2px solid #8b6f1b";

})

document.querySelector('.skillsadd').addEventListener('mouseleave', function(e){
   e.target.style.backgroundColor = "#8B6F1B";
    e.target.style.color = "white";
})

document.querySelectorAll('input').forEach(function(elem){
    elem.style.border = '2px solid rgba(181, 166, 104, 1)';
})

document.querySelectorAll('input').forEach(function(elem){
    elem.addEventListener('mouseenter', function(e){
        e.target.style.boxShadow = "0 4px 8px rgba(181, 166, 104, 0.3)";
    })
})

document.querySelectorAll('textarea').forEach(function(elem){
    elem.addEventListener('mouseenter', function(e){
        e.target.style.boxShadow = "0 4px 8px rgba(181, 166, 104, 0.3)";
    })
})

document.querySelectorAll('input').forEach(function(elem){
    elem.addEventListener('mouseleave', function(e){
        e.target.style.boxShadow = "none";
    })
})

document.querySelectorAll('textarea').forEach(function(elem){
    elem.addEventListener('mouseleave', function(e){
        e.target.style.boxShadow = "none";
    })
})

document.querySelectorAll('textarea').forEach(function(elem){
    elem.style.border = '2px solid rgba(239, 228, 185, 1)';
})
// document.querySelectorAll('.personalinfoborder').forEach(function(elem){
//     elem.style.background = 'rgba(107, 142, 35, 0.3)';
// })


}

let currentstate =1;

c4.addEventListener('click', function(e){
  e.preventDefault();
  currentstate=4;
  c4func();
})

c3.addEventListener('click', function(e){
  e.preventDefault();
  currentstate=3;
  c3func();
})

c5.addEventListener('click', function(e){
  e.preventDefault();
  currentstate=5;
  c5func();
})

c1.addEventListener('click', function(e){
  e.preventDefault();
  currentstate=1;
  c1func();
})

c2.addEventListener('click', function(e){
  e.preventDefault();
  c2func();
  currentstate=2;
})

// template changing ends


// color change on hover


function colorhoverchange(){
  if(currentstate==1){
    c1func();
  }
  else if(currentstate==2){
    c2func();
  }
  else if(currentstate==3){
    c3func();
  }
  else if(currentstate==4){
    c4func();
  }
  else if(currentstate==5){
    c5func();
  }
}


c1.addEventListener('mouseenter', function(e){
  c1func();
})
c2.addEventListener('mouseenter', function(e){
  c2func();
})
c3.addEventListener('mouseenter', function(e){
  c3func();
})
c4.addEventListener('mouseenter', function(e){
  c4func();
})
c5.addEventListener('mouseenter', function(e){
  c5func();
})

document.querySelectorAll('.templatecolors button').forEach(function(elem){
  elem.addEventListener('mouseleave', function(e){
  colorhoverchange();
})
})

/* color change on hover ends*/


//owner


let ownerbtn = document.querySelector('.ownerbtn');
let owner = document.querySelector('.owner');
let cross = document.querySelector('.closeowner');

ownerbtn.addEventListener('click', function(e){
  owner.style.display = 'flex';
  // owner.style.display = 'fixed';
})


cross.addEventListener('click', function(e){
  // e.preventDefault();
  owner.style.display = 'none';
  console.log('hello');
  
})