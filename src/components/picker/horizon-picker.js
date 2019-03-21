import React from 'react'

import data from '../../../data/all.json'
import HorizonNimblePicker from './horizon-nimble-picker'

import { PickerPropTypes } from '../../utils/shared-props'
import { PickerDefaultProps } from '../../utils/shared-default-props'

export default class HorizonPicker extends React.PureComponent {
  render() {
    return <HorizonNimblePicker {...this.props} {...this.state} />
  }
}

Picker.propTypes /* remove-proptypes */ = PickerPropTypes
Picker.defaultProps = { ...PickerDefaultProps, data }
