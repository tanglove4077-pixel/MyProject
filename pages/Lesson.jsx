function Lesson(){

return(

<div className="container">

<h1>บทเรียน</h1>


<div className="card">

<h2>1. ติดตั้ง VS Code</h2>

<p>
ดาวน์โหลด VS Code
ติดตั้ง Extension
เช่น ESLint, Prettier
</p>

</div>



<div className="card">

<h2>2. เริ่มใช้ Git</h2>

<pre>

git init

git add .

git commit -m "first commit"

</pre>


</div>



<div className="card">


<h2>3. เชื่อม GitHub</h2>


<pre>

git remote add origin URL

git push -u origin main

</pre>


</div>


</div>


)

}

export default Lesson;