import { useState, useEffect } from 'react'
import axios from 'axios'
function App() {
const [users, setUsers] = useState([])
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const fetchUsers = async () => {
const res = await axios.get('http://localhost:5000/api/users')
setUsers(res.data)
}
const handleSubmit = async (e) => {
e.preventDefault()
await axios.post('http://localhost:5000/api/users', { name, email })
setName('')
setEmail('')
fetchUsers()
}
useEffect(() => {
fetchUsers()
}, [])
return (
<div>
<h1>User List</h1>
<form onSubmit={handleSubmit}>
<input placeholder="Name" value={name} onChange={(e) =>
setName(e.target.value)} />
<input placeholder="Email" value={email} onChange={(e) =>
setEmail(e.target.value)} />
<button type="submit">Add User</button>
</form>
<ul>
{users.map((u) => (
<li key={u.id}>{u.name} - {u.email}</li>
))}
</ul>
</div>
)
}
export default App