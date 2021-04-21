import React from 'react';

// without breaking up components:

export const Parent = ({ name, list, updateItem }) => (
	<div>
		<span>{name}</span>
		<div>
			{list.map(item => (
				<div key={item.id}>
					<span>{item.id}</span>
					<span>{item.name}</span>
					<button onClick={() => updateItem(item.id)}>remove</button>
				</div>
			))}
		</div>
	</div>
);