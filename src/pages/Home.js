import React, { Component } from 'react';
import Search from '../components/search/Search';
import Recommend from '../components/recommend/Recommend';
import AppList from '../components/app_list/AppList';
import $api from '../api/index.js';
import './Home.scss';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      appList:[],
      recommendList:[]
    };
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.loadData();
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  
  // 拉取数据
  loadData(){
    this.getAppList();
    this.getRecommendList();
  }

  getAppList(){
    $api.appListData({}).then((response) => {
      let feed = response.feed;
      this.setState({
        appList: feed.entry
      })
    }).catch(err => {
      console.log(err)
    })
  }
  getRecommendList(){
    $api.recommendData({}).then((response) => {
      let feed = response.feed;
      this.setState({
        recommendList: feed.entry
      })
    }).catch(err => {
      console.log(err)
    })
  }

  onFoucs(){
    this.props.history.push("/search/result");
  }

  render() {
    return (
      <div className='container'>
        <div className='search-bar'>
          <Search onFoucs={this.onFoucs.bind(this)}></Search>
        </div>
        <Recommend list={this.state.recommendList}></Recommend>
        <AppList list={this.state.appList}></AppList>
      </div>
    );
  }
}

export default Index;