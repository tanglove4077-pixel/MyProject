import {useState} from "react";


function Start(){

const [done,setDone]=useState(0);


const data=[

"ติดตั้ง VS Code",

"เริ่มต้นใช้งาน Git",

"คำสั่ง Git พื้นฐาน",

"อัปโหลด GitHub"

];


return (

<div className="container">


<h1>
🚀 เริ่มเรียน VS Code + Git + GitHub
</h1>


<h3>
Progress {done}/{data.length}
</h3>


<div className="progress">

<div
style={{
width:`${done/data.length*100}%`
}}
>

</div>

</div>



{
data.map((item,index)=>(

<div className="card" key={index}>


<h2>
บทที่ {index+1}
</h2>


<p>
{item}
</p>


<button
onClick={()=>{

if(done<=index)
setDone(done+1)

}}
>
เรียนจบบทนี้
</button>


</div>

))

}


</div>

)

}


export default Start;