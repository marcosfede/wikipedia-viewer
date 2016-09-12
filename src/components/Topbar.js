import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { blue700 } from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon';
import 'font-awesome/css/font-awesome.css'


const styles = {
  title: {
    cursor: 'pointer',
  },
  bar: {
    'backgroundColor': blue700
  },
  github: {
    margin: 12,
  }
}

const AppBarExampleIconButton = (props) => (
  <AppBar
    style={styles.bar}
    title={<span style={styles.title}>Wikipedia Viewer</span>}
    iconElementLeft={<div></div>}
    iconElementRight={
      <FlatButton
        href='https://github.com/marcosfede/wikipedia-viewer'
        secondary={true}
        icon={<FontIcon className='fa fa-github' hoverColor={blue700} />}
        style={styles.github}
      />
    }
  />
)

export default AppBarExampleIconButton;