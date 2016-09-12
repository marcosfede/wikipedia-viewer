import React, { Component } from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Searchbar from './components/Searchbar'
import Article from './components/Article'
import { lightGreen100 } from 'material-ui/styles/colors'
import $ from 'jquery'

const styles = {
  App: {
    backgroundColor: lightGreen100
  }
}

class App extends Component {

  constructor () {
    super()
    this.state = {
      searchField: '',
      queryData: [],
      emptyQuery: false,
      loading: false,
    }
  }

  handleChange = (e, value) => {
    this.setState({
      searchField: value,
    })
  }

  handleSubmit = (e) => {
    if (e.key === 'Enter') {
      if (this.state.searchField === '') {
        this.setState({ emptyQuery: true, loading: true })
      }
      else {
        const api = 'https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&format=json&search='
        const cb = '&callback=?'
        $.ajax({
          type: "GET",
          url: api + this.state.searchField + cb,
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: (data) => {
            console.log(data)
            let processedData = Object.keys(data[ 1 ]).map((result, index) => {
              return {
                title: data[ 1 ][ result ],
                description: data[ 2 ][ result ],
                link: data[ 3 ][ result ]
              }
            })
            this.setState({
              queryData: processedData,
              loading: false
            })
          },
          error: (err) => console.error(err)
        })
      }
    }
  }

  render () {
    let renderData = this.state.queryData.map((result, i) => {
      return (
        <Article
          key={i }
          article={result}
        />
      )
    })

    return (
      <div style={styles} id="App" className='App'>
        <Topbar/>
        <div id="content">
          <p id="title">Wikipedia Viewer</p>
          <Searchbar
            handleSubmit={this.handleSubmit}
            onChange={this.handleChange}
            emptyError={this.state.emptyQuery}
          />
          {renderData}
        </div>
      </div>
    )
  }
}

export default App
