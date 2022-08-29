const side=document.querySelector('.sides');
const Side=side.value;
const head=document.querySelector('h1');
const svg=document.querySelector('.svgbox');
const polygonE=document.querySelector('.polygon');
const generateE=document.querySelector('.generate');
function points(sides,radius){
    const angle=360/sides;
    const vertexIndices=range(sides);
    const offsetdDeg=90-((180-angle)/2);
    const offset=degreeToRadiun(offsetdDeg);

    return vertexIndices.map((index)=>{
        return{
            theta: offset+degreeToRadiun(angle*index),
            r: radius,
        };
    });
};
function range(count){
    return Array.from(Array(count).keys());
}; 
function degreeToRadiun(angle){
    return (Math.PI * angle/180);
};
function polygon(cx, cy, sides, radius){
  return points(sides,radius)
  .map(({r,theta})=>[
    cx+r*Math.cos(theta),
    cy+r*Math.sin(theta),
  ])
  .join(' ');
}
function generatePolygon(){
    const sides= +side.value;
    const radius=50;
    const cx=50;
    const cy=50;
    // const s=2*radius+50;
    const res=polygon(cx,cy,sides,radius);
       //const viz=polygon([s/2,s/2],sides,radius);
   // svg.setAttribute('viewbox',`0 0 ${s} ${s} `);
    polygonE.setAttribute('points', res);

}
generateE.onclick=()=>{
    if(side.value>2)
    generatePolygon();
    else
    alert('Number of sides should be more thab 2');
};




