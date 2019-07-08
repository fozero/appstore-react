import React, { Component } from 'react';
import { debounce} from '../../utils/commons'

// css module 以为xx.module.css格式命名
// 使用方式<input className={search.input} type="text" placeholder="搜索应用"/>
import "./Search.scss";
class Search extends Component {

    constructor(props){
        super(props);
        this.showCancelBtn = false;
        this.state = {};
    }

    componentDidMount(){
        this.setState({
            showCancelBtn: this.props.showCancelBtn
        })
    }

    appSearch = debounce(() => {
        // 非受控组件获取input值  设置input ref属性  通过 this.refs.keyword.value获取
        let keyword = this.refs.keyword.value;
        // 触发父组件事件
        this.props.appSearch(keyword);
    }, 500);

    onFoucs(){
        this.props.onFoucs();
    }
    onCancel(){
        this.props.onCancel();
    }

    focus(){
        this.refs.keyword.focus();
    }

    render() {
        return (
            <div className='search-container'>
                <div className='search-bar'>
                    <input className='search-input' type="text" ref='keyword' onChange={this.appSearch.bind(this)} onFocus={this.onFoucs.bind(this)} placeholder="搜索应用" />
                    {
                        this.state.showCancelBtn &&
                        <div className='search-cancel' onClick={this.onCancel.bind(this)}>取消</div>
                    }
                </div>
            </div>
        );
    }
}

export default Search;