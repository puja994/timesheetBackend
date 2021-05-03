import UserSchemas from './User.schema.js'

export const createUser = userObj => {
	return new Promise((resolve, reject) => {
		try {
			UserSchemas(userObj)
				.save()
				.then(data => resolve(data))
				.catch(error => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};
  
