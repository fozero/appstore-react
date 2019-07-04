import React, { Component } from 'react';


// 引入scss  使用${mystyle.huangbiao}
// import search from "./search.scss";
// 全局引入  使用<input className='input' type="text" placeholder="搜索应用"/>
import "./search.scss";  
class Search extends Component {
    render() {
        return (
            <div>
                <input className='input' type="text" placeholder="搜索应用"/>
            </div>
        );
    }
}

export default Search;