import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import './Cards.css'

const Cards = ({data}) => {
  const {confirmed, recovered, deaths, lastUpdate} = data
  console.log(lastUpdate)

  if (!(confirmed || recovered || deaths || lastUpdate)) {
    return "Loading..."
  }

  console.log("Confirmed in cards", confirmed)

  return (
    <div className="container">
      <Grid container spacing={3} jusify="center">
        <Grid item xs={12} md={3} component={Card} className="card infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
              />
            </Typography>
            <Typography>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body1">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className='card recovered'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp start={0}
              end={recovered.value}
              duration={2.5}
              separator=","
              />
            </Typography>
            <Typography>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body1">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className='card deaths'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
              />
            </Typography>
            <Typography>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body1">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards