import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../../components/search/Search';
import SearchList from '../../components/search_list/SearchList';
import './SearchResult.scss';
import $api from '../../api/index.js';
import { saveSearchList, removeSearchList } from '../../store/action'
class SearchResult extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchList:[]
    }
  }
  // 搜索app
  appSearch(keyword) {
    $api.lookUp({}).then((response) => {
      this.setState({
        searchList: response.results
      })
      // dispatch action
      this.props.saveSearchList(this.state.searchList);
    }).catch(err => {
      console.log(err);
    })
  }

  componentDidMount(){
    this.manualFocusInst.focus();
  }

  onFoucs() {
  }

  onCancel(){
    this.props.history.push("/");
    // 删除历史结果
    this.props.removeSearchList();
  }


  render() {
    return (
      <div className='searchResult-container'>
        <Search appSearch={this.appSearch.bind(this)} ref={(ref)=>this.manualFocusInst = ref} onCancel={this.onCancel.bind(this)} onFoucs={this.onFoucs.bind(this)} showCancelBtn={true}></Search>
        <SearchList></SearchList>
      </div>
    );
  }
}

// 将state 映射到展示组件的 props 中
const mapStateToProps = (state) => ({
  searchList: state.searchList
})

const mapDispatchToProps = (dispatch) => ({
  saveSearchList: searchList => dispatch(saveSearchList(searchList)),
  removeSearchList: () => dispatch(removeSearchList())
})

// 通过connect生成容器组件
export default connect(mapStateToProps,mapDispatchToProps)(SearchResult);