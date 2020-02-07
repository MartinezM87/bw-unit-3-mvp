import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, event: '', location: '', time: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.event || !user.location || !user.time) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Event</label>
			<input type="text" name="event" value={user.event} onChange={handleInputChange} />
			<label>location</label>
			<input type="text" name="location" value={user.location} onChange={handleInputChange} />
			<label>Time</label>
			<input type="text" name="time" value={user.time} onChange={handleInputChange} />
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm
