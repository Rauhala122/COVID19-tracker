import React, {useState, useEffect} from 'react'
import {fetchDailyData} from '../../api'
import {Line, Bar} from 'react-chartjs-2'
import './Chart.css'

const Chart = ({data, country}) => {
  const {confirmed, recovered, deaths} = data
  const [dailyData, setDailyData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const dailyData = await fetchDailyData()
      setDailyData(dailyData)
      console.log(dailyData.map(data => data.deaths.total))
    }

    fetchData()
  }, [])

  const lineChart = (
    dailyData.length
    ? (<Line data={{
      labels: dailyData.map(data => data.reportDate),
      datasets: [{
        data: dailyData.map(data => data.totalConfirmed),
        label: "Infected",
        borderColor: '#3333ff',
        fill: true
      }, {
        data: dailyData.map(data => data.deaths.total),
        label: "Deaths",
        borderColor: 'rgba(255,0,0,0.5)',
        fill: true
      }]
    }}
    />)
    :
    null
  )

  const barChart = (
    data.confirmed
    ? (<Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [{
          label: "People",
          backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
          data: [confirmed.value, recovered.value, deaths.value]
        }]
      }}
      options={{
        legend: {display: false},
        title: {display: true, text: `Current state in ${country}`}
      }}
    />)
    :
    null
  )

  return (
    <div className="container">
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart
