const vechile = {
    start:function(){
        console.log('Engine Started');
    }

};

const car= Object.create(vechile);
car.brand='toyota';
car.start();
console.log(vechile.brand);
console.log(car.brand);
