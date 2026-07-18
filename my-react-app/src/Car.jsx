class car{
    constructor(name, year){
        this.name = name;
        this.year = year;
        this.color = "red";
    }
    changeColor = function(){
        document.getElementById("demo").innerHTML +=color;
    }
    present(){
        return 'I have a ' + this.name + ' from ' + this.year;
    }
    display(){
        return this.present();
    }
    MyList({values}){
        return( 
            <ul> Cars List:
            {values.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
            </ul>
        );
    }
}
export default car;