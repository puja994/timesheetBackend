import ShiftsSchema from './Shifts.schema.js'

export const saveTime = obj => {
    return new Promise((resolve, reject)=>{
        try{
            ShiftsSchema(obj)
            .save()
            .then(data => resolve(data))
            .catch(error => {
                console.log(error)
                reject(error)})

        }catch(error){
            console.log(error)
            reject(error)
           
        }
    })
}