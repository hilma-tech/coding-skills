import React, { useEffect } from 'react';

export const NotDestructuringProps = props => {

	useEffect(() => {
		///
	}, [props.id]);

	return (
		<div>{props.name}</div>
	);
}



export const DestructuringProps = ({ id, name }) => {

	useEffect(() => {
		///
	}, [id]);

	return (
		<div>{name}</div>
	);
}