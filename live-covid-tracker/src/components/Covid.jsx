import React, { useEffect, useState } from 'react'
import "./covid.css"

const Covid = () => {
	const [data, setData] = useState([])
	const getCovidData = async () => {
		try {
			const response = await (await fetch("https://api.covid19india.org/data.json")).json()
			setData(response.statewise[0])
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		getCovidData()
	}, [])
	return (
		<div className="bg-dark text-white h-auto">
			<div className="container p-5 text-center">
				<h6>🔴 LIVE</h6>
				<h1>COVID-19 CORONAVIRUS TRACKER</h1>
				<div className="row mt-5 pt-5 pb-4">
					<div className="col-md-4 hover">
						<div className="card mx-2 bg-primary" style={{ width: "18rem;" }}>
							<div className="card-body">
								<span className="h6"> OUR </span>
								<span className="h3"> COUNTRY </span>
								<h1 className="pb-5 pt-4">INDIA</h1>
							</div>
						</div>
					</div>
					<div className="col-md-4 hover">
						<div className="card mx-2 bg-success" style={{ width: "18rem;" }}>
							<div className="card-body">
								<span className="h6"> TOTAL </span>
								<span className="h3"> RECOVERED </span>
								<h1 className="pb-5 pt-4">{data.recovered}</h1>
							</div>
						</div>
					</div>
					<div className="col-md-4 hover">
						<div className="card mx-2 bg-warning" style={{ width: "18rem;" }}>
							<div className="card-body">
								<span className="h6"> TOTAL </span>
								<span className="h3"> CONFIRMED </span>
								<h1 className="pb-5 pt-4">{data.confirmed}</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="row py-4">
					<div className="col-md-4 hover">
						<div className="card mx-2 bg-danger" style={{ width: "18rem;" }}>
							<div className="card-body">
								<span className="h6"> TOTAL </span>
								<span className="h3"> DEATHS </span>
								<h1 className="pb-5 pt-4">{data.deaths}</h1>
							</div>
						</div>
					</div>
					<div className="col-md-4 hover">
						<div className="card mx-2 bg-primary" style={{ width: "18rem;" }}>
							<div className="card-body">
								<span className="h6"> TOTAL </span>
								<span className="h3"> ACTIVE </span>
								<h1 className="pb-5 pt-4">{data.active}</h1>
							</div>
						</div>
					</div>
					<div className="col-md-4 hover">
						<div className="card mx-2 bg-secondary" style={{ width: "18rem;" }}>
							<div className="card-body">
								<span className="h6"> LAST </span>
								<span className="h3"> UPDATED </span>
								<h1 className="pt-4">{data.lastupdatedtime}</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Covid
