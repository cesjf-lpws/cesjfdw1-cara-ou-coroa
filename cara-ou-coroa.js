/*
This file are part of CESJFDW1-2011-1.

CESJFGG-2011-1 is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

CESJFGG-2011-1 is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with CESJFDW1-2011-1.  If not, see <http://www.gnu.org/licenses/>.
*/
var resultado, escolha, pontoUsuario=0, pontoComputador=0;

var botaoCara=document.getElementById("cara");
botaoCara.addEventListener("click",cara,false);

var botaoCoroa=document.getElementById("coroa");
botaoCoroa.addEventListener("click",coroa,false);


function cara(){
   console.log("cara"); 
   escolha=0;
   resultado=Math.floor((Math.random()*10)%2);
   if (resultado==escolha){
   pontoUsuario++;     
   }
   else {
   pontoComputador++;
   }
}
function coroa(){ 
   console.log("coroa");
   escolha=1;
   resultado=Math.floor((Math.random()*10)%2);
   if (resultado==escolha){
   pontoUsuario++;     
   }
   else {
   pontoComputador++;
   }
}


   
