import ShiftsSchema from './Shifts.schema.js'

export const saveTime = (name, datetime) => {
    return new Promise((resolve, reject)=>{
        try{
            ShiftsSchema(name, datetime)
            .save()
            .then(data => resolve(data))
            .catch(error => reject(error))

        }catch(error){
            reject(error)
        }
    })
}