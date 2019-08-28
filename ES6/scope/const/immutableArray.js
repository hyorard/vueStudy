function home(){
    const list=["gerrard","henderson","robertson","mane","salah"];
    list.push("arnold");
    console.log(list);
}

// const 재할당은 불가능하지만, 변경( 추가, 삭제.. 등 )은 가능하다.

// how to make immutable array

home();

const list=["gerrard","henderson","robertson","mane","salah"];
list2 = [].concat(list,"arnold");
console.log(list === list2);