import React from "react";

//create your first component
const Card = () => {
	return (
		<div className="cards-section">
			{/* First Card */}
			<div className="card card-styles">
			  <img className="card-img-top" src="https://images.unsplash.com/photo-1696289186765-e1dd0559c921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title">Card title</h4>
			    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit excepturi sint reprehenderit, quaerat consequuntur quasi! Eum animi cum dolorem itaque.</p>
			  </div>			
			  <div className="bg-light border-top py-2">
			    	<a href="#" className="btn btn-primary">Find Out More!</a>
				</div>
			</div>
			{/* Second Card */}
			<div className="card card-styles">
			  <img className="card-img-top" src="https://images.unsplash.com/photo-1696289186765-e1dd0559c921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title">Card title</h4>
			    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit excepturi sint reprehenderit, quaerat consequuntur quasi! Eum animi cum dolorem itaque.</p>
			  </div>			
			  <div className="bg-light border-top py-2">
			    	<a href="#" className="btn btn-primary">Find Out More!</a>
				</div>
			</div>
			{/* Third Card */}
			<div className="card card-styles">
			  <img className="card-img-top" src="https://images.unsplash.com/photo-1696289186765-e1dd0559c921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title">Card title</h4>
			    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit excepturi sint reprehenderit, quaerat consequuntur quasi! Eum animi cum dolorem itaque.</p>
			  </div>			
			  <div className="bg-light border-top py-2">
			    	<a href="#" className="btn btn-primary">Find Out More!</a>
				</div>
			</div>
			{/* Fourth Card */}
			<div className="card card-styles">
			  <img className="card-img-top" src="https://images.unsplash.com/photo-1696289186765-e1dd0559c921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title">Card title</h4>
			    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit excepturi sint reprehenderit, quaerat consequuntur quasi! Eum animi cum dolorem itaque.</p>
			  </div>			
			  <div className="bg-light border-top py-2">
			    	<a href="#" className="btn btn-primary">Find Out More!</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
