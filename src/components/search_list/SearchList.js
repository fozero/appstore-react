import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchList.scss';
class SearchList extends Component {
  render() {
    return (
      <div className='searchList-container'>
        <ul className='list'>
          {
            this.props.searchList.map((item, index) => {
              return (
                <li className='list-item' key={index}>
                  <img className='app-icon' src={item.artworkUrl100} alt="" />
                  <div className='app-info'>
                    <div className='app-name'>{item.trackName}</div>
                    <div className='app-summary'>{item.primaryGenreName}</div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchList: state.searchList
})

export default connect(mapStateToProps)(SearchList);