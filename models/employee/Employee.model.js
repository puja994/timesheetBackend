import employeesSchema from './Employee.schema.js'

export const addEmployee = emp =>{
    return new Promise((resolve,reject)=>{
        try{
            employeesSchema(emp)
            .save()
            .then(data => resolve(data))
            .catch(error => reject(error))

        }catch(error){
            reject(error)
        }
    })
}