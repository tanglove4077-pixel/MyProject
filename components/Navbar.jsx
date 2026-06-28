import {Link} from "react-router-dom";

function Navbar(){

return(
<nav>

<h2>Dev Learning</h2>

<div>
<Link to="/">Home</Link>
<Link to="/start">เริ่มเรียน</Link>
<Link to="/lesson">บทเรียน</Link>
<Link to="/quiz">Quiz</Link>
<Link to="/install">Install</Link>
</div>

</nav>
)

}

export default Navbar;