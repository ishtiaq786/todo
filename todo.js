const fs = require('fs');
const chalk = require('chalk');


const addTask = (title, description) => {

    console.log(chalk.green(" task title" , title , " description" , description))
    const data = loadData()

    

    
    const saveToDatabase = (dataToAdd) =>{
        const jsonData = JSON.stringify(dataToAdd)
        fs.writeFileSync("data.txt",jsonData)
    }

    const chkDuplicate = (title, data) => {
        const dataFound =data.filter(d => d.title === title)
        return(dataFound.length === 0) ? false : true
    }
    const isDuplicate = chkDuplicate (title , data)

    if(isDuplicate){
        return console.log("Task already is database")
    }

    else {
        const newTask ={
            title,
            description
        }
        const tmpData = [...data,newTask]
       
        saveToDatabase(tmpData)
    }
    


    


    



}
const loadData = () => {
    try{
        const rawData = fs.readFileSync("data.txt") 
        const parseData = JSON.parse(rawData)
        return parseData
    }

   catch(e){
       return []
   }
}

const listTask = () => {
    const data = loadData()

    if(data.length === 0){
        console.log(chalk.inverse.bold("Mo Tasks to list!"))
    }
    data.map(d=>{
        console.log(chalk.white.bgBlue.bold(d.title))
        console.log(chalk.blue(" " +d.description))
    })


}


module.exports = {
    addTask,
    listTask,
}