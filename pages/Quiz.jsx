import {useState} from "react";


function Quiz(){

const [score,setScore]=useState(0);


function check(){

setScore(score+1)

}


return(

<div className="container">


<h1>Quiz</h1>


<h3>
Git ใช้ทำอะไร?
</h3>


<button onClick={check}>
จัดการเวอร์ชันโค้ด
</button>


<h2>
คะแนน : {score}
</h2>


</div>


)

}


export default Quiz;