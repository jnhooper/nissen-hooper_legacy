var BulletPoint = React.createClass({
    render:function(){
        var self = this
        function createMarkup() { return {__html: self.props.content}; };
        return(
            <li>&#8226; <span className="flow-text" dangerouslySetInnerHTML={createMarkup()}></span></li>
        )
    }
});

var HeadedList = React.createClass({
    render: function () {
        var points=[];
        var self = this;
        _.each(this.props.points,function(point,i){
            var point={content:point, key:self.props.firstLine+i};
            points.push(<BulletPoint {...point}/>);
        });
        return (
            <li>
                <div className="collapsible-header" style={{height:'auto'}}>
                    <h4>{this.props.firstLine}</h4>
                    <h5>{this.props.secondLine}</h5>
                    <h6>{this.props.dates}</h6>
                </div>
                <div className="collapsible-body">
                    <ul>{points}</ul>
                </div>
            </li>
        )
    }
});

