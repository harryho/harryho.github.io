



console.log(" 1==true : ", 1 == true)

console.log(" ''==true : ", '' == true)

console.log(" '1'==true : ", '1' == true)

console.log(" \"1\"==true : ", "1" == true)

console.log(" {}==true : ", [{}] == true)

console.log(" []==true : ", ['1'] == true)



console.log(" 0==false : ", 0 == false)

console.log(" 1==false : ", 1 == false)

console.log(" ''==false : ", '' == false)

console.log(" '1'==false : ", '1' == false)

console.log(" \"\"==false : ", "" == false)

console.log(" {}==false : ", {} == false)

console.log(" []==false : ", [] == false)



console.log(" null==false : ", null == false)

console.log(" undefined==false : ", undefined == false)

console.log(" undefined==null : ", null == undefined)



var obj0 = {
    prop: 'obj',
    func_1: function () {
        console.log(' func_1-> ', this);
        var func_2 = {
            prop: 'func_2',
            func_3: function () {
              //  this.prop = 'func_3'; uncomment and test again
                console.log(' func_3 -> ', this);
            }
        }
        func_2.func_3();
    }
}
obj0.func_1()



console.log(' obj 1 -------------------------------------- ');


var obj1 = {
    prop: 'obj1',
    func_1: function () {
        console.log(' func_1-> ', this);
        func_2 = function () {
            this.prop = 'func_2';
            var func_3 = function () {
                this.p = 'func_3';
                console.log(' func_3 -> ', this);
            }
            return func_3
        };
        func_2()();
    }
};

obj1.func_1();



//---------------------------------
console.log(' obj 2 -------------------------------------- ');

var obj2 = {

    prop: 123,

    func_1: () => {

        console.log(' func_1-> ', this);
        func_2 = {
            prop: 'func_2',
            func_3: () => {
                this.p = 'func_3';
                console.log(' func_3 -> ', this);
            }
        };
        func_2.func_3();
    }
};

obj2.func_1();


console.log(' obj 2_1 -------------------------------------- ');

var obj2_1= {

    prop: 123,

    func_1: () => {

        console.log(' func_1-> ', this);
        func_2 = () => {
            // this.prop = 'func_2';
            func_3= () => {
                this.p = 'func_3';
                console.log(' func_3 -> ', this);
            }
            return func_3;
        };
        func_2()();
    }
};

obj2_1.func_1();

////////////////////////////////////////



var obj3 = {
    p: 'obj3',
    toBeCalled: function () {
        console.log(' this is toBeCalled ', this.p);
    },
    toBind: function (obj) {
        obj.toBeCalled();
    }
};
var testBind = obj3.toBind;
testBind(obj3);

var obj4 = {
    p: 'obj4',
    toBeCalled: () => {
        console.log(' this is toBeCalled ', this.p);
    },
    toBind: obj => {
        obj.toBeCalled();
    }
};
var testBind2 = obj4.toBind;
testBind2(obj4);

////////////////


var var1;
let letVar;
const constVar;

function testVar() {
    console.log( var1);
    console.log( constVar);
    console.log( letVar);
}


///////////////////////



function testVarLet() {

    for ( var i = 0 ; i < 5 ; i++ ){
        var x = 20;
        console.log( i);
    }
    console.log( i );
    console.log( x );

    for ( var i = 1 ; i < 10 ; i++ ){
        var i = 8
        console.log(i);
    }

    for ( let t = 0 ; t < 5 ; t++ ){
        console.log( t);
        let s = 100
    }
    console.log(s)  
    console.log(t)  

    for ( let b = 0 ;  b < 5 ; b++ ){
        console.log( b );
       let b = 100;
      // console.log(t)  
    }

}
testVars();

function testLet() {
    console.log( letVar);
}


var v1 = "";
var v1 = 123;

let let1 = "";
let let1 = 123;

const c1 = "";
c1 = 123;


const arrFunc = p1 =>  p2 => console.log(` ${p1} ${p2}`)
arrFunc("Hello")("World")

const arrFunc2 = p1 =>  {
    return p2 => console.log(` ${p1} ${p2}`)
}
arrFunc2("Hello")("World")


const message = `
hello 
developer
${1+1} 
${new Date()} 
`
console.log( message)


///////////////////////

const person = {
    name: "name",
    fullName: "full name",
    email: "email@test.com"
}

const testDestructor = (p) =>
{
    const { name, fullName , email } = {...p};
    console.log(`
        name: ${name}
        fullName: ${fullName}
        email: ${email}
        ${new Date()} 
    `)
}
testDestructor( person )