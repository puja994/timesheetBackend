import employeesSchema from './Employee.schema.js'

export const addEmployee = obj =>{
    return new Promise((resolve,reject)=>{
        try{
            employeesSchema(obj)
            .save()
            .then(data => resolve(data))
            .catch(error => reject(error))

        }catch(error){
            reject(error)
        }
    })
}