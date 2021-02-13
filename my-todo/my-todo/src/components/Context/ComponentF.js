import React, { useContext } from 'react'

import {LastNameContext} from '../../App';

function ComponentF() {

	const lastName  = useContext(LastNameContext);

	return (
		<><br/>Component F<br/> {lastName}</>
	)
}

export default ComponentF