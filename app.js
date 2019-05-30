const yargs = require ("yargs")
const {addTask, listTask} = require ('./todo')
yargs.command({
    command:'add',
    describe: 'Add Todo Task to file..',
    builder :{
        
        title:{
            describe:'Title for todo task',
            alias : 't',
            // demandOption: true,
            type: 'string',
            // default:'...',
        },   

        description:{
            describe:'Descript for the task',
            alias: 'd',
            demandOption: true,
            type: 'string',
        },

        
    }, 
    
    handler : (argv ) =>{
        
        addTask(argv.title, argv.description)
        // console.log(`To do task with title ${argv.title} is added in to the database`)
    }


})

yargs.command({
    command: 'list',
    describe: 'list all tasks..',
    handler (){
        listTask()
        // console.log(" list command")
    }
})

yargs.parse()