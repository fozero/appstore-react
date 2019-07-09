import React, { Component } from 'react';
import ReactPullLoad, { STATS } from "react-pullload";
import "react-pullload/dist/ReactPullLoad.css";
import Search from '../components/search/Search';
import Recommend from '../components/recommend/Recommend';
import AppList from '../components/app_list/AppList';
import $api from '../api/index.js';
import './Home.scss';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      appList: [],
      appListAll: [],
      recommendList:[],
      hasMore: true,
      action: STATS.init,
      pageSize:10,
      page:1
    };
  }

  componentDidMount() {
    this.loadData();
  }

  componentWillUnmount() {
  }
  
  // 拉取数据
  loadData(){
    this.getAppList();
    this.getRecommendList();
  }

  getAppList(){
    $api.appListData({}).then((response) => {
      let list = response.feed.entry;
      this.setState({
        appListAll: list,
        hasMore: true,
        action: STATS.refreshed
      })
      this.getPageData(1);
    }).catch(err => {
      console.log(err)
      this.setState({
        action: STATS.refreshed
      })
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
  // 分页加载
  getPageData(page){
    let resultList = [], list = [];
    let appListAll = this.state.appListAll;
    let pageSize = this.state.pageSize;
    let totalPage = Math.ceil(appListAll.length / pageSize);//总页数
    let startIndex = pageSize * (page - 1);
    let endIndex = pageSize * page;
    for (let i = startIndex; i < endIndex; i++) {
      resultList.push(appListAll[i]);
    }
    if (page >= totalPage){
      this.setState({ hasMore: false});
    }
    if (page===1){
      list = resultList;
    }else{
      list = this.state.appList.concat(resultList);
    }
    this.setState({
      appList: list,
      page: page,
      pageSize: pageSize,
      action: STATS.reset
    })
  }

  onFoucs(){
    this.props.history.push("/search/result");
  }
  
  handleAction = action => {
    //new action must do not equel to old action
    if (action === this.state.action) {
      return false;
    }
    if (action === STATS.refreshing) {
      this.handRefreshing();
    } else if (action === STATS.loading) {
      this.handLoadMore();
    } else {
      //DO NOT modify below code
      this.setState({
        action: action
      });
    }
  };

  // 刷新
  handRefreshing = ()=>{
    this.setState({
      action: STATS.refreshing
    });
    this.getAppList();
  }

  // 加载更多
  handLoadMore = ()=>{
    if (STATS.loading === this.state.action) {
      return false;
    }
    //无更多内容则不执行后面逻辑
    if (!this.state.hasMore) {
      return;
    }
    // 显示正在加载
    this.setState({
      action: STATS.loading
    });
    let page = this.state.page+1;
    setTimeout(() => {
      this.getPageData(page);
    }, 1500);
  }

  render() {
    return (
      <div className='container'>
        <div className='search-bar'>
          <Search onFoucs={this.onFoucs.bind(this)}></Search>
        </div>
        <ReactPullLoad
          className="block"
          isBlockContainer={true}
          downEnough={100}
          action={this.state.action}
          handleAction={this.handleAction}
          hasMore={this.state.hasMore}
          distanceBottom={100}>
          <Recommend list={this.state.recommendList}></Recommend>
          <AppList list={this.state.appList}></AppList>
        </ReactPullLoad>
      </div>
    );
  }
}

export default Index;