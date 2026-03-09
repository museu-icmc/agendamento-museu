import { useState } from 'react'
import './App.css'

import FullRegister from './components/FullRegister'

function App() {
	return (
		<>
			<div className="flex flex-row gap-4 p-4">
				<FullRegister />
			</div>
		</>
	)
}

export default App
