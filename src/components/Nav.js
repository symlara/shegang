/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  const Navbar = () => {

    return (
        <div className="topnav" id="myTopnav">
            <a href="/meetups/shegang">Meetups</a>
            <a href="/advise/advise">Advise</a>
            <div className="dropdown">
                <button className="dropbtn">H.E.R
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                <a href="/updates/h.e.r-updates">H.E.R Updates</a>
                <a href="/albums/albums">Albums</a>
                <a href="/videos/videos">Videos</a>
                <a href="/samples/samples">Sample H.E.R Songs</a>
                </div>
            </div>
            <a href="#!" className="icon" onClick={myFunction}>&#9776;</a>
        </div>
    
    );
  }

  export default Navbar;