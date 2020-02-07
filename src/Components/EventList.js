import React, { useState, Fragment } from 'react'
import AddUserForm from '../forms/AddEventForm'
import EditUserForm from '../forms/EditEventForm'
import UserTable from '../tables/EventTable'

const App = () => {
	// Data
	const usersData = [
		{ id: 1, event: 'D&D Night', location: '123 St, 1010 pl, Kentucky', time: 'Friday 10:30pm' },
		{ id: 2, event: 'Frisbee Tournament', location: 'Scranton Park, 123 BLV', time: 'Monday 2:00pm' },
		{ id: 3, event: 'Taco Tuesday', location: 'Chipotle, SouthPark Ave', time: 'Tuesday 7:25am' },
	]

	const initialFormState = { id: null, event: '', location: '', time: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, event: user.event, location: user.location, time: user.time })
	}

	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App
