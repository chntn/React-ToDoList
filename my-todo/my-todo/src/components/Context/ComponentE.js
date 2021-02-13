import React, { useContext } from 'react'
import ComponentF from './ComponentF';

import {UserContext} from '../../App';

function ComponentE() {

	const user  = useContext(UserContext);
	return (
	<> Componenet E <br/>
	{user}
	<ComponentF />
	</>
	)
}

export default ComponentE