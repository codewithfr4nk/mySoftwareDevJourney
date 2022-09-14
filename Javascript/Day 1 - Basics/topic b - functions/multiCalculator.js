function cal(opp, num, num3) {
    function add() {
        console.log(`Sum: ${num + num3}`);
    };
    add();

    function sub() {
        console.log(`Sub: ${num - num3}`);
    };
    sub();

    function mult() {
        console.log(`Mult: ${num * num3}`);
    };
    mult();

    function div() {
        console.log(`Div: ${num / num3}`);
    };
    div();
};

cal('sub', 50, 10);