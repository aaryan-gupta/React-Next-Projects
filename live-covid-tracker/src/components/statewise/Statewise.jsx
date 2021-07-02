import "./statewise.css"
import React, { useEffect, useState } from 'react'

const Statewise = () => {
	const [data, setData] = useState([])
	const getCovidData = async () => {
		const response = await (await fetch("https://api.covid19india.org/data.json")).json()
		setData(response.statewise)
	}
	useEffect(() => {
		getCovidData()
	}, [])
	return (
		<div className="container pt-5">
			<h1 className="text-center">INDIA COVID-19 Dashboard</h1>
			<table class="table table-responsive table-hover my-5">
				<thead className="bg-dark text-white text-uppercase">
					<tr>
						<th scope="col">#</th>
						<th scope="col">State</th>
						<th scope="col">Confirmed</th>
						<th scope="col">Recovered</th>
						<th scope="col">Deaths</th>
						<th scope="col">Active</th>
						<th scope="col">Updated</th>
					</tr>
				</thead>
				<tbody>
					{
						data.map((item, index) => (
							<tr key={index}>
								<th scope="row">{index}</th>
								<th scope="row">{item.state}</th>
								<td>{item.confirmed}</td>
								<td>{item.recovered}</td>
								<td>{item.deaths}</td>
								<td>{item.active}</td>
								<td>{item.lastupdatedtime}</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	)
}

export default Statewise
