// we can use name with comma : to give lable to any loop like
outer: for(let counter=1; counter<=10; counter++){
    document.write(counter);
    document.write('<br>');

    for( let counter2=1; counter2<3; counter2++){
        if(counter==3){
            break outer;
        }
        document.write('atul');
        document.write('<br>');
    }
}

// in this case lable of outer is given to the outer loop and while breaking the loop we used that lable to break the specific loop otherwise it would have broken the current loop which is the inner loop;