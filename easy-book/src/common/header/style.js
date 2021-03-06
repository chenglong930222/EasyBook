import styled from "styled-components";

export const Logo = styled.a`
  float: left;
  display: block;
  width: 100px;
  height: 56px;
  & > img {
	  width: 100%;
	  vertical-align: middle;
  }`;
export const NavBarWrapper = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
  & > .container {
    height: 56px;
  }
`;
export const Nav = styled.div`
  margin: 0 auto;
  // display: flow-root; //相当于清除浮动，在BFC中跟overflow:hidden,position非relative等属性一样
  width: 960px;
`;
export const NavBarItem = styled.li`
  padding: 0 20px;
  font-size: 17px;
  color: #333;
  height: 56px;
  text-align: center;
  line-height: 56px;
  float: left;
  &:nth-of-type(1),&:nth-of-type(2) {
    &:hover {
      background-color: #f2f2f2;
    }
  }
  .iconzhinanzhenfaxiandaohangdizhiweizhi {
    font-size: 20px;
    margin-right: 5px;
  }
  .iconphone {
    font-size: 20px;
    margin-right: 5px;
  }
`;
export const NavBarList = styled.ul`
  float: left;
`;
export const InputBarWrapper = styled.div`
  position: relative;
  z-index: 10;
`;
export const ToggleSearchBar = styled.div`
  position: absolute;
  width: 300px;
  padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #fff;
  // > .search-title {
    > .hot-search {
      float: left;
      margin-top: 20px;
      margin-bottom: 15px;
      line-height: 20px;
      font-size: 14px;
      color: #969696;
    }
    > .change-another {
      float: right;
      font-size: 13px;
      cursor: pointer;
      > .iconfont {
        display: inline-block;
        color: #666;
        margin-right: 3px;
        font-size: 12px;
        transition: all .2s ease-in;
        transform-origin: center center;
      }
    }
  // }
  > ul {
    width: 100%;
    overflow: hidden;
    > li {
      float: left;
      margin-right: 10px;
      margin-bottom: 15px;
      font-size: 12px;
      border: 1px solid #ddd;
      color: #787878;
      border-radius: 3px;
      line-height: 20px;
      > a {
        display: block;
        padding: 0 5px;   
      } 
    }
  }
`;
export const NavBarSearch = styled.input.attrs({
  placeholder: '搜索'
})
  `
  height: 36px;
  width: 180px;
  outline: none;
  border: none;
  border-radius: 18px;
  background-color: #f2f2f2;
  padding-left: 20px;
  font-size: 15px;
  &.active {
    width: 250px;
  }
  &.slide-enter,&.slide-exit {
    transition: all .4s ease-out;
  }
  &.slide-enter-active {
     width: 250px;  
  }
  &.slide-exit-active {
     width: 180px;
  }
`;
export const SearchIconWrapper = styled.div`
  width: 30px;
  height: 30px;
  &.active {
    background-color: #969696;
  }
  &.show-enter,&.show-exit {
    transition: all .4s ease-out;
  }
  &.show-enter-active {
    opacity: 1; 
  }
  &.show-exit-active {
    opacity: 0;
  }
  position: absolute;
  border-radius: 50%;
  top: 13px;
  right: 5px;
  & > .iconsearch {
    display: block;
    font-size: 17px;
    line-height: 30px;
    color: rgb(51, 51, 51);
  }
`;
export const PageBarItem = styled.div`
  float: right;
  height: 100%;
  padding: 10px 13px;
  box-sizing:border-box;
  line-height: 30px;
  & > a {
    vertical-align: middle;
  }
  .iconfont {
    font-size: 20px;
  }
  img {
    height: 25px;
    vertical-align: middle;
  }
`;
export const UserActiveLink = styled.a`
  display: block;
  float: right;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  padding: 0 20px;
  margin-top: 8px;
  margin-right: 10px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 20px;
  &.writeAricle {
    color: #fff;
    background-color: #ea6f5a;
    .iconfankuitianxie {
      margin-right: 5px;
    }
  }
  &.register {
    width: 80px;
    color: #ea6f5a;
    border: 1px solid rgba(236,97,73,.7);
  }
  &.login {
    color: #969696;
  }
  &.login:hover {
    color: #969696;
  }
`;