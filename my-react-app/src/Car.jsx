import React from "react";

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
        this.color = "red";
    }
    // changeColor = function(){
    //     document.getElementById("demo").innerHTML +=color;
    // }
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
class CarManufacature extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         name: "BMW",
    //         year: "2014"
    //     };
    // }
    constructor(propst){
        super(propst);
        this.state = propst;
    }
    getderivedStateFromProps(props, state){
        return {name: props.name};
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.name === "Volvo"){
            return false;
        }
        return true;
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.setState({name: "Volvo1"});
        }, 2000);
        console.log("componentDidMount");
    }
    componentDidUpdate(prevProps, prevState){
        console.log("getcomponentDidUpdate: ", prevProps, prevState);
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate: ", prevProps, prevState);
        return null;
    }
    render(){
        // alert("car manfacture units");
        return( 
            <>
            <h1>welcome to car Manufacature place: {this.state.name}</h1>
            <button onClick={() => this.methods()}>Show Alert</button>
            </>
        );
    }
    methods(){
        alert("car manfacture units");
    }
}

// export default { Car, CarManufacature};
export {Car as car, CarManufacature};
// export default {car = car, carManufacature=carManufacature};