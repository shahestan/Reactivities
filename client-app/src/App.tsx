import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header, List, Table } from 'semantic-ui-react'

function App() {

	const [activities, setActivities] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:5000/api/activities").then(response => {
			console.log(response);
			setActivities(response.data);
		})
	}, []);

	return (
		<div>
			<Header as='h2' icon='users' content='Reactivities' />
			<List>
				{activities.map((activity: any) => (
					<List.Item key={activity.id}>
						{activity.title}
					</List.Item>
				))}
			</List>

			<Table singleLine>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Title</Table.HeaderCell>
						<Table.HeaderCell>Date</Table.HeaderCell>
						<Table.HeaderCell>Description</Table.HeaderCell>
						<Table.HeaderCell>Category</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{activities.map((activity: any) => (
						<Table.Row key={activity.id}>
							<Table.Cell>{activity.title}</Table.Cell>
							<Table.Cell>{activity.date}</Table.Cell>
							<Table.Cell>{activity.description}</Table.Cell>
							<Table.Cell>{activity.category}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
			
		</div>
	);
}

export default App;
