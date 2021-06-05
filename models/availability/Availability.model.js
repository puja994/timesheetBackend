import AvailableSchema from './Availability.schema.js'

export const saveAvailability = obj => {
    return new Promise((resolve, reject)=>{
        try{
            AvailableSchema(obj)
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

// export const getShifts = () => {
// 	return new Promise(async (resolve, reject) => {
// 		try {
// 			const result = await ShiftsSchema.find({
// 				name:"shift.name",
// 				eId: "shift.eId",
// 				startTime: "shift.eId.startTime",
// 				endTime: "shift.eId.endTime",

// 			});

// 			resolve(result);
// 		} catch (error) {
// 			reject(error);
// 		}
// 	});
// }

export const getAvailability = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await AvailableSchema.find();

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
}


export const deleteAvailability = _id => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await AvailableSchema.findByIdAndDelete(_id);

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};
