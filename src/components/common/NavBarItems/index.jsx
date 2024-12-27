import React from "react";

const NavbarItems = ({items, listClass}) => {
	return (
			<>
				{items.map((category) => (
					<li key={category.id}>
						<a
							href={`#${category.id}`}
							className={listClass}
						>
							{category.name}
						</a>
					</li>
				))}
			</>
	);
};

export default NavbarItems;
