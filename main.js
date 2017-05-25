var canvas = new fabric.Canvas('c', { selection: false });
var grid = 50;

// create grid

// for (var i = 0; i < (600 / grid); i++) {
//     canvas.add(new fabric.Line([i * grid, 0, i * grid, 600], { stroke: '#ccc', selectable: false }));
//     canvas.add(new fabric.Line([0, i * grid, 600, i * grid], { stroke: '#ccc', selectable: false }))
// }


var wall = new fabric.Rect({
    width: 1600,
    height: 724,
    fill: 'transparent'
});

var floor = new fabric.Rect({
    top: 724,
    width: 1600,
    height: 200,
    fill: '#ff0000',
    opacity: 0
});

var frontObjects = new fabric.Rect({
    width: 1600,
    height: 900
});
frontObjects.selectable = false;

// add objects
canvas.add(wall);
canvas.add(floor);
canvas.add(frontObjects);

canvas.add(new fabric.Rect({
    left: 100,
    top: 100,
    width: 50,
    height: 50,
    fill: '#faa',
    originX: 'left',
    originY: 'top',
    centeredRotation: true
}));

canvas.add(new fabric.Circle({
    left: 300,
    top: 300,
    radius: 50,
    fill: '#9f9',
    originX: 'left',
    originY: 'top',
    centeredRotation: true
}));

// snap to grid
canvas.on('object:moving', function (options) {
    options.target.set({
        left: Math.round(options.target.left / grid) * grid,
        top: Math.round(options.target.top / grid) * grid
    });
});

canvas.setBackgroundImage('assets/room_foreground_23.png', canvas.renderAll.bind(canvas), {
    backgroundImageOpacity: 0.5,
    backgroundImageStretch: false
});

fabric.util.loadImage('assets/room_background_23.png', function (img) {
    frontObjects.setPatternFill({
        source: img
    });
    canvas.renderAll();
});

function coverWallWithTiles() {
    fabric.util.loadImage('assets/tile_353.jpg', function (img) {
        wall.setPatternFill({
            source: img,
            repeat: 'repeat'
        });
        canvas.renderAll();
    });
}