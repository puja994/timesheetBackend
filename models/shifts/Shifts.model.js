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

export const getShifts = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await ShiftsSchema.find();

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
}

export const deleteShifts = _id => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await ShiftsSchema.findByIdAndDelete(_id);

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};
