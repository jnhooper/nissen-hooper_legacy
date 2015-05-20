/**
 * Created by John on 5/13/2015.
 */

function detectmob() {
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    }
    else {
        return false;
    }
}
var mobile = detectmob();

var NavBar = React.createClass({
    render: function() {
        return (
            <nav className="napp-color">
                <ul id="slide-out" className="side-nav fixed">
                    <li><a className="waves-effect waves-napp" href="#!">First Sidebar Link</a></li>
                    <li><a className="waves-effect waves-napp" href="#!">Second Sidebar Link</a></li>
                    <li className="no-padding">
                        <ul className="collapsible collapsible-accordion">
                            <li>
                                <a className="waves-effect waves-napp collapsible-header">Examples<i className="mdi-navigation-arrow-drop-down"></i></a>
                                <div className="collapsible-body">
                                    <ul>
                                        <li><a className="waves-effect waves-napp"  href="customStar.html">SVG Animation</a></li>
                                        <li><a className="waves-effect waves-napp"  href="firstPersonShooter.html">Block Hunter</a></li>
                                        <li><a className="waves-effect waves-napp"  href="tictac4.html">Tic Tac 4</a></li>
                                        <li><a className="waves-effect waves-napp"  href="crossReference.html">Cross Reference</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
                <div className="container" style={{width:"90%"}}>
                <div className="nav-wrapper" style={{textAlign:"center", position:'relative'}}>
                <a className="page-title" style={{fontSize:'20pt'}}>Nissen-Hooper</a>
                    </div>
                    </div>
            </nav>

        );
    }
});

var paddit=function(){
    if(!mobile){
        $('body').css("padding-left",'240px');
    }
    console.log($(window).width());
    if($(window).width()<=800){
        $('body').css("padding-left",'0px');
    }
};

React.render(
<NavBar/>,
    document.getElementById('nav'),
    function(){
        $("nav .button-collapse").sideNav({
            backgroundColor:"indigo darken-3"
        });
        $('nav .collapsible').collapsible();
        paddit();
    }
);

$(window).resize(function(){
    console.log("resized");
    paddit();
});
