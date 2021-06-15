import employeesSchema from './Employee.schema.js'

export const addEmployee = obj =>{
    return new Promise((resolve,reject)=>{
        try{
            employeesSchema(obj)
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


export const getEmployee = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await employeesSchema.find();

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
}

export const updateEmployee = ({ _id, editEmployee }) => {
	return new Promise(async (resolve, reject) => {
		try {
			console.log(_id, editEmployee)
			const result = await employeesSchema.findByIdAndUpdate(
				{ _id },
				{ $set: editEmployee },
				{
					new: true,
				}
			);
console.log(result, "frmmodel")
			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};


export const deleteEmployees = _id => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await employeesSchema.findByIdAndDelete(_id);

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};