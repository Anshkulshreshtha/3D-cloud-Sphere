$(document).ready(function(){
    var entries = [
        {image: './Static/images/java.png', width: '50', height: '50'},
        {image: './Static/images/html-5.png', width: '50', height: '50'},
        {image: './Static/images/css-3.png', width: '50', height: '50'},
        {image: './Static/images/flask.png', width: '50', height: '50'},
        {image: './Static/images/github.png', width: '50', height: '50'},
        {image: './Static/images/java-script.png', width: '50', height: '50'},
        {image: './Static/images/bootstrap.jpg', width: '50', height: '50'},
        {image: './Static/images/sql.jpg', width: '50', height: '50'},
        {image: './Static/images/jquery.png', width: '50', height: '50'},
        {image: './Static/images/python.png', width: '50', height: '50'},
        {image: './Static/images/react.png', width: '50', height: '50'}
    ];

    var settings = {
        entries: entries,
        width: 480,
        height: 480,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: '#111',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 1.5,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#fff',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',
        tooltipFontStyle: 'normal',
        tooltipFontStretch: 'normal',
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10
    };

$( '#holder' ).svg3DTagCloud( settings );
});