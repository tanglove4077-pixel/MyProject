import {useState} from "react";


function Install(){

const [step,setStep]=useState(0);



const lessons=[

{
title:"ดาวน์โหลด VS Code",
text:
"เข้าเว็บไซต์ VS Code และดาวน์โหลดเวอร์ชันที่ตรงกับระบบของคุณ"
},


{
title:"ติดตั้งโปรแกรม",
text:
"เปิดไฟล์ติดตั้ง กด Next และเลือก Add to PATH"
},


{
title:"ติดตั้ง Extension",
text:
"แนะนำติดตั้ง Extension เช่น Prettier, ESLint และ GitHub"
},


{
title:"พร้อมใช้งาน",
text:
"เปิด VS Code และเริ่มสร้างโปรเจกต์แรก"
}

];



return(

<div className="container">


<h1>
📦 ติดตั้ง VS Code
</h1>



<div className="progress">

<div

style={{
width:
`${((step+1)/lessons.length)*100}%`
}}

></div>


</div>



<div className="card">


<h2>

Step {step+1}

</h2>


<h3>

{lessons[step].title}

</h3>


<p>

{lessons[step].text}

</p>



{
step < lessons.length-1 ?

<button
onClick={()=>setStep(step+1)}
>

ถัดไป

</button>

:

<h3>
🎉 ติดตั้งเสร็จแล้ว
</h3>

}


</div>


</div>

)

}


export default Install;