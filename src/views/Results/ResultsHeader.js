import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {format, subDays} from 'date-fns'

// styled-components
import {Center} from './styles'

@inject('store') @observer
export default class ResultsHeader extends Component {
  render() {
    const {rPest, rStation, getStartDate, rEndDate, getCumulativeDegreeDay, missingValue} = this.props.store.app
    const displayEndDate = format(subDays(rEndDate, 5), 'MM/DD/YYYY')
    const displayStartDate = format(getStartDate, 'MM/DD/YYYY')
    return (
      <div>
        <Center>
          <h4>{rPest.informalName} Results for {rStation.name}</h4>
        </Center>
        <Center>
          <h5>Accumulated Degree Days ({rPest.baseTemp}°F) {displayStartDate} through {displayEndDate}:      {getCumulativeDegreeDay[getCumulativeDegreeDay.length - 6]}
          <span style={{'fontWeight': '100','marginLeft': '3px'}}>({missingValue} {missingValue > 1 ? 'days' : 'day'} missing)</span>
          </h5>
        </Center>
      </div>
    )
  }
}
